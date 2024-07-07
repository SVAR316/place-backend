const ApiService = require('../services/ApiService')

module.exports = new class ApiControllers {

    async getAllFunction(req,res){
        let answer = await ApiService.getAllFunctions()

        if(answer.error) res.status(answer.status)

        res.send(answer)
    }
}