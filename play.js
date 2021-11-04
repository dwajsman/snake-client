const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");

//console.log(connect());

setupInput(connect());