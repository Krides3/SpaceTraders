const dotenv=require("dotenv")
dotenv.config()

const DataBase = require('../DataBase.json');

const options = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + process.env.TOKEN
    },
  };
  
  fetch('https://api.spacetraders.io/v2/systems/' +DataBase.systemSymbol+ '/waypoints?traits=SHIPYARD', options)
    .then(response => response.json())
    .then(response => {
        var shipyards = (response.data);
        for (let i = 0; i < shipyards.length; i++) {
            console.log(shipyards[i]);
        }
      })
    .catch(err => console.error(err));