const express = require('express');
const mentorController = require('../controllers/mentorController')
const auth = require('../middleware/auth')
const routes = express.Router();

routes.get('/', auth, mentorController.index)
routes.post('/', mentorController.create)
routes.post('/login', mentorController.login)



module.exports = routes