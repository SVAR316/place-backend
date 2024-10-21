require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./db')
const routers = require('./router')
const path = require('path');
const logger = require('./middleware/logger')
const checkAuth = require('./middleware/checkAuth')
const CommonService = require('./services/CommonService')



app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(logger)
// app.use(checkAuth)
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))
app.use('/static', express.static(path.join(__dirname, '/static')))
app.use('/api', routers)

try{
  CommonService.checkConfigFile()
  app.listen(process.env.PORT);
  db.authenticate();
  db.sync()


  setTimeout(() =>{
    console.clear()
    console.log('\n' +
            ' ______   __   ______  __  __       ______   ______   ______    \n' +
            '/\\  ___\\ /\\ \\ /\\__  _\\/\\ \\_\\ \\     /\\  ___\\ /\\  __ \\ /\\  == \\   \n' +
            '\\ \\ \\____\\ \\ \\\\/_/\\ \\/\\ \\____ \\    \\ \\ \\____\\ \\  __ \\\\ \\  __<   \n' +
            ' \\ \\_____\\\\ \\_\\  \\ \\_\\ \\/\\_____\\    \\ \\_____\\\\ \\_\\ \\_\\\\ \\_\\ \\_\\ \n' +
            '  \\/_____/ \\/_/   \\/_/  \\/_____/     \\/_____/ \\/_/\\/_/ \\/_/ /_/ \n' +
            '\nDev output:')
    console.log(`Сервер запущен на порту: ${process.env.PORT}`)
    console.log(`Сервер в режиме: ${process.env.MODE}`)
    console.log('База данных успешно подключена')
  }, 1500)


}catch (e){
  console.error(e)
}