const TypeModel = require('../models/carModel')

module.exports = new class CarService{

    async getType(){

        const typesBD = await TypeModel.findAll()

        let types = []

        typesBD.forEach((type) => {
            types.push({
                id: type.id,
                name: type.name,
                length: type.length,
                width: type.width,
                height: type.height,
                groundClearance: type.groundClearance,
                frontTrackWidth: type.frontTrackWidth,
                rearTrackWidth: type.rearTrackWidth,
                wheelSize: type.wheelSize,
                producingCountry: type.producingCountry,
                classCar: type.classCar,
                typeGasoline: type.typeGasoline
            })
        })

        return {error: false, result: types}

    }

    async addType(name, driveUnit, length, width, height, groundClearance, frontTrackWidth, rearTrackWidth, wheelSize, producingCountry, classCar, typeGasoline){


        const type = await TypeModel.create({
            name: name,
            length: length,
            width: width,
            height: height,
            groundClearance: groundClearance,
            frontTrackWidth: frontTrackWidth,
            rearTrackWidth: rearTrackWidth,
            wheelSize: wheelSize,
            producingCountry: producingCountry,
            classCar: classCar,
            typeGasoline: typeGasoline
        })

        return {
            error: false,
            result: {typeId: type.id}
        }
    }

    async patchType(){}

    async deleteType(id) {

        let type = await TypeModel.findOne({where: {id: id}})

        if(!type) return {error: true, result: 'Нет такого типа авто', status: 404}

        type.destroy()


        return {error: false, result: true}
    }

}