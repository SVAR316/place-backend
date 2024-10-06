const db = require('../db')
const { DataTypes } = require('sequelize')

// TODO: Написать модель для Участников
const ParticipantsModel = db.define('participants', {
})

module.exports = ParticipantsModel;