'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Event, StageEvent, SetTime }) {
      Stage.belongsToMany(Event, {
        through: StageEvent,
        as: "events"
    })
    Stage.hasMany(SetTime, {
      as: "sets"
    })
  }
}
  Stage.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Stage',
  });
  return Stage;
};