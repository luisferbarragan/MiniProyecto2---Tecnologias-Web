const db = require('../models/db');

exports.crearMensaje = async (req, res) => {
  const { nombre, correo, asunto, mensaje } = req.body;

  try {
    const [resultado] = await db.query(
      'INSERT INTO mensajes (nombre, correo, asunto, mensaje) VALUES (?, ?, ?, ?)',
      [nombre.trim(), correo.trim(), asunto.trim(), mensaje.trim()]
    );

    res.status(201).json({
      mensaje: 'Mensaje recibido correctamente',
      id: resultado.insertId
    });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al guardar el mensaje' });
  }
};
