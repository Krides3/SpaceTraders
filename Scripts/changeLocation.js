const fs = require("fs");
const data = fs.readFileSync('DataBase.json');



var DataBase = JSON.parse(data);
console.log(DataBase)

const prompt = require('prompt-sync')();


function promptWithDefault(message, defaultValue) {
    const input = prompt(`${message} (${defaultValue}) | Change Location to: `);
    return input.trim() ? input.trim() : defaultValue;
}

const newSystemSymbol = promptWithDefault('System + Sector', DataBase.systemSymbol);
const newWaypointSymbol = promptWithDefault('Waypoint', DataBase.waypointSymbol);

DataBase.systemSymbol = newSystemSymbol
DataBase.waypointSymbol = newWaypointSymbol;
 


fs.writeFileSync('DataBase.json', JSON.stringify(DataBase));