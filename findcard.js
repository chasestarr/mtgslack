'use strict'
const request = require('request');

module.exports = function(req, res, next){
    let textIn = req.body.text;
    let userName = req.body.user_name;
    let textSplit = textIn.split(" ");
    let cardName = "";
    for(let i = 1; i < textSplit.length; i++){
        if(i == textSplit.length - 1){
            cardName += textSplit[i];
        } else {
            cardName += textSplit[i] + " ";
        }
    }
    mtgapi(cardName, function(name, cardUrl){
        var botPayload = {
            text : "<a href=" + cardUrl +  ">" + name + "</a>"
        };

        // avoid infinite loop
        if (userName !== 'slackbot') {
        return res.status(200).json(botPayload);
        } else {
        return res.status(200).end();
        }  
    });  
}

function mtgapi(req, cb){
    let deckbrew = "https://api.deckbrew.com/mtg/cards?name=";
    let name = "";
    request.get(deckbrew + req, function(error, res, cards){
        let cardObj = JSON.parse(cards);
        name = cardObj[0].name;
        cardUrl = cardObj[0].store_url;
        cb(name, cardUrl);
    });
}
// mtgapi("goblin rabblemaster", console.log);