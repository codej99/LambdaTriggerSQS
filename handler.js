'use strict';

module.exports.hello = (event, context, callback) => {
  console.log("--------------1-----------------")
  const body = JSON.parse(event.Records[0].body); 
  console.log(body);
  console.log("--------------2-----------------")
  console.log("Data Received >>>> %s - %s - %s - %s",body.user_id, body.user_nick, body.contents_title, body.message);
  console.log("--------------3-----------------")
  if(!body.user_id || !body.user_nick || !body.contents_title || !body.message)
    return callback("Messsage Error");

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};