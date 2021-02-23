const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');
const { crearUsuario } = require('../controllers/auth/createUser');
const { loginUsario } = require('../controllers/auth/loginUser');
const { revalidarToken } = require('../controllers/auth/revalidarToken');
const { fieldsValidate } = require('../middlewares/fieldsValidate');
const { JWTValidator } = require('../middlewares/jwtValidate');


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
  
router.get('/renew', JWTValidator, revalidarToken);


module.exports = router;