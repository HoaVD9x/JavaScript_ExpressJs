import db from '../Models/index';
import CRUDService from '../Services/CRUDServices';
let getHomePage = async (req, res) => {
	try {
		let data = await db.User.findAll();
		console.log(data);
		return res.render('HomePage.ejs', { data: JSON.stringify(data) });
	} catch (e) {
		console.log(e);
	}
};
let DemoPost = async (req, res) => {
	let message = await CRUDService.createUser(req.body);
	console.log(message);
	return res.send('success post !');
};

//object = {key:value}
module.exports = {
	getHomePage: getHomePage,
	DemoPost: DemoPost,
};
