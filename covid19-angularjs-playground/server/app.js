"use strict";

const bodyParser = require("body-parser");
const express = require("express");
const path = require('path');
const app = express();


app.set('view engine', 'html');
app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({extended:false}))

app.get('/', function(req,res){
res.sendFile('P:/Programacao/Github/playgroundApps/covid19-angularjs-playground/index.html');

});

app.use('/',  express.static('public'));

app.listen(3000, err => {
    if(err){
        console.log('ERROR: ' + err)
    }else{
        console.log('Server is running on 3000!');
    }
})