'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Abouts', [
      {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet risus nullam eget felis eget nunc. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Velit egestas dui id ornare arcu odio. Id venenatis a condimentum vitae sapien. Arcu risus quis varius quam quisque id. At elementum eu facilisis sed odio. Dignissim cras tincidunt lobortis feugiat vivamus at augue. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Pharetra sit amet aliquam id diam maecenas ultricies. Ultricies lacus sed turpis tincidunt id aliquet. Mauris pharetra et ultrices neque ornare aenean. Dui accumsan sit amet nulla facilisi morbi tempus. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. At elementum eu facilisis sed odio morbi. Sed risus ultricies tristique nulla aliquet enim tortor. Erat nam at lectus urna duis convallis convallis.'
      },
      {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet risus nullam eget felis eget nunc. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Velit egestas dui id ornare arcu odio. Id venenatis a condimentum vitae sapien. Arcu risus quis varius quam quisque id. At elementum eu facilisis sed odio. Dignissim cras tincidunt lobortis feugiat vivamus at augue. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Pharetra sit amet aliquam id diam maecenas ultricies. Ultricies lacus sed turpis tincidunt id aliquet. Mauris pharetra et ultrices neque ornare aenean. Dui accumsan sit amet nulla facilisi morbi tempus. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. At elementum eu facilisis sed odio morbi. Sed risus ultricies tristique nulla aliquet enim tortor. Erat nam at lectus urna duis convallis convallis.'
      },
      {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet risus nullam eget felis eget nunc. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Velit egestas dui id ornare arcu odio. Id venenatis a condimentum vitae sapien. Arcu risus quis varius quam quisque id. At elementum eu facilisis sed odio. Dignissim cras tincidunt lobortis feugiat vivamus at augue. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Pharetra sit amet aliquam id diam maecenas ultricies. Ultricies lacus sed turpis tincidunt id aliquet. Mauris pharetra et ultrices neque ornare aenean. Dui accumsan sit amet nulla facilisi morbi tempus. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. At elementum eu facilisis sed odio morbi. Sed risus ultricies tristique nulla aliquet enim tortor. Erat nam at lectus urna duis convallis convallis.'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Abouts', null, {});
  }
};
