const { response } = require('express');

const newEvent = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'Nuevo evento'
  })
}

module.exports = {
  newEvent
}
