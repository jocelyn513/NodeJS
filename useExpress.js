const express = require('express')
const fs = require('fs')

var app = express()
var port = 7878;



app.get('/', function(req, res){
    res.send("Welcome to express server!")
})

app.get('/courses',function(req,res){ 
    fs.readFile('Course.json',function(err,data){ 
        if(!err){
            res.send(JSON.parse(data)) 
        }else{
            throw err;
        }
    }) 
})
app.listen(port, function(err) {
    if(!err)
        console.log("Server is listening on port:", port) 
})// listening to a specific port