const dotenv=require("dotenv")
dotenv.config()

const options = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + process.env.TOKEN
    },
  };
  
   fetch('https://api.spacetraders.io/v2/my/agent', options)
     .then(response => response.json())
     .then(response => console.log(response))
     .catch(err => console.error(err));
