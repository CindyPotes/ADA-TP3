let loginService = require('./loginService')

let self = {}

let productos = []

self.getproductos = function(){
	return productos
}

self.agregar = function(data){
  //if (loginService.loginOk == true) {
    let publicacion = {imagen: data.imagen,
      titulo: data.titulo,
      precio: data.precio
    }
  return productos.push(publicacion) 
 // } else {
 // return res.redirect('/')
  //}
	
}

self.publicacion = function (data){
  for (let i = 0; i < imagenes.length; i++) {
    if (imagenes[i].id == data)
    return imagenes[i]    
  }
}

module.exports= self