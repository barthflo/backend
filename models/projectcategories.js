'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class ProjectCategories extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			this.hasOne(models.Project, {
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
				foreignKey: 'id',
			});
			this.hasOne(models.Category, {
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
				foreignKey: 'id',
			});
		}
	}
	ProjectCategories.init(
		{
			categoryId: {
				type: DataTypes.INTEGER,
				references: {
					model: 'Category',
					key: 'id',
				},
			},
			projectId: {
				type: DataTypes.INTEGER,
				references: {
					model: 'Project',
					key: 'id',
				},
			},
		},
		{
			timestamps: false,
			sequelize,
			modelName: 'ProjectCategories',
		},
	);
	return ProjectCategories;
};
