const express = require("express");
const app = express();


app.get("/getUserData",(req,res) => {
    try{
        //logic of db call and get user data
        throw new Error("dbjfbdj")
        res.send("user data sent");
    } catch(err){
        res.status(500).send("some error occcured contact user team");
    }
     
})

/* app.use("/",(err,req,res,next) => {
    if(err){
        //log the error
        res.status(500).send("something went wrong");
    }
}) */

app.listen(3000,() => { 
    console.log("server is running on port 3000");
});