require('dotenv').config()

module.exports = new class CommonService {

  startTimer(name) {
    if (process.env.MODE === 'DEV') console.time(name)
  }

  endTimer(name) {
    if (process.env.MODE === 'DEV') console.timeEnd(name)
  }

  async returnMessage(res, answer) {

    if (answer.error) {
      res.status(answer.status)
      delete answer.status
    } else res.status(200)

    res.send(answer)
  }

  checkParams(params) {
    const errorArray = []

    params.forEach((param) => {
      if (typeof param == 'undefined' || param == null) errorArray.push(param)
    })

    return errorArray
  }
}