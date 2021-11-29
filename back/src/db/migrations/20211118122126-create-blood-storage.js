'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BloodStorages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        restartIdentity: true,
        truncate: true,
      },
      bloodTotalQuantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      bloodTypeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'BloodTypes',
          id: 'key',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      hospitalId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Hospitals',
          id: 'key',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BloodStorages');
  },
};
