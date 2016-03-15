'use strict'
const request = require('request');

module.exports = function(req, cb){
    let deckbrew = "https://api.deckbrew.com/mtg/cards?name=";
    let name = "";
    request.get(deckbrew + req, function(error, res, cards){
        let cardObj = JSON.parse(cards);
        let card = {
            name: cardObj[0].name,
            url: cardObj[0].store_url,
            image_url: cardObj[0].editions[0].image_url
        };
        cb(card);
    });
};