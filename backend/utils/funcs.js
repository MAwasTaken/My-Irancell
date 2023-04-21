// components
const myIrancellDB = require("./../db/MyIrancellDB");

const getUserIDFromUserToken = (userToken) => {
	let getMainUserIDQuery = `SELECT id FROM users WHERE token="${userToken}"`;

	return new Promise((resolve, reject) => {
		myIrancellDB.query(getMainUserIDQuery, (error, result) => {
			if (error) {
				console.log("Error In Getting getUserIDFromUserToken => ", error);

				return false;
			}

			resolve(result);
		});
	});
};

// exports
module.exports = getUserIDFromUserToken;
