const db = require('../db')
const {model, models} = require('../db')
const { DataTypes } = require('sequelize')

const ImageModel = db.define('image', {
  id: {type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true,},
  url: {type: DataTypes.STRING, unique: false},
  objectId: {type: DataTypes.STRING, unique: false},
})

module.exports = ImageModel;