// components
const myIrancellDB = require("../db/MyIrancellDB");

const getUserIDFromUserToken = (userToken) => {
	let getMainUserIDQuery = `SELECT id FROM users WHERE token=${userToken}`;

	myIrancellDB.query(getMainUserIDQuery, [], (error, result) => {
		if (error) {
			console.log("Error In Getting getUserIDFromUserToken => ", error);

			return false;
		}

		return result;
	});
};

// exports
module.exports = { getUserIDFromUserToken };
