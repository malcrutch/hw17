var express = require('express');
const router = require("express").Router();



router.get("/index",function(req,res){
res.send("success");

});



router.get("/exercise",function(req,res){
    res.send("success");
});



router.get("/stats",function(req,res){
    res.send("success");
});