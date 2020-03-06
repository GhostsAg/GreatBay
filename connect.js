const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",

    port: 3306, 

    user: "root",

    password: "password",

    database: "great_bay"
});

connection.connect(function(err) {
    if(err) throw err;
    console.log("connected as id: " + connection.threadId + "\n");
    //createBid();
});

//Updates on bid
function bid() {
    console.log("Updating bid...\n");
    connection.query(
      "UPDATE items SET ? WHERE ?",
      [
        {
            current_bid: extraData.cost
        },
        {
            id: extraData.bid
        }
      ],
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " products updated!\n");
      }
    );
  }