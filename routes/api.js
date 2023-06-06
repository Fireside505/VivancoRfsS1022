const express = require('express');
const router = express.Router();
const ApiController = require ('../controllers/apiController');
const {validarId}= require('../middlewares/validarId')
const checks = require('../middlewares/checks')
const{validarChecks} = require('../middlewares/validarChecks');
const apiController = require('../controllers/apiController');


router.get('/listado/pacientes',ApiController.listadoPorPaciente);
router.get('/listado/animal/:animal',ApiController.listadoPorAnimal);
router.get('/buscar/id/:id', validarId,ApiController.buscarPorId);
router.post ('/crear', checks, validarChecks, ApiController.crear);
router.put ('/editar/:id', validarId, checks, validarChecks, apiController.editar);
router.delete ('/borrar/:id', validarId, apiController.borrar);


  module.exports = router