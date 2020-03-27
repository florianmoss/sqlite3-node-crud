const express = require('express');
const router = express.Router();

const homePageController = require('../controllers/homePageController');
const getUsersController = require('../controllers/getUsersController');
const postUsersController = require('../controllers/postUsersController');
const getUserInformtionController = require('../controllers/getUserInformationController');
const delUserController = require('../controllers/delUserController');
const updateByIdController = require('../controllers/updateByIdController');
/* GET home page. */
router.get('/', homePageController);
router.get('/users', getUsersController);
router.post('/users', postUsersController);
router.get('/users/:userid',getUserInformtionController );
router.post('/deluser', delUserController);
router.post('/updateById', updateByIdController)

module.exports = router;