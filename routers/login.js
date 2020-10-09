/***
 * UNSUSED AND BORING
 * 
 * 
 */


const { text } = require('body-parser');
const express = require('express');
const db = require('./db');

let router = express.Router();

let LoginData = [
    {
        id: 0,
        username: "Kalevi",
        password: "Salis",
    }
  ];
  
  let LoginObject = {
        "id": 0,
        "username": "string",
        "password": "string"
  };


router
.route('')
  .get((req, res) => {
    res.json({LoginData});
  });


module.exports = router;