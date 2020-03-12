var axios = require("axios");
var credentials = require("./credentials");

const instanceURL = credentials.snInstance;
const userName = credentials.userName;
const passWord = credentials.passWord;

const number = "INC0000060";

async function getTicketSysId(number) {
  const response = await axios.get(
    `${instanceURL}api/now/table/incident?sysparm_query=number&sysparm_display_value=${number}&sysparm_limit=1`,
    {
      auth: {
        username: userName,
        password: passWord
      }
    }
  );

  const ticketSys_Id = response.data;
  // console.log('ticketSys_Id :', ticketSys_Id);
  return ticketSys_Id.result[0].sys_id;
}

const ticketSys_Id = getTicketSysId(number).then(value => {
  console.log(value);
  return value;
});

console.log('asdas:', ticketSys_Id);

// async function changeFieldValues(ticketSys_Id) {
//     const response = await axios.patch(
//       `${instanceURL}api/now/table/incident?sysparm_query=user_name%3D${ticketSys_Id}`,
//       {
//         auth: {
//           username: userName,
//           password: passWord
//         },
//         data: {
//             "short_description": "change test"
//         }
//       }
//     ).then(response=>{
//         console.log(response)
//     });

// }

// console.log(changeFieldValues(ticketSys_Id));
