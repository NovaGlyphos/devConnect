const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String
    },
    emailId: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    },
    photoUrl:{
        type:String,
        default:"https://th.bing.com/th/id/OIP.UCL14P68pN74fd8s7TLgZwAAAA?rs=1&pid=ImgDetMain",
    },
    about: {
        type:String,
        default:"This is default about of the user",
    },
    skills: {
        type:[String],
    }
});

const User = mongoose.model("User", userSchema);

// Ensure unique index is created
User.init().then(() => {
    console.log("Indexes ensured");
}).catch(err => console.log("Index error: ", err));

module.exports = User;
