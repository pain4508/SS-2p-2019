const express = require('express');
var router = express.Router();


// JSON -> JavaScript Object Notation

// Json.org

var thingsCollection  = [];

var thingsCollection = {
    "id" : 0,
    "descripcion" : '',
    "fecha" : 0,
    "by" : ''
};

thingsCollection.push(
    Object.assign({},
       thingsStruct,
            {"id" : "1",
             "descripcion" : "Mi primer Thing",
                "fecha" : new Date().getTime(),
            "by" : "Cristian Prado"
        }    
      )
);

router.get('/', (req, res, next)=>{
    res.status(200).json(thingsCollection);
});

// CRUD Crear, Leer(Read), Actualizar(Update), Eliminar(Delete)
// REST
// GET consultas Read, Lectura
// POST Crear -Insertar C
// PUT Update -Actualizar
// DELETE Delete -Eliminar

router.post('/', (req, rest, next)=>{
    var newElement = object.assign({},
        thingsStruct,
        releaseEvents.body,
        {
            "fecha" : new Date().getTime(),
            "id" : new Date().getTime()
        }
    );
    thingsCollection.push(newElement);
    res.status(200).json(newElement);
}); //Post

router.put('/', (req, res, next) => {
    res.status(200).json({'msj' : 'Entro en el put'});
}); //Put /

router.delete('/', (req, res, next) => {
    res.status(200).json({'msj' : 'Entro en el Delete'});
}); //Delete /


module.exports = router;