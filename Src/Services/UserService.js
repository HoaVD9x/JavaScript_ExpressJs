import DB from '../Models/index';
import Bcrypt from 'bcrypt';

let handlerUserLogin = (email, password) => {
	return new Promise(async (resolve, reject) => {
		try {
			let userData = {};
			let isExist = await CheckUserEmail(email);
			if (isExist) {
				let user = await DB.User.findOne({
					attributes: ['email', 'roleId', 'password'],
					where: {
						email: email,
					},
					raw: true,
				});
				if (user) {
					let checkPassword = await Bcrypt.compareSync(
						password,
						user.password,
					);
					if (checkPassword) {
						userData.errCode = 0;
						userData.errMessage = 'ok';
						delete user.password;
						userData.user = user;
					} else {
						userData.errCode = 3;
						userData.errMessage = ' wrong password';
					}
				} else {
					(userData.errCode = 2),
						(userData.errMessage = 'User is not found !');
				}
			} else {
				userData.errCode = 1;
				userData.errMessage =
					"Your's Email is not exist in system, please try orther email ! ";
			}
			resolve(userData);
		} catch (e) {
			reject(e);
		}
	});
};
let CheckUserEmail = (email) => {
	return new Promise(async (resolve, reject) => {
		try {
			let user = await DB.User.findOne({ where: { email: email } });
			if (user) {
				resolve(true);
			} else {
				resolve();
			}
		} catch (e) {
			reject(e);
		}
	});
};

module.exports = {
	handlerUserLogin: handlerUserLogin,
};
