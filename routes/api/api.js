const express = require('express');
const router = express.Router();


const securityApi = require('./security');
const thingsApi = require('./things');

router.use('/security', securityApi);
router.use('/things',thingsApi);


router.get('/',(req, res, next)=>{
    res.status(200).json({"msg":"Things Version 1.0 prueba"})
})
//router.get('/', (req, res, next)=>{
    //req toda la peticion del cliente
    //res toda la respuesta que le vamos a dar al cliente
    //next un elemento porsi
  //  res.status(200).json({"api":"Version 1.0"})
//})

//router.get('/hello',(req, res, next)=>{
//    res.status(200).json({"msg":"Hola Mundo"})
//})
module.exports = router;