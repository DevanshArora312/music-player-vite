const jwt = require("jsonwebtoken");
require("dotenv").config();
 
exports.auth = async (req,res,next) => {
    try{
        const token = req.body.token;
        if (!token){
            res.status(401).json(
                {
                    success:false,
                    message:"Token missing"
                }
            )
        }
        try{
            const payload = jwt.verify(token,process.env.JWT_SECRET_KEY);
            console.log(payload);

            req.user = payload;
            
        } catch (err){
            return res.status(401).json(
                {
                    success:false,
                    message : "Token is invalid"
                }
            )
        }
        next();
    }
    catch(err){
        return res.status(401).json(
            {
                success:false,
                message:"something went wrong while verifying the token"
            }
        )
    }
    
}

exports.isUser = async (req,res,next) => {
    try{
        if (req.user.role !== "User"){
            return res.status(401).json(
                {
                    success:false,
                    message:"This is a protected route for user accounts!"
                }
            )
        }
        next();

    } catch (err){
        return res.status(401).json(
            {
                success:false,
                message:"Cannot verify User role!"
            }
        )
    }
}

exports.isAdmin = async (req,res,next) => {
    try{
        if (req.user.role !== "Admin"){
            return res.status(401).json(
                {
                    success:false,
                    message:"This is a protected route for Admin accounts!"
                }
            )
        }
        next();

    } catch (err){
        return res.status(401).json(
            {
                success:false,
                message:"Cannot verify User role!"
            }
        )
    }
}