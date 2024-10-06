const db = require('../db')
const {model, models} = require('../db')
const { DataTypes } = require('sequelize')

const UserModel = db.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true,},
  username: {type: DataTypes.STRING, unique: true},
  password: {type: DataTypes.STRING, unique: false},
  email: {type: DataTypes.STRING, unique: true,},
  wallet: {type: DataTypes.INTEGER, unique: false},
  staticToken: {type: DataTypes.STRING, unique: false},
  role: {type: DataTypes.STRING, unique: false},
})

module.exports = UserModel;