//constantes de express y conexion con api
const express = require('express');
const app = express();
const lista = require('./api/lista.json');
const port = 3000;
//constante y funcion para evitar errores CORS (permisos en localhost)
const cors = require('cors');
app.use(cors());
// funcion para mandar info.
app.get('/api', (req, res) => {
    res.send(lista);
});
// funcion para encender servidor.
app.listen(port, () => {
    console.log(`¡Servidor listo!`);
});