'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ MeetGreet, SetTime }) {
      Band.belongsToMany(MeetGreet, {
        foreignKey: "band_id",
        as: "meet-greets",
      // define association here
      })
      Band.hasMany(SetTime, {
        foreignKey: "band_id",
        as: "sets",
      })
    }
  }
  Band.init({
    name: {
       type: DataTypes.STRING,
       allowNull: false
    },
    //totalMembers: DataTypes.INTEGER,
    genre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Band',
  });
  return Band;
};