const { userModel } = require('../models/index');
const {UserLibs} = require('../libs/index');

module.exports = new class UserService {

    async login(username, password) {

        const user = await userModel.findOne({where: {username: username}})
        if (!user) return {error: true, result: 'Не удалось найти пользователя', status: 404}

        console.log(user.password.trim() + " " + password.trim())
        if (user.password !== password) return {error: true, result: 'Не правильный пароль', status: 401}

        let token = await UserLibs.generateTokents(user)

        return {error: false, accessToken: token.accessToken, refreshToken: token.refreshToken}
    }

    async registration(username, password, email, role) {


        let cand = await userModel.findOne({where: {username: username}})

        if (cand) return {error: true, result: 'Пользователь с таким логином уже существует', status: 400}

        cand = await userModel.findOne({where: {email: email}})

        if (cand) return {error: true, result: 'Пользователь с таким email уже существует', status: 400}

        const user = await userModel.create({
            username: username,
            password: password,
            email: email,
            role: role,
        })

        return {
            error: false,
            status: 201
        }
    }

    async resetPassword(req, res) {
    }

    async updateUser(id, username, password, email, urlImage, role) {

        const user = await userModel.findOne({where: {id: id}})

        if (!user) return {error: true, result: 'Данный пользователь не найден', status: 404}

        user.username = username
        user.password = password
        user.email = email
        user.urlImage = urlImage
        user.role = role
        user.save()

        return {error: false, result: true}
    }

    async getUser(id) {

        const user = await userModel.findOne({where: {id: id}})

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

        const usersDb = await userModel.findAll()

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

    async addBalance(id) {

        const user = await userModel.findOne({where: {id: id}})

        if (!user) return {error: true, result: 'Не удалось найти пользователя', status: 404}

        user.wallet = user.wallet + 1000

        user.save()

        return {error: false, result: true}
    }

    randomFunction(min, max) {
        return Math.round(min + Math.random() * (max - min));
    }
}