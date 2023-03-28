import userService from '../Services/UserService';
/**
 * check email password
 * compare password
 * return userInfor
 * return access tokken
 * @param {*} req
 * @param {*} res
 * @returns
 */
let handlerLogin = async (req, res) => {
	let email = req.body.email;
	let password = req.body.password;
	if (!email || !password) {
		return res.status(500).json({
			message: 'Missing input value',
			errorCode: 1,
		});
	}
	let userData = await userService.handlerUserLogin(email, password);
	return res.status(200).json({
		userData,
	});
};

module.exports = {
	handlerLogin: handlerLogin,
};
