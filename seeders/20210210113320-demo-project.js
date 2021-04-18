'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Projects', [
      {
       title: 'Flo Barth Photography',
       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum morbi blandit cursus risus at ultrices. Purus ut faucibus pulvinar elementum integer enim. Felis eget velit aliquet sagittis id consectetur purus ut faucibus. Etiam tempor orci eu lobortis. Sit amet purus gravida quis blandit turpis cursus in. Pellentesque eu tincidunt tortor aliquam nulla facilisi. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Iaculis nunc sed augue lacus viverra vitae congue. Quam pellentesque nec nam aliquam sem. Duis convallis convallis tellus id interdum velit laoreet id donec. Nulla at volutpat diam ut venenatis tellus in metus. Pellentesque pulvinar pellentesque habitant morbi tristique. Pulvinar neque laoreet suspendisse interdum.',
       link_url:'https://www.flobarthphotography.com'
      },
      {
        title: 'Emailer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum morbi blandit cursus risus at ultrices. Purus ut faucibus pulvinar elementum integer enim. Felis eget velit aliquet sagittis id consectetur purus ut faucibus. Etiam tempor orci eu lobortis. Sit amet purus gravida quis blandit turpis cursus in. Pellentesque eu tincidunt tortor aliquam nulla facilisi. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Iaculis nunc sed augue lacus viverra vitae congue. Quam pellentesque nec nam aliquam sem. Duis convallis convallis tellus id interdum velit laoreet id donec. Nulla at volutpat diam ut venenatis tellus in metus. Pellentesque pulvinar pellentesque habitant morbi tristique. Pulvinar neque laoreet suspendisse interdum.',
        link_url:'http://emailer.flobarthphotography.com'
      }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Projects', null, {});
     
  }
};
