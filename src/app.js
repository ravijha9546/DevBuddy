const express = require('express')


const app = express();
const { userAuth } = require("./middlewares/auth")




app.get("/user/getUserData",userAuth,(req,res)=>{
        res.send("All data sent");   
});


app.delete('/user/deleteUSer',userAuth,(req,res)=>{
    res.send("User deleted");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=>{
console.log("Server is running");
});