"use strict";

//custom Modules
var getUserSysId = require("./get_user_sys_id");
getUserSysId = getUserSysId.getUserSysId;
var getUserTickets = require("./get_user_tickets");
getUserTickets = getUserTickets.getUserTickets;
var intro_page = require("./intro_page"); //edit ticket module
var ticketPage = require("./ticketPage");

//Node modules
// const request = require("request");
const bodyParser = require("body-parser");
var express = require("express");
var app = express();

//ejs
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", intro_page);
app.use("/ticketPage", ticketPage);


//Render Intro ticket page
app.get("/", (req, res) => {
  res.render("intro_page");
});


app.post("/", async (req, res) => {
})


//Render ticketPage page
app.get("/ticketPage", (req, res) => {
  res.render("ticketPage", {
    ticketInfo: null
  });
});

//Post sys_id of input user
app.post("/ticketPage", async (req, res) => {
  let fName = req.body.firstName.toLowerCase();
  let lName = req.body.lastName.toLowerCase();

  //This gets the sys ID
  const userID = await getUserSysId(fName, lName);
  var finalInfo;
  var finalInfoOfRecords;

  if (userID == undefined) {
    finalInfo = `The user ${fName} ${lName} is not on ServiceNow or you wrote it wrong!`;
  } else {
    finalInfo = `The user ${fName} ${lName} sys_id is ${userID} !`;
  }
  

  //This gets the amount of INC of the user
  const recordsOfUser = await getUserTickets(userID);
  if (recordsOfUser != "") {
    finalInfoOfRecords = `The user ${fName} ${lName} has the following tickets assigned to him/her: `;
  } else {
    finalInfoOfRecords = `The user ${fName} ${lName} doesn't have any ticket assigned to him/her.`;
  }
  
  res.render("ticketPage", {
    ticketInfo: finalInfo,
    ticketInfoText: finalInfoOfRecords,
    ticketNumber: recordsOfUser.ticketNumbers,
    ticketSysID: recordsOfUser.ticket_Sysid
  });
});

//generate the localhost
app.listen(3000, err => {
  if (err) {
    console.log(err);
  }
  console.log("Server is running");
});
