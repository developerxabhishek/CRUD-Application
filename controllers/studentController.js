const studentModel = require("../models/studentmodel");
var express = require("express");
var app = express();
app.set("view engine", "ejs");
//THIS FUNCTION IS FOR SAVING STUDENTS DATA
const studentSave = (req, res) => {
  let studentData = new studentModel({
    rollno: req.body.rno,
    name: req.body.nm,
    city: req.body.city,
    fees: req.body.fees,
  });
  studentData
    .save()
    .then((data) => {
      console.log("data saved successfully ");
    })
    .then((data) => {
      res.render("insert");
    })
    .catch((err) => {
      console.log("error in saving " + err);
    });
};
//tHIS FUNCTION IS FOR DISPALYING STUDENT DATA
const studentdisplay = (req, res) => {
  studentModel.find().then((data) => {
    let mydata = data;
    res.render("display", { studata: mydata });
  });
};
//thIS FUNCTION IS FOR DELTEING STUDENT DATA

const studentdelete = (req, res) => {
  studentModel.findByIdAndRemove(req.params.id).then(() => {
    studentModel.find().then((data) => {
      let mydata = data;
      res.render("display", { studata: mydata });
    });
  });
};

//tHIS FUNCTION IS FOR EDITING STUDENT DATA
const studentEdit = (req, res) => {
  let myid = req.params.id;
  studentModel.find({ _id: myid }).then((data) => {
    let mydata = data;
    res.render("studentEdit", { studata: mydata });
    console.log(mydata);
  });
};
//THIS FUNCTION IS FOR SAVING AN EDITED  DATA OF STUDENT....
const studentEditSave = (req, res) => {
  let myid = req.body.userid;
  let myroll = req.body.roll;
  let myname = req.body.nm;
  let mycity = req.body.city;
  let myfees = req.body.fees;
  studentModel
    .findByIdAndUpdate(
      { _id: myid },
      {
        rollno: myroll,
        name: myname,
        city: mycity,
        fees: myfees,
      }
    )
    .then(() => {
      res.render("home");
    });
};
//This function is for searching data from page
const studentSearch = (req, res) => {
  let rollno = req.body.rno;
  console.log(rollno);
  studentModel.find({ rollno: rollno }).then((data) => {
    let mydata = data;
    res.render("studentSearch", { studata: mydata });
    console.log(mydata);
  });
};

const searchData = (req, res) => {
  let rollno = req.body.rno;
  console.log(rollno);
  studentModel.find({ rollno: rollno }).then((data) => {
    let mydata = data;
    res.render("searchstupage", { studata: mydata });
    console.log(mydata);
  });
};

//eXPORTING ALL THE FUNCTION TO INDEX FILE..
//eXPORTING ALL THE FUNCTION TO INDEX FILE..
//eXPORTING ALL THE FUNCTION TO INDEX FILE..
//eXPORTING ALL THE FUNCTION TO INDEX FILE..
module.exports = {
  studentSave,
  studentdisplay,
  studentdelete,
  studentEdit,
  studentEditSave,
  studentSearch,
  searchData,
};
