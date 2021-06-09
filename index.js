const twilio = require("twilio");
require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const jsonData = '{"numbers": ["+18483211234","+14151234567","+19103217654","+12314567890","+17076543210"]}';

const parsedJsonData = JSON.parse(jsonData)

const client = new twilio(accountSid, authToken);


for (let i = 0; i < parsedJsonData.numbers.length; i++) {
    client.messages
      .create({
        body: "Ahoy, friend!",
        to: `${parsedJsonData.numbers[i]}`,
        from: "+12404716962",
      })
      .then((message) => console.log(message.sid))
      .catch((error) => console.error(error));
}



