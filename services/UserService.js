const UserModel = require('../models/userModel');

module.exports = new class UserService {

  async login(username, password) {

    const user = await UserModel.findOne({where: {username: username}})

    if (!user) return {error: true, result: 'Не удалось найти пользователя', status: 404}

    if (user.password === password) return {error: true, result: 'Не правильный пароль', status: 401}

    return {error: false, result: true}
  }

  async registration(username, password, email, role) {


    let cand = await UserModel.findOne({where: {username: username}})

    if (cand) return {error: true, result: 'Пользователь с таким логином уже существует', status: 401}

    cand = await UserModel.findOne({where: {email: email}})

    if (cand) return {error: true, result: 'Пользователь с таким email уже существует', status: 401}

    const user = await UserModel.create({
      username: username,
      password: password,
      email: email,
      urlImage: '',
      wallet: 0,
      role: role,
    })

    return {
      error: false,
      result: {
        id: user.id,
        username: user.username,
        email: user.email,
        urlImage: user.urlImage,
        wallet: user.wallet,
        role: user.role,
      }
    }
  }

  async resetPassword(req, res) {
  }

  async updateUser(id, username, password, email, urlImage, role) {

    const user = await UserModel.findOne({where: {id: id}})

    if(!user) return {error: true, result: 'Данный пользователь не найден', status: 404}

    user.username = username
    user.password = password
    user.email = email
    user.urlImage = urlImage
    user.role = role
    user.save()

    return {error: false, result: true}
  }

  async getUser(id) {

    const user = await UserModel.findOne({where: {id: id}})

    if (!user) return {error: true, result: 'Данный пользователь не найден', status: 404}

    return {
      error: false, result: {
        id: user.id,
        username: user.username,
        email: user.email,
        urlImage: user.urlImage,
        wallet: user.wallet,
        role: user.role,
      }
    }
  }

  async getUsers() {

    const usersDb = await UserModel.findAll()

    const users = []

    usersDb.forEach((user) => {
      users.push({
        id: user.id,
        username: user.username,
        email: user.email,
        urlImage: user.urlImage,
        wallet: user.wallet,
        role: user.role,
      })
    })

    return {error: false, result: users}
  }

}