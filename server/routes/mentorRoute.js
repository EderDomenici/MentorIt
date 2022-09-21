const express = require('express');
const mentorController = require('../controllers/mentorController')
const auth = require('../middleware/auth')
const routes = express.Router();



routes.post('/login', mentorController.login)

routes.get('/:id', mentorController.showMentor)

routes.post('/create', mentorController.create)





module.exports = routes