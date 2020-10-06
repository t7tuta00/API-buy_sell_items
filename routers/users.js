const express = require('express');
let router = express.Router();

let Userdata = [
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
  ];
  
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
  };

router
.route('')
.get((req, res) => {
    res.json({Userdata});
});
  
router
.route('/createuser')
.post((req, res) => {
  
    Userdata.push({
        id: Userdata.length,
        username: req.body.username,
        name: req.body.name,
        streetaddress: req.body.streetaddress,
        city: req.body.city,
        country: req.body.country,
        email: req.body.email,
        password: req.body.password,
        dateofbirth: req.body.dateofbirth
      })
      res.sendStatus(201);
  });
  
  module.exports = router;