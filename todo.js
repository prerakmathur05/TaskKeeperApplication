//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const dateLib = require(__dirname + "/date.js");
let items = ["Study", "Play", "Be an enterpreneur"];
let workItems = [];

app.listen("3000", function() {
  console.log("Server has started so are you ___ ");
});

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));
let day = dateLib.getDay();
// let today = new Date();
// let options = {
//   weekday: "long",
//   day: "numeric",
//   month: "long"
// };
// let day = today.toLocaleDateString("en-US", options);
app.get("/", function(req, res) {
  res.render('list', {
    place: day,
    myarray: items
  });
  });
app.post("/", function(req, res) {
  let item = req.body.newItem;
  console.log(req.body.listName);
  if (req.body.listName==="Work"){
    workItems.push(item);
    res.redirect("/work");
  }
  else{
    items.push(item);
    res.redirect("/");
  }
  console.log(req.body);
});
app.get("/work", function(req, res) {
  res.render("list", {
    place: "Work",
    myarray: workItems
  });
});
app.get("/about", function(req,res){
  res.render("about");
});
// app.post("/", function(req, res) {
//   let item = req.body.newItem;
//   console.log(req.body);
//   workItems.push(item);
//   res.redirect("/work");
// });
//res.sendFile(__dirname + "/list.ejs");
// switch (currentDay) {
//   case 0:
//   day ="Sunday"
//   break;
//   case 1:
//   day ="Monday"
//   break;
//   case 2:
//   day ="Tuesday"
//   break;
//   case 3:
//   day ="Wednesday"
//   break;
//   case 4:
//   day ="Thurday"
//   break;
//   case 5:
//   day ="Friday"
//   break;
//   case 6:
//   day ="Saturday"
//   break;
//
//
// default:
// console.log("Error is trigereed at CurrentDay equals " + currentDay);
//
// }

// if (currentDay===6 ){
//  day = "Saturday";
// }
// if (currentDay===5 ){
//  day = "Friday";
// }
// if (currentDay===4 ){
//  day = "Thursday";
// }
// if (currentDay===3 ){
//  day = "Wednesday";
// }
// if (currentDay===2 ){
//  day = "Tuesday";
// }
// if (currentDay===1 ){
//  day = "Monday";
// }
// if (currentDay===0 ){
//  day = "Sunday";
//}
