const {eventModel, userModel} = require('../models/index')
const {max} = require("pg/lib/defaults");


module.exports = class EventService {

    async createEvent(name, description, city, district, street, dueTime, fundraising, totalAmount, maxPeople, userId) {
        const user = await userModel.findOne({where: {id: userId}})

        if (!user) return {error: true, result: 'User not found', status: 404}


        const event = await eventModel.create({
            name: name,
            description: description,
            city: city,
            district: district,
            street: street,
            dueTime: dueTime,
            fundraising: fundraising,
            totalAmount: totalAmount,
            maxPeople: maxPeople,
            createdUser: userId,
            })

        if(!event) return {error: true, result: 'Not created event', status: 500}

        return {error: false, result: true, status: 201}
    }

    async editEvent(id, name, description, city, district, street, dueTime, fundraising, totalAmount, maxPeople){
        const event = await eventModel.findOne({where: {id: id}})

        if(!event) return {error: true, result: 'Event not found', status: 404}

        event.name = name
        event.description = description
        event.city = city
        event.district = district
        event.street = street
        event.dueTime = dueTime
        event.fundraising = fundraising
        event.totalAmount = totalAmount
        event.maxPeople = maxPeople
        await event.save()

        return {error: false, result: true}
    }

    async deleteEvent(id, userId) {
        const event = await eventModel.findOne({where: {id: id}})

        if(!event) return {error: true, result: 'Event not found', status: 404}

        if(event.createdUser !== userId) return {error: true, result: 'For this user, this action is not possible', status: 401}

        await event.destroy()

        return {error: false, result: true}
    }

    async getEvents(){
        // TODO: Сделать пагинацию и поиск по параметрам
        const events = await eventModel.findAll()

        return {error: false, result: events}
    }

    async getEvent(id){
        const event = await eventModel.findOne({where: {id: id}})

        if(!event) return {error: true, result: 'Event not found', status: 404}

        return {error: false, result: event}
    }
}