'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class AllCourse extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	AllCourse.init(
		{
			key: DataTypes.STRING,
			valueEn: DataTypes.STRING,
			valueVi: DataTypes.STRING,
			type: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'AllCourse',
		},
	);
	return AllCourse;
};
