const { response } = require('express');
const Event = require('../../models/Event');

const newEvent = async(req, res = response) => {
  const { uid } = req
  try {
    const event = await new Event(req.body)
    event.user = uid

    const savedEvent = await event.save();
    
    res.status(200).json({
      ok: true,
      event: savedEvent 
    })
  } catch (error) {
    res.status(500).json({
      ok: true,
      msg: 'Contactar al admin'
    })
  }

}

module.exports = {
  newEvent
}
