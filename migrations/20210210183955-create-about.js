'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Abouts', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			description: {
				allowNull: false,
				type: Sequelize.TEXT,
			},
			pictureId: {
				foreignKey: true,
				type: Sequelize.INTEGER,
				references: {
					model: {
						tableName: 'Pictures',
					},
					key: 'id',
					onUpdate: 'cascade',
					onDelete: 'cascade',
				},
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn('NOW'),
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn('NOW'),
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('Abouts');
	},
};
