const express = require('express');

const router = express.Router();
const Post = require('../models/Posts');



 router.get('/posts',(req,res) => {
     res.send('We are on posts ');
  
  });

  router.post('/',(req,res) => {
      console.log(req.body);

  });

  module.exports = router;

