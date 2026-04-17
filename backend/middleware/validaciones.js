const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validarNoVacio = (campos, req) => {
  return campos.every((campo) => {
    const valor = req.body[campo];
    return typeof valor !== 'undefined' && String(valor).trim().length > 0;
  });
};

const validarMensajeContacto = (req, res, next) => {
  const { nombre, correo, asunto, mensaje } = req.body;

  if (!validarNoVacio(['nombre', 'correo', 'asunto', 'mensaje'], req)) {
    return res.status(400).json({ mensaje: 'Todos los campos de contacto son obligatorios' });
  }

  if (!emailRegex.test(String(correo).trim())) {
    return res.status(400).json({ mensaje: 'El correo electrónico no es válido' });
  }

  if (String(mensaje).trim().length < 10) {
    return res.status(400).json({ mensaje: 'El mensaje debe contener al menos 10 caracteres' });
  }

  next();
};

const validarProducto = (req, res, next) => {
  const { nombre, categoria, marca, precio, stock, imagen, descripcion } = req.body;

  if (!validarNoVacio(['nombre', 'categoria', 'marca', 'imagen', 'descripcion'], req)) {
    return res.status(400).json({ mensaje: 'Nombre, categoría, marca, imagen y descripción son obligatorios' });
  }

  const precioNumero = Number(precio);
  const stockNumero = Number(stock);

  if (!Number.isFinite(precioNumero) || precioNumero < 0) {
    return res.status(400).json({ mensaje: 'El precio debe ser un número válido mayor o igual a cero' });
  }

  if (!Number.isInteger(stockNumero) || stockNumero < 0) {
    return res.status(400).json({ mensaje: 'El stock debe ser un número entero mayor o igual a cero' });
  }

  req.body.precio = precioNumero;
  req.body.stock = stockNumero;

  next();
};

module.exports = {
  validarMensajeContacto,
  validarProducto
};
