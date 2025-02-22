const express = require('express')
const app = express();
//const { userAuth } = require("./middlewares/auth")
const connectDB=require("./config/dbconnct")
const PORT = process.env.PORT || 3001;
const User = require("./models/user");
app.use(express.json());
const {ValidateSignUpData} = require("./utils/validation")
const bcrypt = require("bcrypt")





app.post("/signup",async (req,res)=>{

    
     try{

        ValidateSignUpData(req);

    //encrypt the password
    
    const {firstName, lastName, emailId, password,age} = req.body;
    const hashpassword = await bcrypt.hash(password,10);
    
    console.log(hashpassword);




    //creating an instance of the user model
    const newuser = new User({
        firstName,
        lastName,
        emailId,
        password:hashpassword,
        age,
    });
    


    
        await newuser.save();
        res.send("User added successfully");
    }catch(err){
        res.status(400).send("Erorr : "+err.message);
    }

});

app.patch("/user",async(req,res)=>{
    const userId = req.body.userId;
    const data = req.body;
    try{
        const ALLOWED_UPDATES=[
            "userId",
            "gender",
            "skills",
            "photoUrl",
            "about",
        ];
        const isUpdateAllowed = Object.keys(data).every((k)=>
        ALLOWED_UPDATES.includes(k)
    );
    if(!isUpdateAllowed){
        throw new Error("Update not allowed");
    }


        
        const user = await User.findByIdAndUpdate({_id: userId},data,{
            returnDocument: "after",
            runValidators:true,
        });
        //console.log(user);
        res.send("User Updated Successfully");
    }catch(err){
        res.status(400).send("Error"+err.message);
    }
});

connectDB().then(()=>{
    console.log("Database connection established");
    app.listen(PORT, ()=>{
        console.log(`Server is running on ${PORT}`);
        });
}).catch(err=>{
    console.error("Databse not established :"+err.message);

});








