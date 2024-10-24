const {Event} = require('../services/index');
const CommonService = require('../services/CommonService')

const EventService = new Event();

module.exports = class EventController {

    async createEvent(req, res) {
        CommonService.startTimer('createEvent')
        const {
            name,
            description,
            city,
            district,
            street,
            dueTime,
            fundraising,
            totalAmount,
            maxPeople,
            userId
        } = await req.body;

        const answer = await EventService.createEvent(
            name,
            description,
            city,
            district,
            street,
            dueTime,
            fundraising,
            totalAmount,
            maxPeople,
            userId
        );


        CommonService.endTimer('createEvent')

        return CommonService.returnMessage(res, answer)
    }

    async editEvent(req, res) {
        CommonService.startTimer('editEvent')
        const {
            id,
            name,
            description,
            city,
            district,
            street,
            dueTime,
            fundraising,
            totalAmount,
            maxPeople,
        } = await req.body;

        const answer = await EventService.editEvent(
            id,
            name,
            description,
            city,
            district,
            street,
            dueTime,
            fundraising,
            totalAmount,
            maxPeople,
        );

        CommonService.endTimer('editEvent')

        return CommonService.returnMessage(res, answer)
    }

    async deleteEvent(req, res) {
        CommonService.startTimer('deleteEvent')
        const {id} = await req.body
        // TODO:Придумать проверку на создателя
        const answer = await EventService.deleteEvent(id)

        CommonService.endTimer('deleteEvent')

        return CommonService.returnMessage(res, answer)
    }

    async getEvents(req, res) {
        CommonService.startTimer('getEvents')

        const answer = await EventService.getEvents()

        CommonService.endTimer('getEvents')

        return CommonService.returnMessage(res, answer)
    }

    async getEvent(req, res) {
        CommonService.startTimer('getEvent')
        const {id} = await req.params

        const answer = await EventService.getEvent(id)

        CommonService.endTimer('getEvent')

        return CommonService.returnMessage(res, answer)
    }

    async subscribeEvent(req, res) {
    }

    async donateEvent(req, res) {

    }


}