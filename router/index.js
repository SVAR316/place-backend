// imports
const express = require('express');
const router = express.Router();
const {User, Image, Event, ApiController} = require('../controllers/index.js');
const multer = require('multer');

// create class

const UserController = new User()
const ImageController = new Image()
const EventController = new Event()

// settings storage

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/'); //Здесь указывается путь для сохранения файлов
    },
    filename: function (req, file, cb) {
        // let reg = /.[a-z]{3,6}/gm
        cb(null, Date.now() + file.originalname);
    },
});
const upload = multer({storage: storage});

// Routing

// API

router.get('/', async (req, res) => {
    // eslint-disable-next-line no-undef
    res.sendFile(process.cwd() + '/static/pages/index.html')
})
router.get('/getAllFunctions', async (req, res) => await ApiController.getAllFunction(req, res))

// User

router.post('/login', async (req, res) => await UserController.login(req, res))
router.post('/registration', async (req, res) => await UserController.registration(req, res))
router.patch('/updateUser', async (req, res) => await UserController.updateUser(req, res))
router.get('/users/:id', async (req, res) => await UserController.getUser(req, res))
router.get('/users', async (req, res) => await UserController.getUsers(req, res))

// Events
router.post('/createEvent', async (req,res) => await EventController.createEvent(req, res))
router.patch('/editEvent', async (req, res) => await EventController.editEvent(req, res))
router.delete('/deleteEvent', async (req, res) => await EventController.deleteEvent(req, res))
router.get('/events', async (req, res) => await EventController.getEvents(req, res))
router.get('/event/:id', async (req, res) => await EventController.getEvent(req, res))
router.post('/subscribe', async (req, res) => await EventController.subscribeEvent(req, res))
router.post('/donate', async (req, res) => await EventController.donateEvent(req, res))

// Notification
// TODO: Получение уведомлений

// Обработчик оплаты (Эмитация)
// TODO: Заявка на создания оплаты
// TODO: Подтверждение оплаты


router.post('/addImage', upload.fields([{
    name: 'image',
    maxCount: 1
}]), async (req, res) => await ImageController.addImage(req, res));
router.post('/deleteImage', async (req, res) => await ImageController.deleteImage(req, res))

module.exports = router;