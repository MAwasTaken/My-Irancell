// packages
const express = require("express");
const cors = require("cors");

// components
const myIrancellDB = require("./db/MyIrancellDB");

// connect to myIrancell database
myIrancellDB.connect((err) => {
	if (err) console.log(`Error => ${err}`);
	else console.log("Connect To Database Successfully :)");
});

// express instance
const app = express();

// middlewares
app.use(cors());

// routes:
// GET user
app.get("/api/users", (req, res) => {
	let userToken = req.headers.authorization;

	let getMainUserQuery = `SELECT * FROM users WHERE token=${userToken}`;

	myIrancellDB.query(getMainUserQuery, (error, result) => {
		if (error) res.send(null);
		else res.send(result);
	});
});

// GET services
app.get("/api/services/:isActive", (req, res) => {
	let isActive = req.params.isActive;

	let getServicesQuery = `SELECT * FROM services WHERE isActive=${isActive}`;

	myIrancellDB.query(getServicesQuery, (error, result) => {
		if (error) res.send(null);
		else res.send(result);
	});
});

// GET recommended packets
app.get("/api/recommend-packs", (req, res) => {
	let userToken = req.headers.authorization;

	let getUserRecommendPacksQuery = `SELECT * FROM recommend_packet WHERE userID=${1}`;

	myIrancellDB.query(getUserRecommendPacksQuery, (error, result) => {
		if (error) res.send(null);
		else res.send(result);
	});
});

// GET sales
app.get("/api/user-buy", (req, res) => {
	let userToken = req.headers.authorization;

	let getUserByInfo = `SELECT * FROM sales WHERE userID=${1}`;

	myIrancellDB.query(getUserByInfo, (error, result) => {
		if (error) res.send(null);
		else res.send(result);
	});
});
