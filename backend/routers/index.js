const express = require('express')
const router = express.Router()

const Child = require('../populateChild')
const hello = require('../controller')
const userAuth = require('../controller/user')
const upload = require('../fileMiddleware/upload')
const addFile = require('../controller/Myfiles')
const controller = require('../controller/index')

router.get('/children', async (req, res) => {
    const children = await Child.find();
    res.send(children);
});

router.post ('/addChild',controller.addChild)
router.get('/child', controller.findChild)
router.get('/findAllChildren',controller.findAllChildren)
router.post('/forgotPassword', userAuth.forgotPassword)
router.patch('/resetPassword/:token', userAuth.resetPassword)
router.get('/hello', controller.hello)
router.post('/signup', userAuth.confirmOTP, userAuth.signUP)
router.post('/verify', userAuth.genOTP)
router.post('/login', userAuth.login)
router.post('/addFile', upload.single('Myfile'), addFile)

module.exports = router;