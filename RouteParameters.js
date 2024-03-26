
// Express Js Basic Syntax
// Route Parameters in Express Js
const express = require('express')
const app = express();
const port = 3000;

app.get('/',(req, res)=>{
    res.send("<h1>Welcome to My Express Js Application</h1>")
});

app.get('/portfolio:username',(req, res)=>{
    res.render("portfolio" + req.params.username)
});
app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})