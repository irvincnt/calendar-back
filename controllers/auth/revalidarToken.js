const { response } = require('express');

const { JWTGenerator } = require('../../helpers/jwt');

const revalidarToken = async(req, res = response) => {
  const { name, uid } = req

  const token = await JWTGenerator(uid, name)

  res.json({
    ok: true,
    token
  })
}

module.exports = {
  revalidarToken
}