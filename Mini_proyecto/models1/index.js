const mongoose = require("mongoose");
const Publicaciones = require("./publicaciones");
const Usuario = require ("./usuario");

const URL = "mongodb+srv://admin:crow1324@cluster0-tyy2o.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(URL,(err) => {
    if (!err) console.log("Conexion exitosa");
    else console.log(err);
});

module.exports = {
    Publicaciones,
    Usuario
}