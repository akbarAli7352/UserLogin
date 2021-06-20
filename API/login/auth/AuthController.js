var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
var User = require('../user/User');
var jwt = require('jsonwebtoken');
var bcrypt =   require('bcryptjs');
var config = require('../config');
const { secret } = require('../config');
const model = require('../user/User');
const verifyToken =  require('./VerifyToken')

router.post('/register', (req, res) => {
    var hashedPassword =  bcrypt.hashSync(req.body.password, 8)

    User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    },(err, user) => {
        if(err){
          return res.status(500).send("There was a problem registering  the user");
        }
        var token = jwt.sign({id: user._id}, config.secret, {
          expiresIn: 60*60*24
        })
        res.status(200).send({auth: true, token: token})
    })
})

router.post("/login", (req, res) => {
  User.findOne({email: req.body.email}, (err, user) => {
    if(err) return res.status(500).send("Internal Server Error!");

    var isPasswordValid = bcrypt.compareSync(req.body.password, user.password)
    if(!isPasswordValid) return res.status(401).send({auth:false, token: null})

    var token = jwt.sign({id: user._id}, config.secret, {
      expiresIn: 60*60 *24
    })

    res.status(200).send({auth: true, token: token,userId:user._id})
  })
})
module.exports = router;