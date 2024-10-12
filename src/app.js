const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user")


//this will work for all the routes
app.use(express.json());


app.post("/signup", async (req,res) => {
    

    //creating a new instance of the user model 
    //i am creating a new user from the data i recieved
    const user = new User(req.body);

    try{
        //data will be saved onto our database
        //this function will return us a promise
        await user.save();
        res.send("User added successfully");
    } catch(err){
        res.status(400).send("Error saving the user: "+ err.message);
    }
    
});




// Feed API - GET /feed  -get all the users from the database
app.get("/feed", async (req,res) => {
    try{
        const users = await User.find({});
        res.send(users);
    } catch(err) {
        res.status(400).send("Something went wrong");
    }
});



/* //Get user by email

app.get("/user", async (req,res) => {
    const userEmail = req.body.emailId;
    try{
        const users = await User.find({emailId : userEmail});
        if(users.length === 0){
            res.status(404).send("user not found")
        } else{
            res.send(users);
        }
        
    } catch(err){
        res.status(400).send("Something went wrong");   
    }
    
}) */


//delete user api
app.delete("/user", async (req,res) => {
    const userId = req.body.userId;
    try{
        const user = await User.findByIdAndDelete(userId);
        res.send("User Deleted successfully");

    } catch(err) {
        res.status(400).send("Something went wrong");
    }
})

//update data of the user
app.patch("/user", async (req,res) => {
    const userId = req.body.userId;
    const data = req.body;
    try{
        await User.findByIdAndUpdate({_id:userId} ,data);
        res.send("user updated successfully");
    } catch(err){
        res.status(400).send("Something went wrong");
    }
})


connectDB()
.then(() => {
    console.log("Database established");
    app.listen(3000,() => { 
        console.log("server is running on port 3000");
    });
}) .catch(err => {
    console.error("database cannot be connected");
});

