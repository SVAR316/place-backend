require('dotenv').config();
const { Sequelize } = require('sequelize')

module.exports = new Sequelize(process.env.BD_NAME, process.env.BD_USER, process.env.BD_PASS, {
  host:process.env.BD_HOST,
  dialect: process.env.BD_DIALECT
})