const express = require('express');
require('dotenv').config(); //"dotenv" permite el uso de las variables de entorno del archivo .env y ".config()" se le esta indicando que cargue las variables de entorno definidas en ".env"
const {dbConnection} = require('./database/config');
const cors = require('cors');

//Crear el servidor express
const app = express();

//Base de Datos
dbConnection();

//Cors
app.use(cors())

//Directorio Publico
/*
    app.use() es un método de Express.js que se utiliza para configurar middleware en la aplicación
    El middleware son funciones que se ejecutan en el ciclo de vida de una solicitud HTTP y pueden realizar diversas tareas, como manejar la solicitud, modificar la respuesta, 
    ejecutar funciones antes o después de las rutas, etc.

    express.static(): es un middleware incorporado en Express.js que se utiliza para servir archivos estáticos. Recibe como argumento el nombre del directorio desde el cual se servirán 
    los archivos estáticos. En este caso, 'public' es el directorio especificado.
*/
app.use( express.static('public') );

//Lectura y parseo del body
/*
    app.use(express.json()) es un middleware incorporado en Express.js que se utiliza para analizar el cuerpo de las solicitudes entrantes con formato JSON.
    app.post('/api/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
});

*/
app.use( express.json());

//Rutas
//Middleware
/*
    '/api/auth': Esta es la ruta base que se asigna al middleware que se está utilizando. En este caso, la ruta base es '/api/auth', lo que significa que cualquier solicitud que comience 
    con /api/auth será manejada por este middleware.

    require('./routes/auth'): Aquí se carga un archivo que contiene la configuración de las rutas para la autenticación.  
    require('./routes/auth') importa el archivo que se encuentra en el directorio routes con el nombre auth.js (o cualquier extensión que tenga el archivo). Este archivo suele contener 
    las rutas específicas para la autenticación de usuarios.
*/
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

/*
    req: Es el objeto de solicitud (request). Contiene información sobre la solicitud HTTP que el cliente (navegador, otra aplicación, etc.) envía al servidor. 
    Este objeto incluye detalles como la URL solicitada, los parámetros de la consulta, las cabeceras de la solicitud, etc.

    res: Es el objeto de respuesta (response). Se utiliza para enviar la respuesta HTTP desde el servidor al cliente. Este objeto permite configurar el código de estado HTTP de la respuesta 
    (como 200 para OK, 404 para No encontrado, etc.), las cabeceras de la respuesta y el cuerpo de la respuesta (como HTML, JSON, archivos estáticos, etc.).
*/

//Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
} )