var axios = require("axios");
var credentials = require("./credentials");

const instanceURL = credentials.snInstance;
const userName = credentials.userName;
const passWord = credentials.passWord;

const numberSysid = "57789773db32001064fdf26b68961907";
var requestBody = '{"work_notes":"Test"}';

async function postInfo(numberSysid) {
  const response = await axios.patch(
    `${instanceURL}api/now/table/incident/${numberSysid}`,
    {
      auth: {
        username: userName,
        password: passWord
      },
      data: {
        requestBody
      }
    }
    );

    const responseFromServer = response.data;
    console.log('responseFromServer :', responseFromServer);

    return responseFromServer;
  }

  console.log('postInfo :', postInfo(numberSysid));
  