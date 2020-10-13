const express = require('express');
var bodyParser = require('body-parser')
const bcrypt = require('bcryptjs');
let router = express.Router();

const users2 = require('./users2');
const db = require('./db');

const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;

/*let Userdata = [
    {
        id: 0,
        username: "Kilpikalevi",
        name: "Taneli",
        streetaddress: "Apinakuja 2",
        city: "Oulu",
        country: "Suomi",
        email: "Apina@gmail.com",
        password: "Salis12",
        dateofbirth: "12.12.1990"
    }
  ];*/
  
  /*
  let userObject = {
        "id": 0,
        "username": "Kilpikalevi",
        "name": "Taneli",
        "streetaddress": "Apinakuja 2",
        "city": "Oulu",
        "country": "Suomi",
        "email": "Apina@gmail.com",
        "password": "Salis12",
        "dateofbirth": "12.12.1990"
  };*/

//toimii
router
.route('')
.get(
    passport.authenticate('basic', { session: false }),
    (req, res) => {
    db.query('SELECT * FROM users;').then(results => {
        res.json({ user: results})
    })
    .catch(() => {
        res.sendStatus(500);
    })
    /*let user = users2.getAllUsers()
    res.json({user});*/
});
  
router
.route('/createuser')
.post(
    passport.authenticate('basic', { session: false }),
    (req, res) => {

      const hashedPassword = bcrypt.hashSync(req.body.password, 6);
      users2.addUser(
          req.body.username,
          req.body.email,
          hashedPassword,
          req.body.name,
          req.body.streetaddress,
          req.body.city,
          req.body.country,
          req.body.dateofbirth
          )
      res.sendStatus(201);
  });

router
.route('/delete/:id')
.delete(
    passport.authenticate('basic', { session: false }),
    (req, res) => {
        db.query('DELETE FROM users WHERE id = ?',[req.params.id]);
        db.query('ALTER TABLE users AUTO_INCREMENT=?',[(req.params.id-1)]); 
        /*let Itemid = req.params;
        console.log(Itemid.id);
        console.log(ItemsData[Itemid.id]);
        ItemsData.splice(Itemid.id,ItemsData.length);
        console.log(ItemsData);*/
        res.sendStatus(200);
    })
  
  module.exports = router;