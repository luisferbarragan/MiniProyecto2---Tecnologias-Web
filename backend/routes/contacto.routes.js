const { Router } = require('express');
const mensajesController = require('../controllers/mensajes.controller');
const { validarMensajeContacto } = require('../middleware/validaciones');

const router = Router();

router.post('/', validarMensajeContacto, mensajesController.crearMensaje);

module.exports = router;
