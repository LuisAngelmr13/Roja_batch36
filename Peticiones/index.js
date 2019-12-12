// const request = require("request");

// const POKE_URI = 'https://pokeapi.co/api/v2'


// const getPokeById = id => {
//     request.get(`${POKE_URI}/pokemon/${id}`,(error, response, body)=>{
//         // console.log(response.body);
//         const pokemon = JSON.parse(body).name;
//         const moves = JSON.parse(body).moves;
    
//         const listingMoves = (accumulator, value, index) =>`${accumulator} ${index + 1}.- ${value.move.name} \n`;
        
    
//         const movesString = moves.reduce(listingMoves,`Los movimientos de ${pokemon} son: \n`);
//         console.log('segundo console')
//         return movesString
//     });


// };
// // console.log('console 0')
// console.log(getPokeById(3), 'Primer conosle')


// const getMovesNames = (id) => {
//     request.get(POKE_URI + '/pokemon/' + id,(error, response, body) => {
//         if(response.statusCode === 200){

//             const pokemon = JSON.parse(body);

//             const moves = pokemon.moves;

//             const name = pokemon.name;

//             for (let i = 0; i < moves.length; i++) {
//                 console.log(moves[i].move.name)
//             }

//             console.log(`Estos son los movimientos de ${name}`)

//         }else{
//             console.log(response.statusCode);
//         };
//     });
// };

// getMovesNames(150)

//-------------------------//

// const SWAPI = 'https://swapi.co/api/'

// const request = require ('request')
// const getName = (id) => {
//     request.get ('https://swapi.co/api/people' + id, (error, response, body) =>{
//             // const starwars = JSON.parse (body);
//             // const name = starwars.name;
//             // console.log = (JSON.parse(body).name)
//             console.log (body)

//     });
// };


// getName(1)

//----------------------------//

function getPeliculaByid(idPersonaje){
    request.get(`https://swapi.co/api/people/${idPersonaje}`,(error,response,body)=>{
        if(error) return console.log("error");
        if(response.statusCode === 200){
            const people = JSON.parse(body)
            console.log(people.name)
            

        }
    })
}
