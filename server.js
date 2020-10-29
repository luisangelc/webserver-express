const { text } = require('express');
const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'luis angel cAStillo ruELas'
    })
});
app.get('/about', (req, res) => {
    res.render('about');
});

// app.get('/', (req, res) => {
//     let salida = {
//         nombre: 'Luis Angel C',
//         edad: 29,
//         lurl: req.url
//     }
//     res.send(salida);
// });

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});
