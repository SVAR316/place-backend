const {version} = require('../package.json')
const api = require('../apiInfo.json')
const UserController = require('../controllers/UserController')
const ImageController = require('../controllers/ImageController')

const controllersArray = [
  UserController,
  ImageController
]

module.exports = new class ApiService {

  async getAllFunctions() {


    return {error: false, result: {version: version, api: api}}
  }
}