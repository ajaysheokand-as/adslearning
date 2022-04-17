var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const { request } = require('../app');

var schema = mongoose.Schema({
  p_name:String,
  price:String
})

var Product = mongoose.model("Product", schema);

// To find all Product 
router.get('/', async function(req,res,next){
var dt = await Product.find({});
res.send(dt);
});

// to find Product by ID
router.get('/:id', async function(req,res,next){
  // console.log(req.params)
  try{
  var dt = await Product.findById(req.params.id);
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
    var dt = await Product.findById(req.params.id);
      dt.p_name = req.body.p_name;
      dt.price = req.body.price;
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
    var dt = await Product.deleteOne({_id:req.params.id});
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
  var product =  new Product({p_name:url.p_name,
  price:url.price
  })
  product.save();
  res.send(product);
});


module.exports = router;
