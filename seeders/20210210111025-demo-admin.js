'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Admins', [
      {
       firstname: 'Flo',
       lastname:'Barth',
       email:'flrnt.barth@gmail.com',
       password:'$2b$10$z2t3Nt9IVrjpqKHsQ2ntFeXnmToeHeyIXxoeljDrWwOlz9kpl/od6'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Admins', null, {});
  }
};
