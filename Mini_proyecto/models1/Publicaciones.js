const mongoose = require ("mongoose");


const publicacionesSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    bio: {
        type: String,
        default: "no-bio"
    },
    nacionalidad:{
        type: String,
        enum: ["MX","US","BR"]
    },
    sexo: {
        type: String,
        enum: ["F","M","SN"]
    },
        publicacion: {
        type: [String]
    },
});

const Publicaciones = mongoose.model("publicaciones",publicacionesSchema);

module.exports = Publicaciones;