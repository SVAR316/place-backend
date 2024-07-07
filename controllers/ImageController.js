const ImageService = require('../services/ImageService')
const CommonService = require('../common/CommonService')

module.exports = class ImageController {

  async addImage(req, res) {

    const {objectId} = await req.body
    let file = await req.files['image'][0].filename

    const checkedParams = CommonService.checkParams([objectId, file])

    if (checkedParams.length !== 0) return CommonService.returnMessage(res, {
      error: true,
      result: `Укажите нужный параметр: ${checkedParams[0]}`,
      status: 401
    })

    file = '/uploads/' + file

    const answer = await ImageService.addImage(file, objectId)


    return CommonService.returnMessage(res,answer)
  }

  async deleteImage(req, res) {
  }
}