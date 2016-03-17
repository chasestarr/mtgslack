'use strict'
const mtgapi = require('./mtgapi.js');

module.exports = function(req, res, next){
    let textIn = req.body.text;
    let userName = req.body.user_name;
    let textSplit = textIn.split(" ");
    let cmd = textSplitz[1];
    let cardName = "";
    for(let i = 2; i < textSplit.length; i++){
        if(i == textSplit.length - 1){
            cardName += textSplit[i];
        } else {
            cardName += textSplit[i] + " ";
        }
    }
    if(cmd == "card"){
        mtgapi(cardName, function(card){
            var botPayload = {
                "attachments": [
                    {
                        "title": card.name,
                        "title_link": card.url,
                        "color": card.color,
                        "image_url": card.image_url
                    }
                ]
            };

            // avoid infinite loop
            if (userName !== 'slackbot') {
            return res.status(200).json(botPayload);
            } else {
            return res.status(200).end();
            }  
        });   
    } else if(cmd == "deck"){
        
    }
}