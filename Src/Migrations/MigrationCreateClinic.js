'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Clinics', {
			/**
			 * email: DataTypes.STRING,
			address: DataTypes.STRING,
			description: DataTypes.TEXT,
			image: DataTypes.STRING,
			 */
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			email: {
				type: Sequelize.STRING,
			},
			address: {
				type: Sequelize.STRING,
			},
			description: {
				type: Sequelize.TEXT,
			},
			image: {
				type: Sequelize.STRING,
			},

			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('Clinics');
	},
};