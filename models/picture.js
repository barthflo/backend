'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Picture extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			this.belongsTo(models.Project, {
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			});
			this.hasOne(models.About, {
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
				foreignKey: 'pictureId',
			});
			// this.hasOne(models.About, {onUpdate:'CASCADE', onDelete:'CASCADE', foreignKey: 'id'});
		}
	}
	Picture.init(
		{
			name: { type: DataTypes.STRING, allowNull: false },
			alt: { type: DataTypes.STRING, allowNull: false },
			tag: { type: DataTypes.STRING },
			projectId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'Picture',
		},
	);
	return Picture;
};
