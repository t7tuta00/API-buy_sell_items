const express = require('express')
var bodyParser = require('body-parser')
const bcrypt = require('bcryptjs');
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

app.get('/httpBasicProtectedResource',
        passport.authenticate('basic', { session: false }),
        (req, res) => {
  res.json({
    yourProtectedResource: "profit"
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


