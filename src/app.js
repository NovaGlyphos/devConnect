const express = require("express");
const app = express();

app.use("/user", [(req,res,next) => {
    //route handler
    // res.send("route Handler 1");
    console.log("handeling the route user");
    next();

    // res.send("respone 1!!");
}, 
    (req,res,next) => {
    console.log("called the 2nd route handler");
    next();
    // res.send("resonse 2!!");
    
},
(req,res) => {
    console.log("called the 3rd route handler");
    res.send("resonse 3!!");
}]);


app.listen(3000,() => { 
    console.log("server is running on port 3000");
});