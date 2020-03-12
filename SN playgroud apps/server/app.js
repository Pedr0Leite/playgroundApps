// "use strict";

// //custom Modules
// var getUserSysId = require("./get_user_sys_id");
// getUserSysId = getUserSysId.getUserSysId;
// var getUserTickets = require("./get_user_tickets");
// getUserTickets = getUserTickets.getUserTickets;

// //Node modules
// // const request = require("request");
// const bodyParser = require("body-parser");
// var express = require("express");
// var app = express();

// //ejs
// app.set("view engine", "ejs");
// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({ extended: false }));

// //Render Index page
// app.get("/", (req, res) => {
//   res.render("index", { ticketInfo: null });
// });

// //Post sys_id of input user
// app.post("/", (req, res) => {
//   let fName = req.body.firstName.toLowerCase();
//   let lName = req.body.lastName.toLowerCase();

//   getUserSysId(fName, lName).then(id => {
//     //This gets the sys ID
//     // console.log('id:' + id);

//     if (id == undefined) {
//       var finalInfo = `The user ${fName} ${lName} is not on ServiceNow or you wrote it wrong!`;
//     } else {
//       var finalInfo = `The user ${fName} ${lName} sys_id is ${id} !`;
//       var sysID_func = id;

//       getUserTickets(sysID_func).then(recordsOfUser => {
//         //This gets the ticket numbers
//         var finalNumbers = recordsOfUser;
//         if (finalNumbers != "") {
//           var infoText = `The user ${fName} ${lName} has the following tickets assigned to him/her: `;
//         } else {
//           var infoText = `The user ${fName} ${lName} don't have any ticket assigned to him/her.`;
//         }

//         res.render("index", {
//           ticketInfo: finalInfo,
//           ticketInfoText: infoText,
//           ticketNumber: finalNumbers
//         });
//       });
//     }
//   });
// });

// //generate the localhost
// app.listen(3000, err => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("Server is running");
// });

//--------------------------------------------------

"use strict";

//custom Modules
var getUserSysId = require("./get_user_sys_id");
getUserSysId = getUserSysId.getUserSysId;
var getUserTickets = require("./get_user_tickets");
getUserTickets = getUserTickets.getUserTickets;
var edit_page = require("./edit_ticket"); //edit ticket module

//Node modules
// const request = require("request");
const bodyParser = require("body-parser");
var express = require("express");
var app = express();

//ejs
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/edit_ticket", edit_page);

//Render Index page
app.get("/", (req, res) => {
  res.render("index", {
    ticketInfo: null
  });
});

//Post sys_id of input user
app.post("/", async (req, res) => {
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

  res.render("index", {
    ticketInfo: finalInfo,
    ticketInfoText: finalInfoOfRecords,
    ticketNumber: recordsOfUser
  });
});

//Render Edit ticket page
app.get("/edit_ticket", (req, res) => {
  res.render("edit_ticket", {
    ticketNumbers: null,
    value: "Just testing values" 
  });
});

app.post("/edit_ticket", async (req, res) => {

})

//generate the localhost
app.listen(3000, err => {
  if (err) {
    console.log(err);
  }
  console.log("Server is running");
});
