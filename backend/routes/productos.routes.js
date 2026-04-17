const { Router } = require('express');
const productosController = require('../controllers/productos.controller');
const { validarProducto } = require('../middleware/validaciones');

const router = Router();

router.get('/', productosController.obtenerProductos);
router.get('/:id', productosController.obtenerProductoPorId);
router.post('/', validarProducto, productosController.crearProducto);

module.exports = router;
