const express = require('express');
const mongoose = require('mongoose');
const peliculasRoutes = require('./routes/peliculaRoute');
const portadaRoutes = require('./routes/portadaRoute');
//Variable de ambiente modificadas
require('dotenv').config();


const app = express();

//Configuracion del CORS
const cors = require('cors');
app.use(cors());

//Definicion del puerto
const port = process.env.PORT || 5005;

//Middleware (antepone el /api a la ruta)
app.use(express.json());
app.use('/api', peliculasRoutes);
app.use('/api', portadaRoutes);


//impotacion body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:'true'}));


// const whiteList = 'http://localhost:3000';
// app.use(cors({
//     origin: whiteList
// }));

//Mensaje de servidor funcionando en el navegador
app.get('/', (req, res) =>{
    res.send("Servidor funcionando.")
});

//Creacion de conexion a MongoDB Atlas
mongoose.connect("mongodb+srv://root:EJG6aon58y75EkDd@cluster0.fvmkvbp.mongodb.net/?retryWrites=true&w=majority")
    .then(() =>{
        console.log("Base de datos Atlas conectada.") 
    })
    .catch((error) =>{
        console.error(error)
    });

//Escucha de servidor
app.listen(port, () =>{
    console.log("Servidor iniciado desde el puerto", port)
});

