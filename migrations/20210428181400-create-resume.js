'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Resumes', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			start: {
				type: Sequelize.DATEONLY,
			},
			end: {
				type: Sequelize.DATEONLY,
			},
			cardTitle: {
				type: Sequelize.STRING,
			},
			cardSubtitle: {
				type: Sequelize.STRING,
			},
			cardDetailedText: {
				type: Sequelize.TEXT,
			},
			published: {
				type: Sequelize.BOOL,
				defaultValue: true,
				allowNull: false,
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
		await queryInterface.dropTable('Resumes');
	},
};
