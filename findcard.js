'use strict'
module.exports = function(req, res, next){
    let textIn = req.body.text;
    let userName = req.body.user_name;
    let textSplit = textIn.split(" ");
    let textOut = "";
    for(let i = 1; i < textSplit.length; i++){
        if(i == textSplit.length - 1){
            textOut += textSplit[i];
        } else {
            textOut += textSplit[i] + " ";
        }
    }
    // let usr = req.body.user_name;
    // let card = text.substr(text.indexOf(" ") + 1);
    var botPayload = {
        text : textOut
    };

    // avoid infinite loop
    if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
    } else {
    return res.status(200).end();
    }
}