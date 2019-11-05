// #region Const
require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// #endregion

// #region Configuracion Body Parser

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// #endregion


app.get('/', function(req, res) {
    res.json('Hello');
})

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
})

// #region Usuarios

//GET
app.get('/usuario', function(req, res) {
    res.json('Usuario undefined');
});

//POST
app.post('/usuario', function(req, res) {
    let body = req.body;

    if (body.nombre == undefined){
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario.'
        });
    }else{
        res.json({
            persona: body
        }); 
    }

   
});

//PUT
app.put('/usuario/:id', function(req, res) {
    let elID = req.params.id;

    res.json({
        id: elID
    });
});

//DELETE
app.delete('/usuario', function(req, res) {
    res.json('Usuario undefined');
});
// #endregion