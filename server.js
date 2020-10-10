const express = require('express')
var bodyParser = require('body-parser')
const fs = require('fs');
const bcrypt = require('bcryptjs');
const fetch = require("node-fetch");
const app = express()
const port = 3000

//const login = require('./routers/login');
const users = require('./routers/users');
const items = require('./routers/items');
const users2 = require('./routers/users2');
const db = require('./routers/db');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//app.use('/login', login);
app.use('/users', users);
app.use('/items', items);

const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;

passport.use(new BasicStrategy(
  async function(username, password, done) {

    const user = await users2.getUserByName(username);
    if(user == undefined) {
      // Username not found
      console.log("HTTP Basic username not found");
      return done(null, false, { message: "HTTP Basic username not found" });
    }

    /* Verify password match */
    if(bcrypt.compareSync(password, user.password) == false) {
      // Password does not match
      console.log("HTTP Basic password not matching username");
      return done(null, false, { message: "HTTP Basic password not found" });
    }
    return done(null, user);
  }
));

app.get('/index.html',(req, res) => 
{
  indexRouter
});


app.route('/documents').get( function(req, res) 
{
    fs.readFile(__dirname + '/index.html', 'utf8', function(err, html)
    {
        if(err){
            console.log(err);
        }else{
            res.send( 
              html
            );
        }
    });
});


let apiInstance = null;
exports.start = () => {
  apiInstance = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
}

exports.stop = () => {
  apiInstance.close();
}


