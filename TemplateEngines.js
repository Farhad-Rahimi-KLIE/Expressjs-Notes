
// Express Js Basic Syntax
// Routing in Express Js
const express = require('express')
const app = express();
const port = 3000;
// first make views folder
app.set("view engine", "ejs")

app.get('/',(req, res)=>{
    res.send("<h1>Welcome to My Express Js Application</h1>")
});

app.get('/portfolio',(req, res)=>{
    // for show pages you have to Render this
    res.render("portfolio")
});
app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})