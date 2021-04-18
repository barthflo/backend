'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Php'
      },
      {
        name: 'Wordpress'
      },
      {
        name: 'Html'
      },
      {
        name: 'Css'
      },
      {
        name: 'JQuery'
      },
      {
        name: 'JavaScript'
      },
      {
        name: 'React'
      },
      {
        name: 'Node.js'
      },
      {
        name: 'Bootstrap'
      },
      {
        name: 'Laravel'
      },
      {
        name: 'Python'
      },
      {
        name: 'Flask'
      },
      {
        name: 'Sass'
      },
      {
        name: 'Express.js'
      },
      {
        name: 'MySql'
      },
      {
        name: 'SQL'
      },
      {
        name: 'Postgresql'
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
