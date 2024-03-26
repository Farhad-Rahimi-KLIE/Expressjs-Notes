const express = require('express')
const router = express.Router();
const Blogs = require("../data/blogs");

router.get('/',(req, res)=>{
    res.send("<h1>Welcome to My Express Js Application</h1>")
});

router.get('/portfolio',(req, res)=>{
    res.render("portfolio")
});

router.get('/gallery',(req, res)=>{
    res.render("gallery")
});

router.get('/spotify',(req, res)=>{
    res.render("spotify")
});

router.get('/index',(req, res)=>{
    res.render("index")
});

module.exports = router;