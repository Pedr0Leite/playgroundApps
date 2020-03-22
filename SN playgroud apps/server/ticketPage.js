"use strict";
var express = require('express');
var router = express.Router();


router.get('/ticketPage', (req,res)=>{
    res.render('ticketPage', {
    });
})

router.post("/ticketPage", async (req, res) => {
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

  router.use("/ticketPage", router);

module.exports = router;