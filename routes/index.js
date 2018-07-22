var express = require('express');
var router = express.Router();

let administradorController = require('../controllers/administradorController')
let publicacionesController = require('../controllers/publicacionesController')
let loginController = require('../controllers/loginController')

/* GET home page. */
router.get('/', administradorController.administrador)
router.post('/', loginController.login)
router.get('/administrador', administradorController.administrador)
router.post('/productos', administradorController.agregar)
router.get('/productos', publicacionesController.productos)

module.exports = router;



