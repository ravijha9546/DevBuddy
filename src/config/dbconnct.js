const mongoose = require('mongoose');

const connectDB = async()=>{
    await mongoose.connect(
        "mongodb+srv://ravijhasatghara2:root@cluster0.kepkp.mongodb.net/devBuddy"
    );
};

module.exports = connectDB;





