const bcrypt = require("bcryptjs");
const { BloodStorage } = require("../models");
("use strict");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hospitals = await createHospitals();
    await queryInterface.bulkInsert("Hospitals", [...hospitals], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Hospitals", null, {
      restartIdentity: true,
      truncate: true,
    });
  },
};

const createHospitals = async () => {
  const hospitalsArr = [
    {
      email: `hospital1@mail.ru`,
      password: await bcrypt.hash("123", 5),
      inn: `0000001`,
      headOfDep: `Irina`,
      phoneNumber: `911`,
      city: `Москва`,
      street: `Ленинский проспект`,
      building: `8`,
      webSite: "https://www.google.ru",
      title: `Городская клиническая больница но 1 им. Н.И. Пирогова`,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: `hospital2@mail.ru`,
      password: await bcrypt.hash("123", 5),
      inn: `0000002`,
      headOfDep: `Вера`,
      phoneNumber: `911`,
      city: `Москва`,
      street: `5-й Донской пр.`,
      building: `21А, стр. 14`,
      webSite: "https://www.google.ru",
      title: `Лечебный корпус № 14`,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      email: `hospital3@mail.ru`,
      password: await bcrypt.hash("123", 5),
      inn: `0000003`,
      headOfDep: `Cоня`,
      phoneNumber: `911`,
      city: `Москва`,
      street: `Большая Пироговская ул`,
      building: `6 стр. 1`,
      webSite: "https://www.google.ru",
      title: `Университетская клиническая больница №1`,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: `hospital4@mail.ru`,
      password: await bcrypt.hash("123", 5),
      inn: `0000004`,
      headOfDep: `Михаил`,
      phoneNumber: `911`,
      city: `Санкт-Петербург`,
      street: `Учебный пер`,
      building: `д. 5`,
      webSite: "https://www.google.ru",
      title: `Городская Многопрофильная Больница №2`,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: `hospital5@mail.ru`,
      password: await bcrypt.hash("123", 5),
      inn: `0000005`,
      headOfDep: `Cаша`,
      phoneNumber: `911`,
      city: `Санкт-Петербург`,
      street: `ул. Кирочная`,
      building: `д.41`,
      webSite: "https://www.google.ru",
      title: `Северо-Западный государственный медицинский университет им. И.И. Мечникова`,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: `hospital6@mail.ru`,
      password: await bcrypt.hash("123", 5),
      inn: `0000006`,
      headOfDep: `Артём`,
      phoneNumber: `911`,
      city: `Санкт-Петербург`,
      street: `Васильевский остров, 2-линия`,
      building: `дом 47`,
      webSite: "https://www.google.ru",
      title: `Детская городская больница Nº2 Святой Марии Магдалины`,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
  // for (let i = 1; i < 9; i++) {
  //   hospitalsArr.push({
  //     email: `hospital${i}@mail.ru`,
  //     password: await bcrypt.hash('123', 5),
  //     inn: `${i}${i}${i}${i}${i}${i}`,
  //     headOfDep: `HeadOfDep${i}`,
  //     phoneNumber: `${i}${i}${i}${i}${i}${i}`,
  //     city: `City${i}`,
  //     street: `Street${i}`,
  //     building: `Building${i}`,
  //     webSite: 'https://www.google.ru',
  //     title: `Hospital${i}`,
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   });

  // }
  return hospitalsArr;
};
