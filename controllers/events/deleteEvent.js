const { response } = require('express');

const deleteEvent = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'Eliminar evento'
  })
}

module.exports = {
  deleteEvent
}
