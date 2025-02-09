require('dotenv').config()
const fs = require('fs')
const db = require("../db");
const {userModel} = require("../models");

module.exports = new class CommonService {

    startTimer(name) {
        if (process.env.MODE === 'DEV') console.time(name)
    }

    endTimer(name) {
        if (process.env.MODE === 'DEV') console.timeEnd(name)
    }

    async returnMessage(res, answer) {

        if (answer.status) {
            res.status(answer.status)
            delete answer.status
        } else res.status(200)

        res.send(answer)
    }

    checkParams(params) {
        const errors = [];

        for (const [key, value] of Object.entries(params)) {
            if (value === undefined || value === null) {
                errors.push(key);  // Добавляем имя переменной в список ошибок
            }
        }

        return errors;
    }

    checkConfigFile() {
        if (fs.existsSync('./config.json')) return true
        else throw Error("Отсутствует config file")
    }

    async init(){
        this.checkConfigFile()
        await db.authenticate();
        await db.sync()
        if (!fs.existsSync('uploads/')) {
            fs.mkdirSync('uploads/', { recursive: true });
        }

        const admin = await userModel.findOne({where: {username: 'admin'}})

        if(!admin){
            const user = await userModel.create({
                username: 'admin',
                password: 'admin',
                email: 'admin@mail.com',
                role: 'admin',
            })
        }
    }
}