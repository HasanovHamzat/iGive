'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'BloodTypes',
      [
        {
          type: 'O(I) Rh+',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'O(I) Rh-',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'A(II) Rh+',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'A(II) Rh-',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'B(III) Rh+',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'B(III) Rh-',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'AB(IV) Rh+',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'AB(IV) Rh-',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('BloodTypes', null, {
      restartIdentity: true,
      truncate: true,
    });
  },
};
