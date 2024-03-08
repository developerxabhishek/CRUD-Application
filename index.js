const express= require("express");
const app=express();
const mongoose=require("mongoose");
const bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));
mongoose.connect("mongodb://127.0.0.1:27017/cybrom").then(()=>{
    console.log("connected to database");
}).catch((err)=>{
    console.log("error in connecting "+err);
});
app.set("view engine","ejs");
const myStudent=require("./controllers/studentController");
app.get("/",(req,res)=>{
    res.render("home");
});
app.get("/insert",(req,res)=>{
    res.render("insert");
});
app.post("/studentinsert",myStudent.studentSave);
app.post("/editUpdateSAve",myStudent.studentEditSave)
app.get("/display",myStudent.studentdisplay);
app.get("/recdel/:id",myStudent.studentdelete);
app.get("/recedit/:id",myStudent.studentEdit);
app.get("/searchrecord",myStudent.studentSearch);
app.post("/stuSearch/",myStudent.searchData)
app.listen(9000,()=>{
    console.log("listening in a port 9000");
});