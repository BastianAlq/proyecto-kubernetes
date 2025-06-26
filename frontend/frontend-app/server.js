const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 80; // puerto del que escuchara el frontend

// Leer la variable de entorno con el nombre del Pod
const frontendPodName = process.env.MY_FRONTEND_POD_NAME || 'Frontend Desconocido';
const frontendPodIp = process.env.MY_FRONTEND_POD_IP || 'IP Desconocida';

// Ruta para servir el index.html modificado dinámicamente
app.get('/', (req, res) => {
  fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer index.html:', err);
      return res.status(500).send('Error interno del servidor');
    }

    // Reemplaza un marcador de posición en el HTML con el nombre del Pod
    let htmlContent = data.replace('', `Servido por Pod: ${frontendPodName} IP: ${frontendPodIp}`);

    res.send(htmlContent);
  });
});

// Servir el resto de archivos estáticos (en este caso solo el html
app.use(express.static(path.join(__dirname)));

app.listen(port, () => {
  console.log(`Frontend server running on port ${port}, serving from Pod: ${frontendPodName}`);
});
