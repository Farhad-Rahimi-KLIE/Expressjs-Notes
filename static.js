// For make static file you have to make static folder


// Express Js Basic Syntax
// Static folder in Express Js
const express = require('express')
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "index.html")))

app.get('/',(req, res)=>{
    res.send("<h1>Welcome to My Express Js Application</h1>")
});

app.get('/portfolio',(req, res)=>{
    res.render("portfolio")
});
app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})