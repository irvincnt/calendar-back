const { response } = require('express')
const { validationResult } = require('express-validator')

const crearUsuario = (req, res = response) => {
  const { name, email, password } = req.body

  const errors = validationResult(req)
  if ( !errors.isEmpty() ){
    return res.json({
      ok: false,
      errors: errors.mapped()
    })
  }

  res.json({
    ok: true,
    msg: 'registro',
    name,
    email,
    password
  })
}

const loginUsario = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'login'
  })
}

const revalidarToken = (req, res = response) => {
  res.json({
    ok: true,
    msg: 're validar usuario'
  })
}


module.exports = {
  crearUsuario,
  loginUsario,
  revalidarToken
}