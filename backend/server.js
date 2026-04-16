// juan jesus vazquez martin del campo
//jose arturo picazo zaragoza
//luis fernanfloo barragan medina

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// endpoint de prueba
app.get('/', (req, res) => {
  res.send('api funcionando');
});

const productosRoutes = require('./routes/productos.routes');
app.use('/api/productos', productosRoutes);

app.listen(3000, () => {
  console.log('servidor corriendo en puerto 3000');
});