const mongoose = require("mongoose");

const accSchema = new mongoose.Schema(
    {
        username : {
            type:String,
            required:true,
            maxLength : 50,
        },
        email : {
            type:String,
            maxLength:50,
            required:true
        },
        password :{
            type:String,
            required:true,
        },
        regd : {
            type : Date,
            required : false,
            default : Date.now() 
        },
        role : {
            type:String,
            required:true,
            enum:["Admin" , "User"],
            default : "User"
        }
    }
);

module.exports = mongoose.model("Acc" , accSchema)