'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Donation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Event }) {
      // define association here
      this.belongsTo(User, {
        foreignKey: 'userId',
      });
      this.belongsTo(Event, {
        foreignKey: 'eventId',
      });
    }
  }
  Donation.init(
    {
      bloodQuantity: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      eventId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Donation',
    }
  );
  return Donation;
};
