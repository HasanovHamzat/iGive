'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BloodType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, BloodStorage, Event }) {
      // define association here
      this.belongsTo(User, {
        foreignKey: 'bloodTypeId',
      });
      this.belongsTo(BloodStorage, {
        foreignKey: 'bloodTypeId',
      });
      this.belongsTo(Event, {
        foreignKey: 'bloodTypeId',
      });
    }
  }
  BloodType.init(
    {
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'BloodType',
    }
  );
  return BloodType;
};
