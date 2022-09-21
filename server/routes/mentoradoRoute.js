const express = require('express');
const mentoradoController = require('../controllers/mentoradoController')
const auth = require('../middleware/auth')
const routes = express.Router();

routes.post("/login", mentoradoController.login)

routes.get("/:id", mentoradoController.showMentorado)

routes.post("/create", mentoradoController.create)


module.exports = routes