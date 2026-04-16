const productos = require('../models/producto.model');

exports.obtenerProductos = (req, res) => {
  res.json(productos);
};

exports.obtenerProductoPorId = (req, res) => {
  const id = Number(req.params.id);
  const producto = productos.find((item) => item.id === id);

  if (!producto) {
    return res.status(404).json({ mensaje: 'Producto no encontrado' });
  }

  res.json(producto);
};
