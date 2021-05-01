'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('ProjectCategories', {
			// id: {
			// 	allowNull: false,
			// 	autoIncrement: true,
			// 	primaryKey: true,
			// 	type: Sequelize.INTEGER,
			// },
			categoryId: {
				foreignKey: true,
				type: Sequelize.INTEGER,
				references: {
					model: {
						tableName: 'Categories',
					},
					key: 'id',
				},
				onUpdate: 'cascade',
				onDelete: 'cascade',
			},
			projectId: {
				foreignKey: true,
				type: Sequelize.INTEGER,
				references: {
					model: {
						tableName: 'Projects',
					},
					key: 'id',
				},
				onUpdate: 'cascade',
				onDelete: 'cascade',
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('ProjectCategories');
	},
};
