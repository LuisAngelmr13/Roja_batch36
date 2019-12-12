const express = require ("express");
const {Director, Pelicula } = require("./models/index");

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.post("/director",(req, res)=>{
    const newDirector = Director(req.body);
    newDirector.seve((err, director) => {
        err ? res.status(400).send(err) : status(201).send(director);
    });

});

app.get("/all/director",(req, res) => {
    Director.find().exec()
    .then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err)
        res.status(400).send(err)
    });
});

app.get("/director/:id",(req, res) => {
    const id = req.params.id
    Director.findById(id).exec()
    .then((result) => {
        result 
        ? res.status(result)
        :res.status(400).send({message: "Director not function"});

    }).catch((err) => {
        res.status(400).send(err)
    });
});

app.patch("/director/:id",(req, res) => {
    const id = req.params.id
    Director.findByIdAndUpdate(id,
        {$set: req.body},
        {new: true}).exec()
        .then((result) => {
            res.send(result);
        }).catch((err) => {
            res.status(400).send(err);
        });
});

app.post("/add/premio/:idDirector", (req, res) => {
    const id = req.params.idDirector;
    Director.findByIdAndUpdate(id, { $push: {premio: [req.body.premio] } }, {new: true}).exec()
        .then((result) =>{
            res.status(200).send(result);
        }).catch((err) =>{
            res.status(409).send(err)
        });
});

app.post("/pelicula", (req, res) => {
    const newPelicula = Pelicula(res.body);
    newPelicula .save((err, pelicula) => {
        err ? res.status(400).send(err) : res.status(201).send(pelicula)
    })
})

app.get("/all/pelicula",(req, res) => {
    Pelicula.find().populate("director") .exec()
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
