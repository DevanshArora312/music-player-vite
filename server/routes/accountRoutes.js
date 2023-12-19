const express = require("express");
const router = express.Router();
const {auth,isAdmin,isUser} = require("../middleware/auth");
const {signup,login} = require("../controllers/accounts");
 
router.post("/signup",signup);
router.post("/login",login);

// Protected routes

router.get("/test",auth,async (req,res)=> {
    res.status(200).json(
        {
            success:true,
            message : "Welcome to test route!"
        }
    )
})

router.get("/user",auth,isUser,async (req,res)=> {
    res.status(200).json(
        {
            success:true,
            message : "Welcome to protected route for user accounts!"
        }
    )
})
router.get("/admin",auth,isAdmin,async (req,res)=> {
    res.status(200).json(
        {
            success:true,
            message : "Welcome to protected route for admin accounts!"
        }
    )
})

module.exports = router;