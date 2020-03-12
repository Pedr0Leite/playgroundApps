"use strict";
var express = require('express');
var router = express.Router();

router.get('/edit_ticket', (req,res)=>{
    res.render('edit_ticket', {
    });
})

module.exports = router;