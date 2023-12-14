const express = require('express');
const app = express();
const router = require('./routes/main.js');
const path = require('path')

const PORT = process.env.PORT || 3030;

app.use(express.static('public'));
//rutas↓

app.set('view engine', 'ejs');
app.set('views', path.resolve('src/views'));

app.use(router);

app.listen( PORT, () => {
    console.log('server corriendo en http://localhost:3030');
});