'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('DoctorClinicSpecialty', {
			/**
			 * doctorId: DataTypes.INTEGER,
			clinicId: DataTypes.INTEGER,
			specilityId: DataTypes.INTEGER,
			 */
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			doctorId: {
				type: Sequelize.INTEGER,
			},
			clinicId: {
				type: Sequelize.INTEGER,
			},
			specilityId: {
				type: Sequelize.INTEGER,
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
		await queryInterface.dropTable('DoctorClinicSpecialty');
	},
};
