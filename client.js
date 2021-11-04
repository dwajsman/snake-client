const net = require("net");
const { IP, PORT } = require("./constants");


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

 // MY CODE

  conn.on("data", (data) => {
    console.log(data);
    conn.end();
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: DAN");
  // conn.write("Move: up");

 



  });


  // conn.on('connect', () => {
  //   setTimeout(() => {
  //     conn.write("Move: up");
  //   }, 1000);
  // });

  // conn.on('connect', () => {
  //   setTimeout(() => {
  //     conn.write("Move: left");
  //   }, 2000);
  // });


  // conn.on('connect', () => {
  //   setInterval(() => {
  //     conn.write("Move: up");
  //   }, 500);
  // });




  return conn;
};



//connect();


module.exports = {
  connect,
}