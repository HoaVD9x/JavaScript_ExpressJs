const Sequelize = require('sequelize');

const sequelize = new Sequelize('expressjs', 'root', '1234', {
	host: 'localhost',
	dialect: 'mysql',
});

let connectDB = async () => {
	try {
		await sequelize.authenticate();
		console.log('connected to Database');
	} catch (Exception) {
		console.log('Unable to connect to Database : ', Exception);
	}
};

module.exports = connectDB;
