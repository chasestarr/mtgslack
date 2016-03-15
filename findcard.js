'use strict'
module.exports = function(req, res, next){
    let text = req.body.text;
    let userName = req.body.user_name;
    // let usr = req.body.user_name;
    // let card = text.substr(text.indexOf(" ") + 1);
    var botPayload = {
        text : userName
    };

    // avoid infinite loop
    if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
    } else {
    return res.status(200).end();
    }
}