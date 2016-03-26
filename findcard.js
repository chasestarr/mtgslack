'use strict'
const mtgapi = require('./mtgapi.js');
const reqDeck = require('./reqDeck.js');

module.exports = function(req, res, next){
    let textIn = req.body.text;
    let userName = req.body.user_name;
    let textSplit = textIn.split(" ");
    let cmd = textSplit[1];
    let txt = "";
    for(let i = 2; i < textSplit.length; i++){
        if(i == textSplit.length - 1){
            txt += textSplit[i];
        } else {
            txt += textSplit[i] + " ";
        }
    }
    if(cmd == "card"){
        mtgapi(txt, function(card){
            var botPayload = {
                "attachments": [
                    {
                        "title": card.name,
                        "title_link": card.url,
                        "color": "good",
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
    }
}