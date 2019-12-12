const request = require ("request");
const URL = "https://pokeapi.co/api/v2/pokemon/"



function getPokemonById(id){
    request.get( URL + id, (err, res, body) => {
        const json = JSON.parse(body);
        console.log(err)
        console.log(res.statusCode)
        console.log(json)
    })
}

getPokemonById(1)