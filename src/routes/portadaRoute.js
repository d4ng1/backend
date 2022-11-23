const express = require('express');

//importacion del modelo
const portadaSchema = require('../models/portadaModel');

//enrutador
const router = express.Router();

//Crear Portada
router.post('/portada/nueva_portada', (req, res) =>{
    const portada = portadaSchema(req.body);
    portada
    .save()
    .then((data) =>{
        res.json(data)
    })
    .catch((error) =>{
        res.json({message: error})
    });
});

//Listar portadas
router.get('/portada', (req, res) =>{
    portadaSchema
    .find()
    .then((data) =>{
        res.json(data)
    })
    .catch((error) =>{
        res.json({message: error})
    });
});

//Listar portada por ID
router.get('/portada/:id', (req, res) =>{
    const {id} = req.params;
    portadaSchema
    .findById(id)
    .then((data) =>{
        res.json(data)
    })
    .catch((error) =>{
        res.json({message: error})
    });
});

//Obtener Datos
router.post('/portada/obtener_datos', (req, res) =>{
    portadaSchema.find({id:req.body.id}, function(data, err){
        if(!err){
            res.send(data)
        }
        else{
            res.send(err)
        }
    })
})

//Editar portada
router.put('/portada/:id', (req, res) =>{
    const {id} = req.params;
    const {descripcion, precio, imagen} = req.body;
    portadaSchema
    .updateOne({_id: id}, {$set: {descripcion, precio, imagen}})
    .then((data) =>{
        res.json(data)
    })
    .catch((error) =>{
        res.json({message: error})
    });
});

//Eliminar portada
router.delete('/portada/:id', (req, res) =>{
    const {id} = req.params;
    portadaSchema
    .remove({_id: id})
    .then((data) =>{
        res.json(data)
    })
    .catch((error) =>{
        res.json({message: error})
    });
});

module.exports = router;