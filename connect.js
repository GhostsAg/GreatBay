const mysql = require("mysql");
const inquirer = require("inquirer");

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

const createBid = (item, price) => {
    connection.query("INSERT INTO items SET ?",
        {
            item: item,
            current_bid: price 
        },
        function(err, res) {
            if (err) throw err;
            timeOut(res.insertId);
            console.log(res.affectedRows + " " + item + " auction inserted!\n");
            
        }
    )
}

function selectAll() {
    connection.query(`SELECT * FROM items`, (err, res) => {
        if (err) throw err;
        console.table(res);
    });
}

const updateSold = (id) => {
    connection.query("UPDATE items SET ? WHERE ?",
    [
        { sold: true},
        { id: id}
    ],
    (err, res) => {
        if(err) throw err;
        selectAll();
    })
}

const timeOut = (itemId) => {

    let timer = 0;
    const timeRun = setInterval( function() {
        timer++;
        if (timer > 45) {
            clearInterval(timeRun);
            updateSold(itemId)
            selectAll();
        }
    }, 1000);
}
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
