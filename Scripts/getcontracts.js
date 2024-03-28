const dotenv=require("dotenv");
const { json } = require("stream/consumers");
dotenv.config()



const options = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+ process.env.TOKEN
  },
};

fetch('https://api.spacetraders.io/v2/my/contracts', options)
  .then(response => response.json())
  .then(response => {
    var contracts = (response.data);
    for (let i = 0; i < contracts.length; i++) {
        console.log(contracts[i].terms);}
  })
  .catch(err => console.error(err));

  
