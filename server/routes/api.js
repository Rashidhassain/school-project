const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require("../models/user");
const mongoose = require("mongoose");
const db = "mongodb+srv://RashidHassain:RashidHassain@cluster0-0dtou.mongodb.net/smsDB?retryWrites=true&w=majority"

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, error => {
  if (error) {
    console.error("Error:" + error);
  } else {
    console.log("Connection to Database Succeeded..");
  }
}
);

// register api
router.post("/register", (req, res) => {
  let userData = req.body;
  let user = new User(userData);
  user.save((error, registeredUser) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).send(registeredUser.firstname + ' ' + registeredUser.lastname + ' ' + 'registered successfully');
    }
  });
});

// login api
router.post("/login", (req, res) => {
  let userData = req.body;
  User.findOne({ email: userData.email }, (error, user) => {
    if (error) {
      console.log(error);
    } else {
      if (!user) {
        res.status(401).send("Invalid Email");
      } else {
        if (user.password != userData.password) {
          res.status(401).send("Invalid Password");
        } else {
          let payload = { subject: user._id }
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token});
        }
      }
    }
  });
});

// Getting user details api
router.get("/getUserDetails", (req, res) =>{
  let email = req.params.email;
  User.findOne({email:email}, (error,user) => {
    if (error) {
      res.status(404).send('User Not Found')
    }else{
      res.status(200).send(user);
    }
  });
})


module.exports = router;
