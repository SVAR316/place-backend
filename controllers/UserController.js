const UserService = require('../services/UserService')
const CommonService = require('../services/CommonService')

module.exports = class UserController {

  // TODO:Добавить генератор статического токена и для регистрации тоже
  async login(req, res) {
    CommonService.startTimer('login')
    const {username, password} = await req.body;

    const checkedParams = CommonService.checkParams([username, password])
    if (checkedParams.length !== 0) {
      CommonService.endTimer('login')
      return CommonService.returnMessage(res, {
        error: true,
        result: `Укажите нужный параметр: ${checkedParams[0]}`,
        status: 401
      })
    }

    const answer = await UserService.login(username, password)
    CommonService.endTimer('login')
    return CommonService.returnMessage(res, answer)
  }

  async registration(req, res) {
    CommonService.startTimer('registration')

    const {username, password, email, role} = await req.body;

    const checkedParams = CommonService.checkParams([username, password, email, role])
    if (checkedParams.length !== 0) {
      CommonService.endTimer('registration')
      return CommonService.returnMessage(res, {
        error: true,
        result: `Укажите нужный параметр: ${checkedParams[0]}`,
        status: 401
      })
    }

    const answer = await UserService.registration(username, password, email, role)

    CommonService.endTimer('registration')
    return CommonService.returnMessage(res, answer)
  }

  async resetPassword(req, res) {
    CommonService.startTimer('resetPassword')
    CommonService.endTimer('resetPassword')
  }

  async updateUser(req, res) {
    CommonService.startTimer('updateUser')

    const {id, username, password, email, urlImage, role} = await req.body;

    const checkedParams = CommonService.checkParams([id, username, password, email, urlImage, role])
    if (checkedParams.length !== 0) {
      CommonService.endTimer('updateUser')
      return CommonService.returnMessage(res, {
        error: true,
        result: `Укажите нужный параметр: ${checkedParams[0]}`,
        status: 401
      })
    }

    const answer = await UserService.updateUser(id, username, password, email, urlImage, role)

    CommonService.endTimer('updateUser')
    return CommonService.returnMessage(res, answer)
  }

  async getUser(req, res) {
    CommonService.startTimer('getUser')
    const {id} = await req.params

    const checkedParams = CommonService.checkParams([id])
    if (checkedParams.length !== 0) {

      CommonService.endTimer('getUser')
      return CommonService.returnMessage(res, {
        error: true,
        result: `Укажите нужный параметр: ${checkedParams[0]}`,
        status: 401
      })
    }

    const answer = await UserService.getUser(id)

    CommonService.endTimer('getUser')
    return CommonService.returnMessage(res, answer)
  }

  async getUsers(req, res) {
    CommonService.startTimer('getUsers')

    const answer = await UserService.getUsers()

    CommonService.endTimer('getUsers')
    return CommonService.returnMessage(res, answer)
  }

}

