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

