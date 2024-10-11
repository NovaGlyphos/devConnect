const express = require("express");
const app = express();

app.use("/user",(req,res) => {
    res.send("HAHAHAAHA");
})


app.get("/user",(resq,res) => {
    res.send({firstName:"Ayush",lastName:"Guleria"});
})

app.post("/user",(req,res) => {
    //saving data to db
    res.send("Data successfully saved to the database");
})

app.delete("/user",(req,res) => {
    res.send("data deleted successfully")
})

app.use("/test", (req,res) => {
    res.send("hello from test");
})

app.listen(3000,() => {
    console.log("server is running on port 3000");
});