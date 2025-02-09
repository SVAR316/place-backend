const config = require('../config.json')
const UserLibs = require('../libs/index')

module.exports = async function checkAuth(req, res, next) {
    if (checkExceptions(req.originalUrl)) {
        return next();
    }

    const token = req.headers['authorization'];

    if (UserLibs.UserLibs.verifyToken(token)) {
        return next();
    }

    return res.status(401).send({error: true, result: 'Authentication failed'});
}


function checkExceptions(url) {
    return config.exceptions.some(exception => exception.trim() === url.trim());
}