var axios = require("axios");
var credentials = require("./credentials");

const instanceURL = credentials.snInstance;
const userName = credentials.userName;
const passWord = credentials.passWord;

async function getUserSysId(var1, var2) {
  let firstN = var1.toLowerCase().trim();
  let lastN = var2.toLowerCase().trim();

  try {
    //resolve
    var user_id = firstN + "." + lastN;
    const response = await axios.get(
      `${instanceURL}api/now/table/sys_user?sysparm_query=user_name%3D${user_id}`,
      {
        auth: {
          username: userName,
          password: passWord
        }
      }
    );

    const userSysId = response.data;
    // console.log('userSysId :', userSysId);

    if (userSysId != undefined) {
      const user = response.data.result[0].sys_id;
      return user;
    } else {
      return undefined;
    }
  } catch (err) {
    //reject
    console.log("AN ERROR HAS OCCURRED IN USER SYS ID:", err);
  }
}

module.exports = { getUserSysId };

//------------------------------------------------------------

// var axios = require("axios");
// var credentials = require("./credentials");

// const instanceURL = credentials.snInstance;
// const userName = credentials.userName;
// const passWord = credentials.passWord;

// async function getUserSysId(var1, var2) {
//   let firstN = var1.toLowerCase().trim();
//   let lastN = var2.toLowerCase().trim();

//     var user_id = firstN + "." + lastN;
//     const response = await axios.get(
//       `${instanceURL}api/now/table/sys_user?sysparm_query=user_name%3D${user_id}`,
//       {
//         auth: {
//           username: userName,
//           password: passWord
//         }
//       }
//     );

//     const userSysId = response.data.result[0];
//     console.log('userSysId :', userSysId);

//     if(userSysId != undefined){
//       const user = response.data.result[0].sys_id;
//       return user;
//     }else{
//       return 'undefined';
//     }

//     // console.log("userSysId :", userSysId);
//     // return userSysId;
// };

// module.exports = { getUserSysId };
