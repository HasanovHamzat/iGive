const { BloodStorage } = require("../models");
("use strict");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const bloodStorages = await createBloodStorages();
    await queryInterface.bulkInsert("BloodStorages", [...bloodStorages], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("BloodStorages", null, {
      restartIdentity: true,
      truncate: true,
    });
  },
};

const createBloodStorages = async () => {
  const bloodStoragesArr = [];
  for (let i = 1; i < 7; i++) {
    bloodStoragesArr.push(
      {
        bloodTypeId: 1,
        hospitalId: i,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bloodTypeId: 2,
        hospitalId: i,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bloodTypeId: 3,
        hospitalId: i,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bloodTypeId: 4,
        hospitalId: i,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bloodTypeId: 5,
        hospitalId: i,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bloodTypeId: 6,
        hospitalId: i,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bloodTypeId: 7,
        hospitalId: i,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bloodTypeId: 8,
        hospitalId: i,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    );
  }
  return bloodStoragesArr;
};
