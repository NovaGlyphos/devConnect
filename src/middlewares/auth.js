const adminAuth = (req,res,next) => {
    const token = "xyz";
    const isAuthorized = token === "xyz";
    if(!isAuthorized){
        res.status(401).send("unauthorized request");
    }
    else{
        next();
    }
};

const userAuth = (req,res,next) => {
    const token = "xysz";
    const isAuthorized = token === "xyz";
    if(!isAuthorized){
        res.status(401).send("unauthorized request");
    }
    else{
        next();
    }
};

module.exports = {
    adminAuth,
    userAuth,
}