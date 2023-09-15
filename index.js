import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

//Conectar la base de datos
db.authenticate()
    .then( () => console.log('Base de datos conectada') )
    .catch( error => console.log(error) )

//Definir el puerto
const port = process.env.PORT || 4001;

// Habilitar PUG
app.set('view engine', 'pug');

app.use( (req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de viajes';
    next();
} )

//Definir la carpeta publica
app.use(express.static('public')); 

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}))

// Agrupar router
app.use('/', router);

app.listen( port, () =>{
    console.log(`Escuchando por el puerto ${port}`);
} )