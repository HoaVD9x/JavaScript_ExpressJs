import db from '../Models/index';
let getHomePage = async (req, res) => {
	try {
		let data = await db.User.findAll();
		console.log(data);
		return res.render('HomePage.ejs', { data: JSON.stringify(data) });
	} catch (e) {
		console.log(e);
	}
};

//object = {key:value}
module.exports = {
	getHomePage: getHomePage,
};
