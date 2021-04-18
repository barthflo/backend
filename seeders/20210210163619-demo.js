'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ProjectCategories', [
    {
      projectId: 1,
      categoryId: 1
    },
    {
      projectId: 1,
      categoryId: 2
    },
    {
      projectId: 1,
      categoryId: 3
    },
    {
      projectId: 1,
      categoryId: 7
    },
    {
      projectId: 2,
      categoryId: 1
    },
    {
      projectId: 2,
      categoryId: 3
    }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ProjectCategories', null, {});
  }
};
