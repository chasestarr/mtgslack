'use strict'
module.exports = function(req, res, next){
  let userName = req.body.user_name;
  var botPayload = {
    text : 'Hello, ' + userName + '!'
  };

  // avoid infinite loop
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}