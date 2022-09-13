const express = require('express');
const mentorController = require('../controllers/mentorController')
const routes = express.Router();

routes.get('/', mentorController.index)



module.exports = routes