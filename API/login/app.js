var express = require('express');
var app = express();
var db = require('./db');
var cors =  require("cors")
app.use(cors({origin: '*'}));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,Content-Type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

var UserController = require('./user/UserController');
var AuthController =  require('./auth/AuthController')

app.use('/users', UserController);
app.use('/api/auth', AuthController)

module.exports = app;