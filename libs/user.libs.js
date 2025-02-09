const jwt = require('jsonwebtoken');
const config = require('../config.json')

module.exports = new class UserLibs {

    async generateTokents(user){

        const payloadAccessToken = {
            userId: user.id,
            role: user.role,
            email: user.email,
        };

        const options = {
            expiresIn: '1h'
        };

        const accessToken = jwt.sign(payloadAccessToken, config.secretToken, options);

        const refreshToken = jwt.sign({}, config.secretToken, {expiresIn: '30d'});

        return {accessToken: accessToken, refreshToken: refreshToken};
    }

     verifyToken(token){
        try{
            console.log(token)
            const verifyToken = jwt.verify(token, config.secretToken);
            return !!verifyToken;
        }catch(e){
            console.log(e)
            return false
        }
    }

}