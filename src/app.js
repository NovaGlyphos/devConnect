const express = require("express");
const app = express();

const {adminAuth,userAuth} = require("./middlewares/auth");
//handle auth middleware for GET,POSt,DELETE
//logic of checking if the request is sctaully made by the admin (request is authorized)

//this is a middleware that will only br called for /admin
app.use("/admin" , adminAuth);

app.post("/user/login",(req,res)=>{
    res.send("user logged in successfully")
})

app.get("/user",userAuth,(req,res) => {
    res.send("user data sent"); 
})

app.get("/admin/getAllData", (req,res) => {
    //logic of fetching all data
    
    res.send("All data sent                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ")

});

app.get("/admin/deleteUser", (req,res) => {
    //logic of deleting
    res.send("Deleted user");

});

app.listen(3000,() => { 
    console.log("server is running on port 3000");
});