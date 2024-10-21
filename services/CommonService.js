require('dotenv').config()
const fs = require('fs')

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

    // FIXME: Починить проверку параметров придумать как вставлять параметры иначе чтобы если их нет, не возвращало undefined
    checkParams(params) {
        const errorArray = []

        params.forEach((param) => {
            if (typeof param == 'undefined' || param == null) errorArray.push(param)
        })

        return errorArray
    }

    checkConfigFile(){
        if(fs.existsSync('./config.json')) return true
        else throw Error("Отсутствует config file")
    }
}