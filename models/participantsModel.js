const db = require('../db')
const { DataTypes } = require('sequelize')

// TODO: Написать модель для Участников
const ParticipantsModel = db.define('participants', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    userId: {type: DataTypes.INTEGER, allowNull: false},
    eventId: {type: DataTypes.INTEGER, allowNull: false},
})

module.exports = ParticipantsModel;