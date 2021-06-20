var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// router.use(bodyParser.urlencoded({ extended: true }));
// router.use(bodyParser.json());
const verifyToken = require('../auth/VerifyToken')
var User = require('./User');


router.get('/me/:userId', verifyToken, (req, res) => {
    console.log("req.params:",req.params)
    User.findById(req.params.userId, (err, user) => {
      if(err) return res.status(500).send("There is a problem with finding the user.");
      if(!user) return res.status(404).send("User not found!");
      res.status(200).send(user)
    })
})


module.exports = router;