const { response } = require('express')
const User = require('../models/User')

const crearUsuario = async(req, res = response) => {
  const { name, email, password } = req.body
  
  try {
    let user = await User.findOne({ email })

      if (user) {
        return res.status(400).json({
          ok: false,
          msg: 'Un usuario ya existe con ese email'
        })
      }

      user = new User( req.body )
      await user.save();
    
      res.status(201).json({
        ok: true,
        msg: 'registro',
        uid: user.id,
        name: user.name
      })
    
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: error
    })
  }
}

const loginUsario = (req, res = response) => {
  const { email, password } = req.body

  res.json({
    ok: true,
    msg: 'login',
    email,
    password
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