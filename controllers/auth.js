const { response } = require('express');
const bcrypt = require('bcryptjs');

const User = require('../models/User');

const crearUsuario = async(req, res = response) => {
  const { email, password } = req.body
  
  try {
    let user = await User.findOne({ email })

      if (user) {
        return res.status(400).json({
          ok: false,
          msg: 'Un usuario ya existe con ese email'
        })
      }

      user = new User( req.body )

      const salt = bcrypt.genSaltSync();
      user.password = bcrypt.hashSync( password, salt );

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

const loginUsario = async(req, res = response) => {
  const { email, password } = req.body

  try {
    let user = await User.findOne({ email })

      if (!user) {
        return res.status(400).json({
          ok: false,
          msg: 'Un usuario no existe'
        })
      }

      // valid password
      const validPassword = bcrypt.compareSync( password, user.password );
      if (!validPassword) {
        return res.status(400).json({
          ok: false,
          msg: 'Password incorrecto'
        });
      }

      // JWT generate


      res.status(200).json({
        ok: true,
        msg: 'login',
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