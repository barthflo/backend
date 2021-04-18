'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Pictures', [
      {
       name: "fbp_home.desktop.png",
       alt: "home page website flobarthphotography",
       projectId:1,
       tag:'work'
      },
      {
        name: "fbp_portraits.desktop.png",
        alt: "portraits page website flobarthphotography",
        projectId:1,
        tag:'work'
      },
      {
        name: "fbp_stories.desktop.png",
        alt: "stories page website flobarthphotography",
        projectId:1,
        tag:'work'
      },
      {
        name: "fbp_stories.mobile.png",
        alt: "stories page website flobarthphotography",
        projectId:1,
        tag:'work'
      },
      {
        name: "fbp_about.mobile.png",
        alt: "about page website flobarthphotography",
        projectId:1,
        tag:'work'
      },
      {
        name: "emailer_home.desktop.png",
        alt: "home page website emailer",
        projectId:2,
        tag:'work'
      },
      {
        name: "emailer_home.mobile.png",
        alt: "home page website emailer",
        projectId:2,
        tag:'work'
      },
      {
        name: "profile_pic.jpg",
        alt: "Portrait of Flo Barth",
        tag:'about'
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Pictures', null, {});
  }
};
