const express = require('express');
const router = express.Router();

const homePageController = require('../controllers/homePageController');
const managementPageController = require('../controllers/managementPageController');
const lineupPageController = require('../controllers/lineupPageController');
const tournamentPageController = require('../controllers/tournamentPageController');
const tournamentManagementPageController = require('../controllers/tournamentManagementPageController');

const getUsersController = require('../controllers/getUsersController');
const getIdController = require('../controllers/getIdController');
const getAllUserController = require('../controllers/getAllUserController');
const getUserInformtionController = require('../controllers/getUserInformationController');

const postUsersController = require('../controllers/postUsersController');
const delUserController = require('../controllers/delUserController');
const updateByIdController = require('../controllers/updateByIdController');
const shuffleTeamController = require('../controllers/shuffleTeamController');
const updateResultsController = require('../controllers/updateResultsController');
const addMatchController = require('../controllers/addMatchController');
const removeMatchController = require('../controllers/removeMatchController');

/* GET home page. */
router.get('/', homePageController);
router.get('/management', managementPageController);
router.get('/lineup', lineupPageController);
router.get('/tournament', tournamentPageController);
router.get('/tournamentManagement', tournamentManagementPageController)

router.get('/users', getUsersController);
router.get('/usersid', getIdController);
router.get('/usersall', getAllUserController);
router.get('/users/:userid', getUserInformtionController);

router.post('/users', postUsersController);
router.post('/deluser', delUserController);
router.post('/updateById', updateByIdController)
router.post('/shuffleTeam', shuffleTeamController);
router.post('/updateResults', updateResultsController);
router.post('/addmatch', addMatchController);
router.post('/removematch', removeMatchController);


module.exports = router;