const CarService = require('../services/CarService')
const CommonService = require('../common/CommonService')

module.exports = class CarContoller {

    async getTypes(req, res) {

        const answer = await CarService.getTypes()

        return CommonService.returnMessage(res, answer)
    }

    async getType(req, res) {
        const {id} = await req.params

        // const checkedParams = CommonService.checkParams([id])
        // if (checkedParams.length !== 0) {
        //
        //     return CommonService.returnMessage(res, {
        //         error: true,
        //         result: `Укажите нужный параметр: ${checkedParams[0]}`,
        //         status: 401
        //     })
        // }

        const answer = await CarService.getType(id)

        return CommonService.returnMessage(res, answer)
    }

    async addType(req, res) {

        const {
            name,
            driveUnit,
            length,
            width,
            height,
            groundClearance,
            frontTrackWidth,
            rearTrackWidth,
            wheelSize,
            producingCountry,
            classCar,
            typeGasoline
        } = await req.body

        // const checkedParams = CommonService.checkParams([name, driveUnit, length, width, height, groundClearance, frontTrackWidth, rearTrackWidth, wheelSize, producingCountry, classCar, typeGasoline])
        // if (checkedParams.length !== 0) {
        //
        //     return CommonService.returnMessage(res, {
        //         error: true,
        //         result: `Укажите нужный параметр: ${checkedParams[0]}`,
        //         status: 401
        //     })
        // }

        const answer = await CarService.addType(name, driveUnit, length, width, height, groundClearance, frontTrackWidth, rearTrackWidth, wheelSize, producingCountry, classCar, typeGasoline)

        return CommonService.returnMessage(res, answer)
    }

    async patchType(req, res) {
        const {
            id,
            name,
            driveUnit,
            length,
            width,
            height,
            groundClearance,
            frontTrackWidth,
            rearTrackWidth,
            wheelSize,
            producingCountry,
            classCar,
            typeGasoline
        } = await req.body

        // const checkedParams = CommonService.checkParams([id, name, driveUnit, length, width, height, groundClearance, frontTrackWidth, rearTrackWidth, wheelSize, producingCountry, classCar, typeGasoline])
        // if (checkedParams.length !== 0) {
        //
        //     return CommonService.returnMessage(res, {
        //         error: true,
        //         result: `Укажите нужный параметр: ${checkedParams[0]}`,
        //         status: 401
        //     })
        // }

        const answer = await CarService.patchType(id, name, driveUnit, length, width, height, groundClearance, frontTrackWidth, rearTrackWidth, wheelSize, producingCountry, classCar, typeGasoline)

        return CommonService.returnMessage(res, answer)
    }

    async deleteType(req, res) {

        const {id} = await req.body

        // const checkedParams = CommonService.checkParams([id])
        //
        // if (checkedParams.length !== 0) {
        //     return CommonService.returnMessage(res, {
        //         error: true,
        //         result: `Укажите нужный параметр: ${checkedParams[0]}`,
        //         status: 401,
        //     })
        // }

        const answer = await CarService.deleteType(id)

        return CommonService.returnMessage(res, answer)
    }
}