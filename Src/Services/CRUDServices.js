import Bcrypt from 'bcrypt';
import DB from '../Models';

const salt = Bcrypt.genSaltSync(10);
let createUser = async (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			let hashPasswordFromBcript = await HashUserPassword(data.password);
			await DB.User.create({
				email: data.email,
				password: hashPasswordFromBcript,
				gender: data.gender === 1 ? true : false,
				roleId: data.roleId,
			});
			resolve('creted new User success !');
		} catch (e) {
			reject(e);
		}
	});
};
let HashUserPassword = (password) => {
	return new Promise(async (resolve, reject) => {
		try {
			const hashPassword = await Bcrypt.hashSync(password, salt);
			resolve(hashPassword);
		} catch (e) {
			reject(e);
		}
	});
};

module.exports = { createUser, createUser };
