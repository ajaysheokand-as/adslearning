var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const { request } = require('../app');

var schema = mongoose.Schema({
  fname:String,
  lname:String
})

var User = mongoose.model("User", schema);

// To find all User 
router.get('/', async function(req,res,next){
var dt = await User.find({});
res.send(dt);
});

// to find user by ID
router.get('/:id/:city', async function(req,res,next){
  // console.log(req.params)
  try{
  var dt = await User.findById(req.params.id);
  res.send(dt);
  }
  catch{
    res.status(404);
    res.send("User not Found");
  }
  });

  // to update user data by ID
  router.put('/:id', async function(req,res,next){
    console.log(req);
    try{
    var dt = await User.findById(req.params.id);
      dt.fname = req.body.fname;
      dt.lname = req.body.lname;
      dt.save();
    res.send(dt);
    }
    catch{
      res.status(404);
      res.send("User not Found");
    }
    });

// To delete user data by id
router.delete('/:id', async function(req,res,next){
  try{
    var dt = await User.deleteOne({_id:req.params.id});
    res.send("Deleted Successfully");
  }
  catch{
    res.status(404);
    res.send("User not Found")
  }
});

// to save user data in db 
router.post('/', function(req, res, next) {
  var url = req.body;
  var user =  new User({fname:url.fname,
  lname:url.lname
  })
  user.save();
  res.send(user);
});


module.exports = router;
