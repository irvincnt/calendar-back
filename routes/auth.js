const { Router } = require('express');
const router = Router();
const { check } = require('express-validator')
const { crearUsuario, loginUsario, revalidarToken } = require('../controllers/auth');
const { fieldsValidate } = require('../middlewares/fieldsValidate');


router.post(
  '/new',
  [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').isLength({ min:6 }),
    fieldsValidate
  ],
  crearUsuario);

router.post(
  '/',
  [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').isLength({ min:6 }),
    fieldsValidate
  ],
  loginUsario);
  
router.get('/renew', revalidarToken);


module.exports = router;