const express = require('express');
const router = express.Router();

const homePageController = require('../controllers/homePageController');
const managementPageController = require('../controllers/managementPageController');
const tournamentPageController = require('../controllers/tournamentPageController');

const getUsersController = require('../controllers/getUsersController');
const postUsersController = require('../controllers/postUsersController');
const getUserInformtionController = require('../controllers/getUserInformationController');
const delUserController = require('../controllers/delUserController');
const updateByIdController = require('../controllers/updateByIdController');


/* GET home page. */
router.get('/', homePageController);
router.get('/management', managementPageController);
router.get('/tournament', tournamentPageController);

router.get('/users', getUsersController);
router.post('/users', postUsersController);
router.get('/users/:userid', getUserInformtionController);
router.post('/deluser', delUserController);
router.post('/updateById', updateByIdController)

module.exports = router;