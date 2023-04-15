// packages
const mysql = require("mysql");

// creat connnection to mysql database
const myIrancellDB = mysql.createConnection({
	host: "127.0.0.1",
	user: "root",
	password: "",
	database: "myIrancell",
});

// exports
module.exports = myIrancellDB;
