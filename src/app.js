const express = require('express')
const app = express();
//const { userAuth } = require("./middlewares/auth")
const connectDB=require("./config/dbconnct")
const PORT = process.env.PORT || 3001;
const User = require("./models/user");
app.use(express.json());


app.post("/signup",async (req,res)=>{
    const newuser = new User(req.body);

    try{
        await newuser.save();
        res.send("User added successfully");
    }catch(err){
        res.status(400).send("Erorr adding user"+err.message);
    }

})

connectDB().then(()=>{
    console.log("Database connection established");
    app.listen(PORT, ()=>{
        console.log("Server is running");
        });
}).catch(err=>{
    console.error("Databse not established");

});








