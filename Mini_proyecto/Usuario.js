const mongoose = require ("mongoose");

const usuarioSchema = new mongoose.Schema ({
    titulo:{
        type: String,
        required: true,
    },
    biograpy:bio,
    publicacion:{
        typer: mongoose.Schema.Types.ObjectId,
        ref: "usuario"
    },
});

const Usuario = mongoose.model("usuario", usuarioSchema);

module.exports = Usuario;