productosService = require('../services/productosService')

let self = {}

self.productos = function(req, res){
  let publicaciones = productosService.getproductos()
  res.render('productos', {publicaciones:publicaciones})
}

module.exports= self