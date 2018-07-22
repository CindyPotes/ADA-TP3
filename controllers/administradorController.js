productosService = require('../services/productosService')

let self = {}

self.administrador = function(req, res){
	res.render('administrador');
};

self.agregar = function(req, res){
  let data = req.body
	productosService.agregar(data)
	res.json({})
}

module.exports= self