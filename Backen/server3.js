const express = require("express");

const app = express();

app.get('/api/', (req, res) =>{
    res.status(200).send({ 'mensaje': 'hola mundo' });
});

app.get('/api/suma', (req, res) => {
    const {num1, num2} = req.requery;
    const resultado = (parseInt(num1)) + (parseInt(num2));
    res.statusCode(200).send({resuelto})
}
