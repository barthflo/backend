'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Resume extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Resume.init(
		{
			start: DataTypes.DATEONLY,
			end: DataTypes.DATEONLY,
			cardTitle: DataTypes.STRING(255),
			cardSubtitle: DataTypes.STRING(1234),
			cardDetailedText: DataTypes.TEXT,
		},
		{
			sequelize,
			modelName: 'Resume',
		},
	);
	return Resume;
};
