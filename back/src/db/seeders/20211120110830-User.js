const bcrypt = require('bcryptjs');

('use strict');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await createUsers();
    await queryInterface.bulkInsert('Users', [...users], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {
      restartIdentity: true,
      truncate: true,
    });
  },
};

const createUsers = async () => {
  const userArr = [];
  for (let i = 1; i < 9; i++) {
    userArr.push({
      name: `User${i}`,
      lastName: `U${i}`,
      birthday: `${i}`,
      phoneNumber: `${i}${i}${i}${i}`,
      email: `user${i}0@mail.ru`,
      password: await bcrypt.hash('123', 5),
      city: `Москва`,
      street: `Street${i}`,
      building: `Building${i}`,
      oms: Number(`${i}${i}${i}${i}`),
      bloodTypeId: i,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: `User${i}`,
      lastName: `U${i}`,
      birthday: `${i}`,
      phoneNumber: `${i}${i}${i}${i}`,
      email: `user${i}1@mail.ru`,
      password: await bcrypt.hash('123', 5),
      city: `Москва`,
      street: `Street${i}`,
      building: `Building${i}`,
      oms: Number(`${i}${i}${i}${i}6`),
      bloodTypeId: i,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: `User${i}`,
      lastName: `U${i}`,
      birthday: `${i}`,
      phoneNumber: `${i}${i}${i}${i}`,
      email: `user${i}2@mail.ru`,
      password: await bcrypt.hash('123', 5),
      city: `Москва`,
      street: `Street${i}`,
      building: `Building${i}`,
      oms: Number(`${i}${i}${i}${i}4`),
      bloodTypeId: i,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: `User${i}`,
      lastName: `U${i}`,
      birthday: `${i}`,
      phoneNumber: `${i}${i}${i}${i}`,
      email: `user${i}3@mail.ru`,
      password: await bcrypt.hash('123', 5),
      city: `Санкт-Петербург`,
      street: `Street${i}`,
      building: `Building${i}`,
      oms: Number(`${i}${i}${i}${i}2`),
      bloodTypeId: i,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: `User${i}`,
      lastName: `U${i}`,
      birthday: `${i}`,
      phoneNumber: `${i}${i}${i}${i}`,
      email: `user${i}4@mail.ru`,
      password: await bcrypt.hash('123', 5),
      city: `Санкт-Петербург`,
      street: `Street${i}`,
      building: `Building${i}`,
      oms: Number(`${i}${i}${i}${i}0`),
      bloodTypeId: i,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: `User${i}`,
      lastName: `U${i}`,
      birthday: `${i}`,
      phoneNumber: `${i}${i}${i}${i}`,
      email: `user${i}5@mail.ru`,
      password: await bcrypt.hash('123', 5),
      city: `Санкт-Петербург`,
      street: `Street${i}`,
      building: `Building${i}`,
      oms: Number(`${i}${i}${i}${i}7`),
      bloodTypeId: i,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  return userArr;
};
