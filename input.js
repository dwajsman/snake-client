const { connect } = require("./client");
const { stdin } = require("process");

let connection;


const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }

  if (key === 'w') {
  connection.write("Move: up");
  // console.log("=w=");
  }

  if (key === 'a') {
  connection.write("Move: left");
  // console.log("=a=");
  }

  if (key === 's') {
 connection.write("Move: down");
  // console.log("=s=");
  }

  if (key === 'd') {
  connection.write("Move: right");
  // console.log("=d=");
  }

  if (key === '1') {
  connection.write("Say: Sssss");
  }

  if (key === '2') {
  connection.write("Say: 404 Snake not found");
  }

  if (key === '3') {
  connection.write("Say: Want an apple?");
  }

  if (key === '4') {
  connection.write("Say: Boom!");
  }


};


// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


module.exports = {
  setupInput,
}