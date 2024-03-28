const DataBase = require('../DataBase.json');


function getShips() {
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + DataBase.token,
    },
  };

  fetch("https://api.spacetraders.io/v2/my/ships", options)
    .then((response) => response.json())
    .then((response) => {
      var ships = response.data;
      for (let i = 0; i < ships.length; i++) {
        console.log(ships[i]);
        
      }
    })
    .catch((err) => console.error(err));
}
