// const axios = require("axios");
// var credentials = require("./credentials");

// const instanceURL = credentials.snInstance;
// const userName = credentials.userName;
// const passWord = credentials.passWord;

// const instance =instanceURL;
// const userID = "beth.anglin";

// (async () => {
//     const response = await axios.get(`${instanceURL}api/now/table/sys_user?sysparm_query=user_name%3D${userID}`, {
//         auth: {
//             username: userName,
//             password: passWord
//         }
//     });
//     const userSysID = response.data.result[0].sys_id;
//     console.log(userSysID);

//     const tickets = await axios.get(`${instanceURL}api/now/table/incident?sysparm_query=assigned_to=${userSysID}`, {
//         auth: {
//             username: userName,
//             password: passWord
//         }
//     });
//     tickets.data.result.forEach(t => {
//         console.log(t.number);
//     });

// })();

//dev76644.service-now.com/login.do?user_name=admin&sys_action=sysverb_login&user_password=Test@2020



  // getUserTickets('46d44a23a9fe19810012d100cca80666');


// console.log('getUserTickets: ', getUserTickets('46d44a23a9fe19810012d100cca80666'));

// async function getUserSysId(var1, var2) {
//     let firstN = var1.toLowerCase().trim();
//     let lastN = var2.toLowerCase().trim();
  
//     try {
//       var user_id = firstN + "." + lastN;
//       const response = await axios.get(
//         `${instanceURL}api/now/table/sys_user?sysparm_query=user_name%3D${user_id}`,
//         {
//           auth: {
//             username: userName,
//             password: passWord
//           }
//         }
//       );
  
//       const userSysId = response.data.result[0].sys_id;
//       console.log("userSysId :", userSysId);
//       // return userSysId;
      
//       const tickets = await axios.get(
//           `${instanceURL}api/now/table/incident?sysparm_query=assigned_to%=${userSysId}`, 
//           {
//           auth: {
//             username: userName,
//             password: passWord
//           }
//       });
//       tickets.data.result.forEach(t => {
//           console.table(t.number);
//       });
      
//     } catch (err) {
//       console.log("AN ERROR HAS OCCURRED :", err);
//     }
//   };

//------------------------
