
// Express Js Basic Syntax
// Error Handling in Express Js
const express = require('express')
const app = express();
const port = 3000;

app.get('/',(req, res)=>{
    res.send("<h1>Welcome to My Express Js Application</h1>")
});
// make error route
app.get('/error',(req, res)=>{
    throw Error("Somthing was wrong")
});

app.get('/portfolio',(req, res)=>{
    res.render("portfolio")
});
app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})

// Make error code to Execute
app.use(errorHandler = (err, req, res, next)=>{
    if (res.headersSent) {
        return next(err)
    }
    res.status(500)
    res.render('error', {error : err})
})