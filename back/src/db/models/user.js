'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ BloodType, Event, Donation, UserEvent }) {
      // define association here
      this.hasOne(BloodType, {
        foreignKey: 'bloodTypeId',
      });
      this.belongsToMany(Event, {
        through: 'UserEvents',
        foreignKey: 'userId',
      });
      this.hasMany(Donation, {
        foreignKey: 'userId',
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      lastName: DataTypes.STRING,
      birthday: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      city: DataTypes.STRING,
      street: DataTypes.STRING,
      building: DataTypes.STRING,
      oms: DataTypes.INTEGER,
      image: DataTypes.STRING,
      lastDonationDate: DataTypes.STRING,
      totalDonation: DataTypes.INTEGER,
      bloodTypeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
