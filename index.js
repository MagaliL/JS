// Importar el módulo 'http' de Node.js (para crear servidores web)
const http = require('http');

// Crear un servidor HTTP
const servidor = http.createServer((req, res) => { 
  // req = objeto de solicitud (Request)
  // res = objeto de respuesta (Response)

  // Establecer código de estado HTTP 200 (OK)
  res.statusCode = 200; 

  // Configurar el tipo de contenido como texto plano
  res.setHeader('Content-Type', 'text/plain'); 

  // Enviar la respuesta al cliente y cerrar la conexión
  res.end('Hola, mundo!'); 
});
//TODO se guarda una nota para revisar después. 

// Iniciar el servidor para que escuche en:
// - Puerto: 3000
// - Hostname: localhost (solo accesible desde tu máquina)

servidor.listen(3000, 'localhost', () => {
  // Callback que se ejecuta cuando el servidor está listo
  console.log('Servidor ejecutándose en http://localhost:3000/');
});