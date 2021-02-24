const { response } = require('express');

const getEvents = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'Obtener evento'
  })
}

module.exports = {
  getEvents
}
