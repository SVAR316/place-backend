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

    // FIXME: Проверить функцию
    async checkParams(params) {
        const errors = [];

        params.forEach((item) => {
            for (const [key, value] of Object.entries(item)) {
                if (value === undefined || value === null) {
                    errors.push(key);
                }
            }
        });

        return errors;
    }

    checkConfigFile() {
        if (fs.existsSync('./config.json')) return true
        else throw Error("Отсутствует config file")
    }
}