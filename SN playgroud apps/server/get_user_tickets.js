// var axios = require("axios");
// var credentials = require("./credentials");
// // var getSysID = require("./get_user_sys_id");
// // getSysID = getSysID.getUserSysId;

// const instanceURL = credentials.snInstance;
// const userName = credentials.userName;
// const passWord = credentials.passWord;

// async function getUserTickets(sysID) {
//     try{
//          const tickets = await axios.get(
//           `${instanceURL}api/now/table/incident?sysparm_query=assigned_to=${sysID}`,
//           {
//           auth: {
//             username: userName,
//             password: passWord
//           }
//       });
//       var ticketNumbers = [];
//       tickets.data.result.forEach(t => {
//         ticketNumbers.push(t.number);
//           // return ticketNumbers;
//           // console.table(t.number);
//       });
//       // console.log('ticketNumbers :', ticketNumbers);
//       return ticketNumbers;

//     } catch (err) {
//       console.log("AN ERROR HAS OCCURRED IN USER TICKETS:", err);
//     }
//   };

// module.exports = { getUserTickets };

var axios = require("axios");
var credentials = require("./credentials");
// var getSysID = require("./get_user_sys_id");
// getSysID = getSysID.getUserSysId;

const instanceURL = credentials.snInstance;
const userName = credentials.userName;
const passWord = credentials.passWord;

async function getUserTickets(sysID) {

  if (sysID != null && sysID != "null") {
    try {
      const tickets = await axios.get(
        `${instanceURL}api/now/table/incident?sysparm_query=assigned_to=${sysID}`,
        {
          auth: {
            username: userName,
            password: passWord
          }
        }
      );

      // console.log(tickets.data);
      
      var ticketNumbers = [];
      tickets.data.result.forEach(ticket => {
        ticketNumbers.push(`The record ${ticket.number}: "${ticket.short_description}" has an Impact of: ${ticket.impact}, Urgency of: ${ticket.urgency} and Priority of: ${ticket.priority}. 
        The last time it was updated: ${ticket.sys_updated_on}`);

      });
      return ticketNumbers;
    } catch (err) {
      console.log("AN ERROR HAS OCCURRED IN USER TICKETS:", err);
    }
  } else {
    return "";
  }
}

module.exports = { getUserTickets };
