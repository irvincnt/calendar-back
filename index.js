const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');
const cors = require('cors')

const app = express();

dbConnection();

app.use(cors());

app.use( express.static('public') );
app.use( express.json() ); //lectura y parseo del body

app.use('/api/auth', require('./routes/auth'));
app.use('/api/event', require('./routes/events'));


app.listen(process.env.PORT, () => { console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)});