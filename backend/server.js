const express = require('express');
const cors = require('cors');

const app = express();
const productosRoutes = require('./routes/productos.routes');
const contactoRoutes = require('./routes/contacto.routes');

const corsOrigins = process.env.CORS_ORIGINS
  ? process.env.CORS_ORIGINS.split(',').map((origin) => origin.trim())
  : '*';

app.use(cors({ origin: corsOrigins }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor de tienda funcionando');
});

app.get('/health', (req, res) => {
  res.json({ ok: true });
});

app.use('/productos', productosRoutes);
app.use('/contacto', contactoRoutes);

const PORT = Number(process.env.PORT || 3000);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
