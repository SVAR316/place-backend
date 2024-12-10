const db = require('../db')
const {model, models} = require('../db')
const { DataTypes } = require('sequelize')

const NewsModel = db.define('news', {
    id: {type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true,},
    title: {type: DataTypes.STRING, unique: false},
    description: {type: DataTypes.STRING, unique: false},
    previewUrl: {type: DataTypes.STRING, unique: false},
})

module.exports = NewsModel;