function sessionAuth(req,res,next){
    //this sets variable for eveey pug file
    //takes value of user from session and adjusts it to locals user 
    res.locals.user=req.session.user;
    next();
}
module.exports=sessionAuth;