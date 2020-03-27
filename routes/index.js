const express = require('express');
const router = express.Router();

const homePageController = require('../controllers/homePageController');
const getUsersController = require('../controllers/getUsersController');
const postUsersController = require('../controllers/postUsersController');
const getUserInformtionController = require('../controllers/getUserInformationController');
const delUserController = require('../controllers/delUserController');

/* GET home page. */
router.get('/', homePageController);
router.get('/users', getUsersController);
router.post('/users', postUsersController);
router.get('/users/:userid',getUserInformtionController );
router.post('/deluser', delUserController);

module.exports = router;