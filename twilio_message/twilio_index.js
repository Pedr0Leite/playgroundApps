var moment = require('moment');
var credentials = require("./twilio_credentials");
const accountSid = credentials.accountSid;
const authToken = credentials.authToken;

const client = require('twilio')(accountSid, authToken);
const express = require('express');
const app = express();

const port = "1313";


app.get("", (req, res)=>{
    res.send("Hello there, general Kenobi!");
});

app.listen(port, ()=>{
    console.log(`We are listen on port ${port}`)
});

// function executeMessage(){
// client.messages.create({
// from: 'whatsapp:+14155238886',
// to: 'whatsapp:+351918803413',
// body: 'Pagar a Netflix e a HBO!'
// }).then(message=>
//      console.log(
//     "Sid: " + message.sid + "\n\n"
//       + "Body:" + message.body + "\n\n"
//        + "Date Created: " + message.dateCreated + "\n\n"
//         + "Date Updated: " + message.dateUpdated + "\n\n"
//          + "From: " + message.from + "\n\n"
//           + "To: " + message.to)
// ).done();
// }


setInterval(()=>{
    // executeMessage()
    if(moment().format("D") === "1")
    console.log(moment().format("[Today is] dddd"))
    else
    console.log("Today isn't day to Pay the Netflix");
}, 10000);



// //1 day == 86 400 000 miliseconds
// Object.entries(message).forEach(entry => {
//     const [key, value] = entry;
//     console.log(`${key}: ${value}`);
//   })