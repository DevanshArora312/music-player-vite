const acc = require("../models/account");
const bcrypt = require("bcrypt");

exports.signup = async(req,res) => {   
    try{
        const {username,email,password,regd} = req.body;
        const findEmail = await acc.findOne({email});
        if (findEmail){
            res.status(400).json(
                {
                    ok:false,
                    success:false,
                    data:"Email already exists!"
                }
            )
            return;
        }
        let newpassword;
        try{
            newpassword = await bcrypt.hash(password,10);
        }
        catch(err){
            console.log("Error in hashing!");
        }
        const response = await acc.create({username,email,password:newpassword,regd});
        res.status(200).json(
            {
                ok:true,
                success:true,
                data:response
            }
        )
    }
    catch(err){
        console.log(err.message);
        res.status(500).json(
            {
                ok:false,
                success:false,
                data:"Server Error"
            }
        )
    }
}

exports.login = async(req,res) => {   
    try{
        const {email,password} = req.body;
        const findEmail = await acc.findOne({email});
        if (!findEmail){
            res.status(400).json(
                {
                    ok:false,
                    success:false,
                    data:"Account with given email not found!"
                }
            )
            return;
        }
        let check;
        try{
            check = await bcrypt.compare(password,findEmail.password);
            if (check){
                res.status(200).json(
                    {
                        ok:true,
                        success:true,
                        data:"Login Successful!"
                    }
                )
            }
            else{
                res.status(400).json({
                    success:false,
                    data:"password does not match!"
                })
            }
        }
        catch(err){
            console.log("Error in Comparing!");
            res.status(500).json(
                {
                    ok:false,
                    success:false,
                    data:"Server Error"
                }
            )
        }
        
    }
    catch(err){
        console.log(err.message);
        res.status(500).json(
            {
                ok:false,
                success:false,
                data:"Server Error"
            }
        )
    }
}