const express = require ("express");
const {Publicaciones, Usuarios} = require ("./models1/index");

const app = express ();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.post("/publicaciones",(req, res)=>{
    const newPublicaciones = Publicaciones(req.body);
    newPublicaciones.save((err, publicaciones)=>{
        err
        ?res.status(400).send(err)
        :res.status(201).send(publicaciones);
    });

});

app.get("/all/publicaciones",(req, res) => {
    Publicaciones.find().exec()
    .then(() => {
        res.send(result);
    }).catch((err) => {
        res.status(400).send(err)
    });
});

app.get("/publicacion/:id",(req, res) => {
    const id = req.params.id
    Publicaciones.findById(id).exec()
    .then((result) => {
        result 
        ? res.status(result)
        :res.status(400).send({message: "publicacion not function"});

    }).catch((err) => {
        res.status(400).send(err)
    });
});

app.patch("/publicaciones/:id",(req, res) => {
    const id = req.params.id
    Publicaciones.findByIdAndUpdate(id,
        {$set: req.body},
        {new: true}).exec()
        .then((result) => {
            res.send(result);
        }).catch((err) => {
            res.status(400).send(err);
        });
});

app.post("/usuarios", () =>{
        const newPelicula = Pelicula(res.body);
        newPelicula .save((err, pelicula) => {
            err ? res.status(400).send(err) : res.status(201).send(pelicula)
        });
});

app.get("/all/usuario",(req, res) => {
    Usuario.find().populate("usuario") .exec()
    .then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err)
        res.status(400).send(err)
    });
});

app.listen(3000,()=>{
    console.log("Server on")
});