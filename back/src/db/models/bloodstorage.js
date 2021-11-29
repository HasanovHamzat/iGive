'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BloodStorage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Hospital, BloodType }) {
      // define association here
      this.belongsTo(Hospital, {
        foreignKey: 'hospitalId',
      });
      this.hasMany(BloodType, {
        foreignKey: 'bloodTypeId',
      });
    }
  }
  BloodStorage.init(
    {
      bloodTotalQuantity: DataTypes.INTEGER,
      bloodTypeId: DataTypes.INTEGER,
      hospitalId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'BloodStorage',
    }
  );
  return BloodStorage;
};
