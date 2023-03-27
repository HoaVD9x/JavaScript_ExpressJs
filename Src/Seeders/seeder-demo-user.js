'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Users', [
			/**
			 * email: DataTypes.STRING,
			password: DataTypes.STRING,
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			address: DataTypes.STRING,
			gender: DataTypes.BOOLEAN,
			roleId: DataTypes.STRING,
			 */
			{
				email: 'hoawe96@gmail.com',
				password: '1234',
				firstName: 'john',
				lastname: 'Smith',
				address: 'hanoi',
				gender: 1,
				typeRole: 'ROLE',
				keyRole: 'R1',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
