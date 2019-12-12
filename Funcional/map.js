const lista = [13, 23,24,18,25,18,19,243]
const listaObj = [ 
    {nombre: "lola", age: 20},
    {nombre: "lolo", age: 22},
    {nombre: "lula", age: 23},
    {nombre: "lela", age: 24},
    {nombre: "lala", age: 25} ]


// for( let i = 0; i <= lista.length; i++){
//     console.log.log([i]);
// }

// lista.map((elemto, index, lista)=>{
//     console.log(listaObj [i].nombre);
// })

// listaObj.map((elemto, index, lista)=>{
//     console.log(elemento.nombre);
// });

const acumulador = []
for (let i = 0; i < listaObj.length; i++){
    console.log(listaObj [i]);
    acumulador.push(listaObj [i].nombre)
}

console.log(acumulador);



