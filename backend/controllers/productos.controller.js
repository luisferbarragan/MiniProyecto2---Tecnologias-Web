const db = require('../models/db');

exports.obtenerProductos = async (req, res) => {
  try {
    const [productos] = await db.query('SELECT * FROM productos');
    res.json(productos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener productos' });
  }
};

exports.obtenerProductoPorId = async (req, res) => {
  const id = Number(req.params.id);

  try {
    const [productos] = await db.query('SELECT * FROM productos WHERE id = ?', [id]);

    if (productos.length === 0) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }

    res.json(productos[0]);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el producto' });
  }
};

exports.crearProducto = async (req, res) => {
  const {
    nombre,
    categoria,
    marca,
    precio,
    stock,
    imagen,
    descripcion,
    disponible
  } = req.body;

  try {
    const [resultado] = await db.query(
      `INSERT INTO productos
      (nombre, categoria, marca, precio, stock, imagen, descripcion, disponible)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [nombre, categoria, marca, precio, stock, imagen, descripcion, disponible]
    );

    res.status(201).json({
      mensaje: 'Producto agregado correctamente',
      id: resultado.insertId
    });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el producto' });
  }
};
