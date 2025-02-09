// TODO: Добавить проверку статического токена авторизации пользователя или если он вообще есть

const config = require('../config.json')

module.exports = async function checkAuth(req, res, next) {
    if (checkExceptions(req.originalUrl)) {
        return next();
    }

    const token = req.headers['authorization'];
    if (checkToken(token)) {
        return next();
    }

    return res.status(401).send({ error: true, result: 'Authentication failed' });
}


function checkExceptions(url) {
    return config.exceptions.some(exception => exception.trim() === url.trim());
}

// TODO: Сделать проверку на сгенерированный токен
function checkToken(token){

    if(typeof token != 'undefined' && token === config.universalToken) return true
    else if(typeof token != 'undefined') return true
    else return false
}