const { response } = require('express');
const bcrypt = require('bcryptjs');

const User = require('../../models/User');
const { JWTGenerator } = require('../../helpers/jwt');

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

      const token = await JWTGenerator(user.id, user.name)
    
      res.status(201).json({
        ok: true,
        msg: 'registro',
        uid: user.id,
        name: user.name,
        token
      })
    
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: error
    })
  }
}

module.exports = {
  crearUsuario
}

