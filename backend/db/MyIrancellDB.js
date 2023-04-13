const mysql = require("mysql");

const myIrancellDB = mysql.createConnection({
	host: "127.0.0.1",
	user: "root",
	password: "",
	database: "myIrancell",
});

module.exports = myIrancellDB;
