"use strict";
var express = require('express');
var router = express.Router();


router.get('/intro_page/', (req,res)=>{
    res.render('intro_page', {
    });
})

module.exports = router;