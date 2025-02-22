const validator =require("validator");

const ValidateSignUpData = (req)=>{
    const {firstName,lastName,emailId,password} = (req.body)

    if(!firstName || !lastName){
        throw new Error("Please Enter firstName and LastName");

    }
    if(firstName.length<4 || firstName.length>50){
        throw new Error("Name is not Valid");

    }
    if(!validator.isEmail(emailId)){
        throw new Error("Email Id is not valid");

    }
    if(validator.isStrongPassword(password)){
        throw new Error("Please enter a strong Password");
    }


}
module.exports=
{ValidateSignUpData};
