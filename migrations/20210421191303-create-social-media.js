'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('SocialMedias', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
			},
			linkTo: {
				type: Sequelize.STRING,
			},
			image: {
				type: Sequelize.STRING,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('SocialMedias');
	},
};
