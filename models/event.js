'use strict';
const {
  Model, Deferrable
} = require('sequelize');

const Stage = require('./stage')
const Band = require('./band')
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Stage, StageEvent, SetTime }) {
      Event.belongsToMany(Stage, {
        foreignKey: "event_id",
        as: "stages",
        through: StageEvent
      
      })
      Event.hasMany(SetTime, {
        as: "sets",
      })
    }
  }
  Event.init({
    stage: {
     name: DataTypes.STRING,
     startTime:  DataTypes.DATE,
     end_time: DataTypes.DATE
  }, 
    
    sequelize,
    modelName: 'Event',
  });
  return Event;
};