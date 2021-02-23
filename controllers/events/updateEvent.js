const { response } = require('express');

const updateEvent = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'Actualizar evento'
  })
}

module.exports = {
  updateEvent
}
