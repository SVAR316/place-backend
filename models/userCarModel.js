const db = require('../db')
const {model, models} = require('../db')
const { DataTypes } = require('sequelize')

const UserCarModel = db.define('userCar', {
  id: {type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true,},
  generation: {type: DataTypes.STRING, unique: false},
  yearIssue: {type: DataTypes.STRING, unique: false},
  bodyType: {type: DataTypes.STRING, unique: false},
  steeringWheelSide: {type: DataTypes.STRING, unique: false},
  driveUnit: {type: DataTypes.STRING, unique: false},
  licensePlate: {type: DataTypes.STRING, unique: false}
})

module.exports = UserCarModel;