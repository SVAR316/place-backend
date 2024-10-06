// TODO: Добавить проверку статического токена авторизации пользователя или если он вообще есть

const config = require('../config.json')

module.exports = async function checkAuth(req, res, next) {
    if(checkExceptions(req.originalUrl)) {
        next()
    }else{
        let token = await req.headers['authorization']

        if(checkToken(token)) return next()

        return res.status(401).send({error: true, result: 'Authentication failed'})
        // next()
    }
}


function checkExceptions(url) {
    // console.log(url)
    config.exceptions.forEach(exception => {
        // console.log(exception)
        if(exception == url) return true
    })
    return false
}

// TODO: Сделать проверку на сгенерированный токен
function checkToken(token){

    if(typeof token != 'undefined' && token === config.universalToken) return true
    else if(typeof token != 'undefined') return true
    else return false
}