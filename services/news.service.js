const {newsModel} = require('../models');
const {CommonService} = require("../services/index");

module.exports = class NewsService{

    async getNews(){
        const news = await newsModel.findAll()

        if(!news) return {error: true, status: 404, result: 'Новости не найдены'}

        return {error: false, result: news}
    }

    async getNewsById(id){

        // const cand = await CommonService.checkParams([{id: id}])

        // if(cand.length > 0) return {error: true, status: 400, result: "Не хватает данных параметров: " + cand}

        const news = await newsModel.findOne({where: {id: id}})

        if(!news) return {error: true, status: 404, result: 'Новость не найдена'}

        return {error: false, result: news}
    }
}