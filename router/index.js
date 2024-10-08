// imports
const express = require('express');
const router = express.Router();
const User = require('../controllers/UserController')
const Image = require('../controllers/ImageController')
const ApiController = require('../controllers/ApiController')
const multer = require('multer');

// create class

const UserController = new User()
const ImageController = new Image()

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

// USER

router.post('/login', async (req, res) => await UserController.login(req, res))
router.post('/registration', async (req, res) => await UserController.registration(req, res))
router.patch('/updateUser', async (req, res) => await UserController.updateUser(req, res))
router.get('/users/:id', async (req, res) => await UserController.getUser(req, res))
router.get('/users', async (req, res) => await UserController.getUsers(req, res))

// TODO: Удалить
// Тестовое пополнение баланса
router.post('/addBalance', async (req, res) => await UserController.addBalance(req, res))


// Events
// TODO: Создания мероприятия
// TODO: Редактирование мероприятия
// TODO: Удаление мероприятия
// TODO: Подписка пользователя на мероприятие
// TODO: Донат на мероприятие


router.post('/addImage', upload.fields([{
    name: 'image',
    maxCount: 1
}]), async (req, res) => await ImageController.addImage(req, res));
router.post('/deleteImage', async (req, res) => await ImageController.deleteImage(req, res))

module.exports = router;