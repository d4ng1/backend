const mongoose = require('mongoose');

const peliculaSchema = mongoose.Schema({

    nombre: {
        type: String,
        required: true
    },
    tarifa: {
        type: String,
        required: true
    },
    hora_inicio: {
        type: String,
        required: true
    },
    idioma: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    restriccion: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        required: true
    },
    trailer: {
        type: String,
        required: true
    },
    sinopsis: {
        type: String,
        required: true
    },
    portada:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Pelicula', peliculaSchema);