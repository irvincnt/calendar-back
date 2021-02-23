
const { response } = require('express');
const bcrypt = require('bcryptjs');
const { JWTGenerator } = require('../../helpers/jwt');

const User = require('../../models/User');

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
      const token = await JWTGenerator(user.id, user.name)

      res.status(200).json({
        ok: true,
        msg: 'login',
        uid: user.id,
        name: user.name,
        token
      })
    
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: error
    })
  }
}

module.exports = {
  loginUsario
}