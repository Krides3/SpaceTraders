// import { type } from 'os';
// import data from "../DataBase.json" assert { type: "json"};
// console.log(data);

const DataBase = require('../DataBase.json');

const dotenv=require("dotenv");
const { json } = require("stream/consumers");
dotenv.config()

// fetch('./DataBase.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));


const prompt = require('prompt-sync')();
const systemSymbol = prompt('System + Sector: ' + DataBase.systemSymbol + ' |Correct? otherwise go to change Location.  ');

const prompt2 = require('prompt-sync')();
const waypointSymbol = prompt2('Waypoint: ' + DataBase.waypointSymbol + ' |Correct? otherwise go to change Location. ');
console.log(waypointSymbol);


const options = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + process.env.TOKEN
    },
  };
  
  fetch('https://api.spacetraders.io/v2/systems/' + DataBase.systemSymbol + '/waypoints/' + DataBase.waypointSymbol  , options)
    .then(response => response.json())
    .then(response => {
        var location = (response.data);
        console.log(location)
    })
    .catch(err => console.error(err));

    