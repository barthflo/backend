'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'SocialMedias',
			[
				{
					name: 'Github',
					linkTo: 'https://github.com/barthflo',
					image: 'github.png',
				},
				{
					name: 'LinkedIn',
					linkTo: 'www.linkedin.com/in/florent-barth',
					image: 'linkedin.png',
				},
				{
					name: 'Instagram',
					linkTo: 'https://www.instagram.com/barthflo/',
					image: 'instagram.png',
				},
			],
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('SocialMedias', null, {});
	},
};
