// packages
const express = require("express");
const cors = require("cors");

// components
const myIrancellDB = require("./db/MyIrancellDB");
const getUserIDFromUserToken = require("./utils/funcs");

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

	let getMainUserQuery = `SELECT * FROM users WHERE token="${userToken}"`;

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
	let userID = null;
	let userToken = req.headers.authorization;

	getUserIDFromUserToken(userToken).then((result) => {
		userID = result[0].id;

		let getUserRecommendPacksQuery = `SELECT * FROM recommend_packet WHERE userID=${userID}`;

		myIrancellDB.query(getUserRecommendPacksQuery, (error, result) => {
			if (error) res.send(null);
			else res.send(result);
		});
	});
});

// GET sales
app.get("/api/user-buy", (req, res) => {
	let userToken = req.headers.authorization;

	let userID = null;

	getUserIDFromUserToken(userToken).then((result) => {
		userID = result[0].id;

		let getUserByInfo = `SELECT * FROM sales WHERE userID=${userID}`;

		myIrancellDB.query(getUserByInfo, (error, result) => {
			if (error) res.send(null);
			else res.send(result);
		});
	});
});

// port
app.listen(3000);
