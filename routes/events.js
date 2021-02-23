const { Router } = require('express');
const { getEvents } = require('../controllers/events/getEvents');
const { newEvent } = require('../controllers/events/newEvent');
const { updateEvent } = require('../controllers/events/updateEvent');
const { deleteEvent } = require('../controllers/events/deleteEvent');
const { JWTValidator } = require('../middlewares/jwtValidate');
const router = Router();

router.use(JWTValidator)
router.get(
  '/',
  getEvents);

router.post(
  '/',
  newEvent);

router.put(
  '/:id',
  updateEvent);

router.delete(
  '/:id',
  deleteEvent);
  

  module.exports = router;