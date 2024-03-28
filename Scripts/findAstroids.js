const dotenv=require("dotenv")
dotenv.config()

const DataBase = require('../DataBase.json');

const options = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + process.env.TOKEN
    },
  };
  
  fetch('https://api.spacetraders.io/v2/systems/' + DataBase.systemSymbol +'/waypoints?type=ENGINEERED_ASTEROID', options)
    .then(response => response.json())
    .then(response => {
        var astroids = (response.data);
        for (let i = 0; i < astroids.length; i++) {
            console.log(astroids[i]);
        }
      })
    .catch(err => console.error(err));