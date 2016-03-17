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
            image_url: cardObj[0].editions[0].image_url,
            color: cardColor(cardObj[0].colors[0])
        };
        cb(card);
    });
};

function cardColor(c){
    if(!c) { 
        return "#808080"; 
    }
    if(c == "red"){ 
        return "#FF0000"; 
    } else if(c == "green"){ 
        return "#00FF00"; 
    } else if(c == "white"){ 
        return "#404040"; 
    } else if(c == "blue"){ 
        return "#0000FF"; 
    } else { 
        return "#000000"; 
    }
}