const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName : {
        type:String,
        required:true,
    },
    lastName : {
        type:String,
    },
    emailId : {
        type: String,
        required:true,
        unique:true,
        lowercase: true,
        trim: true,
    },
    age:{
        type: Number,
        min: 18,
    },
    password:{
        type: String,
        required:true,
        
        Description:"Password should be of length 8",
    },
    gender : {
        type: String,
        validate(value){
            if(!["male","female","others"].includes(value)){
                throw new error("Gender is not valid");
            }
                
        },
    },
    photoUrl : {
        type : String,
        default : "https://www.google.com/imgres?q=user%20image&imgurl=https%3A%2F%2Fcdn1.iconfinder.com%2Fdata%2Ficons%2Fuser-pictures%2F101%2Fmalecostume-512.png&imgrefurl=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F403022%2Fbusiness_man_male_user_avatar_profile_person_man_icon&docid=NPYyZzll0pnsbM&tbnid=qVh-F9o1LxQjbM&vet=12ahUKEwiTpYX03Z-LAxXNxjgGHUw4FOwQM3oECBsQAA..i&w=512&h=512&hcb=2&ved=2ahUKEwiTpYX03Z-LAxXNxjgGHUw4FOwQM3oECBsQAA",
    },
    skills : {
        type : [String],
    },
    about : {
        type : String,
        default : "this is user's default about page",
    },
    
},{
    timestamps:true,
});
module.exports = mongoose.model("User",userSchema);