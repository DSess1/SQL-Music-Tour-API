'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SetTime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Band, Stage, Event }) {
       SetTime.belongsToMany(Band, {
        as: "band"
    })
       SetTime.belongsToMany(Stage, {
        as: "stage"
  })
  SetTime.belongsToMany(Event, {
    as: "event"
})

 }
}
  SetTime.init({
    event_id: DataTypes.INTEGER,
    band_id: DataTypes.INTEGER,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'SetTime',
  });
  return SetTime;
};