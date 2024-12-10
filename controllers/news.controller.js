const {News} = require('../services/index');
const {CommonService} = require("../services/index");

const NewsService = new News;

module.exports = class NewsController {

    async getNews(req, res) {

        const answer = await NewsService.getNews();

        return CommonService.returnMessage(res, answer)
    }

    async getNewsById(req, res) {
        const {id} = req.query

        const answer = await NewsService.getNewsById(id)

        return CommonService.returnMessage(res, answer)
    }
    async createNews(req, res){}
    async updateNews(req, res){}
    async deleteNews(req, res){}
}