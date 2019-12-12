const request = require('request');
const URL = "https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/"

function createAuthor(nombre, apellidos, nac, bio, gender, age ){

    return new Promise((resolve, reject)=>{
        const jsonSend = {
            name: nombre,
            last_name: apellidos,
            nacionalidad: nac,
            biography: bio,
            gender,
            age,
        };

    })

    request.post(URL, {form: jsonSend}, (error, response, body) =>{
        console.log(response.statusCode);
        console.log(JSON.parse(body));
    });
}

function updateNameAutohrById(idAuthor, name) {
    const json = (name)
    request.patch(`${URL} ${idAutor}/`,{form: json},)
    console.log(res.statusCode);
}

function getAuthorById(idAuthor){
    request.get()
}



createAuthor("cinta roja 36", "otro batch", "MX", "lorem","M", 30)

//-------------------

