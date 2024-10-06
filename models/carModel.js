const db = require('../db')
const {model, models} = require('../db')
const { DataTypes } = require('sequelize')

const TypeModel = db.define('type', {
  id: {type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true,},
  name: {type: DataTypes.STRING, unique: false},
  generation: {type: DataTypes.STRING, unique: false},
  driveUnit: {type: DataTypes.STRING, unique: false},
  steeringWheelSide: {type: DataTypes.STRING, unique: false},
  yearIssue: {type: DataTypes.STRING, unique: false},
  bodyType: {type: DataTypes.STRING, unique: false},
  length: {type: DataTypes.STRING, unique: false},
  width: {type: DataTypes.STRING, unique: false},
  height: {type: DataTypes.STRING, unique: false},
  groundClearance: {type: DataTypes.STRING, unique: false},
  frontTrackWidth: {type: DataTypes.STRING, unique: false},
  rearTrackWidth: {type: DataTypes.STRING, unique: false},
  wheelSize: {type: DataTypes.STRING, unique: false},
  producingCountry: {type: DataTypes.STRING, unique: false},
  classCar: {type: DataTypes.STRING, unique: false},
  typeGasoline: {type: DataTypes.STRING, unique: false},

})

module.exports = TypeModel;