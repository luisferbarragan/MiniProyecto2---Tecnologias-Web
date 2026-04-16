const express = require('express');
const cors = require('cors');

const app = express();
const productosRoutes = require('./routes/productos.routes');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor de tienda funcionando');
});

app.use('/productos', productosRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
