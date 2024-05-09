const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Habilitar CORS para todos los orígenes
app.use(cors());

// Middleware para permitir análisis de cuerpo JSON
app.use(express.json());

app.post('/api/data', (req, res) => {
    // Aquí puedes manejar la lógica para procesar los datos enviados en la petición POST
    console.log('Datos recibidos:', req.body);
    
    // Enviar un mensaje de éxito junto con un status 200
    res.status(200).send({ message: 'OK', status: true});
});
const PORT = process.env.PORT || 3000;

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});