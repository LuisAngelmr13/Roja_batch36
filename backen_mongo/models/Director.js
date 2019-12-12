const mongoose = require ("mongoose");

const directorSchema = new mongoose.Schema({
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
    premio: {
        type: [String]
    },
});


const Director = mongoose.model("director",directorSchema);

module.exports = Director;