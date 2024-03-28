const dotenv=require("dotenv");
const { json } = require("stream/consumers");
dotenv.config()

const options = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + process.env.TOKEN
    },
  };




fetch('https://api.spacetraders.io/v2/my/ships', options)
  .then(response => response.json())
  .then(response => {
    var ships = (response.data);
    for (let i = 0; i < ships.length; i++) {
        console.log(ships[i]);
    }
  })
  .catch(err => console.error(err));




 