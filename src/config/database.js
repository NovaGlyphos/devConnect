//write logic to connect database
const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://NovaGlyphos:Kumar$12@namastenode.ekmj3.mongodb.net/devConnect");
};

module.exports = connectDB



