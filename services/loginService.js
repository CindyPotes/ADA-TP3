let self = {}

let contrasena = {
  usuario: 'juani',
  clave: 'muchoforro'
}

let islogin = false

self.login = function(){
  if ((contrasena.usuario && contrasena.clave) && (data.nombre && data.contrasena)) {
    return islogin = true
  } else {
    return islogin = false
  }
}

self.loginOk = function(){
  return islogin
}

module.exports = self