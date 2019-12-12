const request = require("request");

function getPeopleByid(idPersonaje){

    return new Promise((resolve, reject)=>{
        request.get(`https://swapi.co/api/people/${idPersonaje}`,(error, response, body)=>{
            if(error) return console.log("error");
            if(response.statusCode === 200){
                const people = JSON.parse(body)
                resolve (people)
            }else{
                reject("Error buscando el personaje")
            }
        });
    });
}

function getMovieByUrl(url){
    return new Promise((resolve,reject)=>{
        request.get(url,(error,response,body)=>{
            if(response.statusCode === 200){
                resolve (JSON.parse(body))
            }else{
                reject("Error en la peticion de pelicula")
            }
        })

    });
}

getPeopleByid(20)
    .then((respuesta)=>{
        console.log(respuesta.name);
        return getMovieByUrl(respuesta.films[0])
    })
    .then((result)=>{
        console.log(result.title);
    })
    .catch((error)=>{
        console.log(error);
    })