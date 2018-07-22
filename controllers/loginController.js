loginService = require('../services/loginService')

let self = {}

self.login = function(){
  let data = req.body
	loginService.agregar(data)
	res.json({})
}


module.exports= self