const jwt = require('jsonwebtoken');

const JWTGenerator = (uid, name) => {
  return new Promise( (resolve, reject) => {
    const payload = { uid, name}
    jwt.sign( payload, process.env.SECRET_JWT_SEED, {
      expiresIn: '2h'
    }, (err, token) => {
      if(err) {
        reject('No se pudo generar el toen');
      }

      resolve(token);
    });
  })
}

module.exports = {
  JWTGenerator
}