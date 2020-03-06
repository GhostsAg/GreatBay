const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",

    port: 3306, 

    user: "root",

    password: "Rh12271995",

    database: "great_bay"
});

connection.connect(function(err) {
    if(err) throw err;
    console.log("connected as id: " + connection.threadId + "\n");
    bid();
});

//Updates on bid
function bid(cost,name) {
    connection.query(
      "UPDATE items SET ? WHERE ?",
      [
        {
            current_bid: cost
        },
        {
            id: name
        }
      ],
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " products updated!\n");
      }
    );
  }

  module.exports =
  bid