'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Hospital, BloodType, Donation, UserEvent }) {
      // define association here
      this.belongsToMany(User, {
        through: 'UserEvents',
        foreignKey: 'eventId',
      });
      this.belongsTo(Hospital, {
        foreignKey: 'hospitalId',
      });
      this.hasMany(BloodType, {
        foreignKey: 'bloodTypeId',
      });
      this.hasMany(Donation, {
        foreignKey: 'eventId',
      });
    }
  }
  Event.init(
    {
      bloodTypeId: DataTypes.INTEGER,
      bloodQuantity: DataTypes.INTEGER,
      eventDate: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
      priority: DataTypes.INTEGER,
      hospitalId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Event',
    }
  );
  return Event;
};
