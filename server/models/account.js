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
            required : true,
            default : Date.now() 
        }
    }
);

module.exports = mongoose.model("Acc" , accSchema)