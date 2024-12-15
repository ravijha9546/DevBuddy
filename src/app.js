const express = require('express')
const app = express();
const { userAuth } = require("./middlewares/auth")




app.get("/user/getUserData",userAuth,(req,res)=>{
    try{
        //throw new error;
        res.send("All data sent"); 
    }catch(err){
        res.status(500).send("Something went wrong");
    }        
});
app.delete('/user/deleteUSer',userAuth,(req,res)=>{
    try{
        res.send("User deleted");
    }catch(err){
        res.status(500).send("Something went wrong");
    }
    
});
app.use("/",(err,req,res,next)=>{
    res.status(500).send("Something went wrong. Contact Support");
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=>{
console.log("Server is running");
});