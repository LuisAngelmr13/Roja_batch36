const express = require ("express");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (Request, response) =>{
    console.log("Entreeee");
    response.send({mensaje: "Mi primera respuesta desde el backen"})
});

app.get("/saludo", (req, res) => {
    res.send({mensaje:"hola"});
});

http://localhost:3000/users/21 --> 21 es la variable
app.get("/users/:uid",(req, res)=>{
    console.log(req.params);
    res.send({message: `Usuario a busca: ${req.params.uid}` })
});

app.get("/search",(req, res) => {
    console.log(req.query);
    res.send({messeage: "buscando"})
});

app.post("/users", (req, res) => {
    console.log(req.body)
    res.status(201).send({...req.body, id : 1})
});

app.listen(3000, () => {
    console.log("Server on sport 3000")
});