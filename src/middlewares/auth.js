const userAuth = (req,res,next)=>{
    const token = "xyz";
    const isUserAuth = token =="xyz";
    if(isUserAuth){
        next();
    }else{
        res.status(401).send("Unauth Access");
    }

}
module.exports = {
    userAuth
}