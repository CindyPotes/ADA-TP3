function login(){
  let nombre = $('.nombre').val()
  let contrasena = $('.contrasena').val()
  $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/productos',
    data: {nombre: nombre,
          contrasena: contrasena
    }
  }).done(function(data) {
    $('.login').append('<p>Bienvenido, ' + nombre + '</p>')
    window.location.replace('/administrador')
    

  })
}

function publicar(){
  let imagen = $('.imagen').val()
  let titulo = $('.titulo').val()
  let precio = $('.precio').val()
  $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/productos',
    data: {
      imagen: imagen,
      titulo: titulo,
      precio: precio
    }
  }).done(function(data) {
    console.log(data)
    $('.exito').removeClass('exito')
    $('.publicacion').addClass('exito') 
  });
}