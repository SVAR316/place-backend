const db = require('../db')
const { DataTypes } = require('sequelize')

const DonateModel = db.define('donate', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    userId: {type: DataTypes.INTEGER, allowNull: false},
    eventId: {type: DataTypes.INTEGER, allowNull: false},
    amount: {type: DataTypes.INTEGER, allowNull: false},
})

module.exports = DonateModel;