const { Router } = require('express');
const { getEvents } = require('../controllers/events/getEvents');
const { newEvent } = require('../controllers/events/newEvent');
const { updateEvent } = require('../controllers/events/updateEvent');
const { deleteEvent } = require('../controllers/events/deleteEvent');
const { JWTValidator } = require('../middlewares/jwtValidate');
const { check } = require('express-validator');
const { fieldsValidate } = require('../middlewares/fieldsValidate');
const { isDate } = require('../helpers/isDate');


const router = Router();

router.use(JWTValidator)
router.get(
  '/',
  getEvents);

router.post(
  '/',
  [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'La fecha de inicio es obligatorio').custom(isDate),
    check('end', 'La fecha final es obligatorio').custom(isDate),
    fieldsValidate
  ],
  newEvent);

router.put(
  '/:id',
  updateEvent);

router.delete(
  '/:id',
  deleteEvent);
  

  module.exports = router;