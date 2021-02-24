const { response } = require('express');
const Event = require('../../models/Event');

const updateEvent = async(req, res = response) => {
  const eventId = req.params.id
  const uid = req.uid

  try {
    const event = await Event.findById(eventId);

    if (!event) {
      res.status(404).json({
        ok: false,
        msg: 'El evento no existe'
      })
    }

    if (event.user.toString() !== uid) {
      res.status(401).json({
        ok: false,
        msg: 'No tienes permisos para editar el evento'
      })
    }

    const newEvent = {
      ...req.body,
      user: uid
    }

    const updatedEvent = await Event.findByIdAndUpdate(
      eventId,
      newEvent, 
      { new: true} 
    )

    res.status(200).json({
      ok: true,
      event: updatedEvent
    })
    
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Error - Comunicate con el administrador'
    })
  }
}

module.exports = {
  updateEvent
}
