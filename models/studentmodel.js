const mongoose=require("mongoose");
const stuSchema=new mongoose.Schema({
    rollno:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    fees:{
        type:Number,
        required:true
    }   
});
module.exports= mongoose.model("student",stuSchema);