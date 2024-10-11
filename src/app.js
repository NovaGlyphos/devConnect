const express = require("express");
const app = express();



app.listen(3000,() => {
    console.log("server is running on port 3000");
})


app.use("/",(req,res) => {
    res.send("hi");
});

app.use("/test",(req,res) => {
    res.send("kya haal hai bhai");
});