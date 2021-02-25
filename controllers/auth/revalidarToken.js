const { response } = require('express');

const { JWTGenerator } = require('../../helpers/jwt');

const revalidarToken = async(req, res = response) => {
  const { name, uid } = req

  const token = await JWTGenerator(uid, name)

  res.json({
    ok: true,
    uid,
    name,
    token
  })
}

module.exports = {
  revalidarToken
}