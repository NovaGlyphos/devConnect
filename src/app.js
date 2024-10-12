const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user")



app.post("/test",(req,res)=>{
    res.send("test was successful")
})

app.post("/signup", async (req,res) => {
    

    //creating a new instance of the user model 
    const user = new User({
        firstName: "Virat",
        lastName: "Kohli",
        emailId:"viratkohli@gmail.com", 
        password:"virat123",
        age:35,
        gender:"male"
    });

    try{
        //data will be saved onto our database
        //this function will return us a promise
        await user.save();
        res.send("User added successfully");
    } catch(err){
        res.status(400).send("Error saving the user: "+ err.message);
    }
    
});


connectDB()
.then(() => {
    console.log("Database established");
    app.listen(3000,() => { 
        console.log("server is running on port 3000");
    });
}) .catch(err => {
    console.error("database cannot be connected");
});

