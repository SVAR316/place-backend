const db = require('../db')
const {model, models} = require('../db')
const { DataTypes } = require('sequelize')


// TODO:Написать модель для мероприятий
const EventModel = db.define('event', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    city: {type: DataTypes.STRING, allowNull: false},
    district: {type: DataTypes.STRING, allowNull: false},
    street: {type: DataTypes.STRING, allowNull: false},
    dueTime: {type: DataTypes.DATE, allowNull: false},
    fundraising: {type: DataTypes.BOOLEAN, allowNull: false},
    totalAmount: {type: DataTypes.INTEGER, allowNull: false},
    maxPeople: {type: DataTypes.INTEGER, allowNull: false},
})

module.exports = EventModel;