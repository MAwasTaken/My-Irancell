const myIrancellDB = require("./db/MyIrancellDB");

myIrancellDB.connect((err) => {
	if (err) console.log(`Error => ${err}`);
	else {
		console.log("Connect To Database Successfully :)");
	}
});
