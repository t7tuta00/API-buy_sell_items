const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000

const login = require('./routers/login');
const users = require('./routers/users');
const items = require('./routers/items');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/login', login);
app.use('/users', users);
app.use('/items', items);

let apiInstance = null;
exports.start = () => {
  apiInstance = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
}

exports.stop = () => {
  apiInstance.close();
}