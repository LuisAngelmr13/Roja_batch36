// import { fileURLToPath } from "url"

// const lista = [13, 23,24,18,25,18,19,243]
// const listaObj = [ 
//     {nombre: "lola", age: 20},
//     {nombre: "lolo", age: 22},
//     {nombre: "lula", age: 23},
//     {nombre: "lela", age: 24},
//     {nombre: "lala", age: 25} ]

// //    for(let i = 0; i < listaObj.length; i++){
// //     if(listaObj[i].age > 22){
// //         fileURLToPath.push(listaObj[i])
// //     }
// //    }
// //    console.log(filtro);

// const filtro = listaObj.filter((elemento, index, lista)=>{
//     return elemento.age > 22
// });

// console.log(filtro)

const Animalito = [ 
{ nombre: "carlitos"  , especie: "conejo" },    // 0
{ nombre: "esteban"   , especie: "perro" },     // 1
{ nombre: "fabiruchis", especie: "tortuga" },   // 2
{ nombre: "anita"     , especie: "gato" },      // 3
{ nombre: "miranda"   , especie: "conejo" },    // 4
{ nombre: "lucas"     , especie: "conejo" },    // 5
{ nombre: "Horacia"   , especie: "tortuga" }    // 6
];

// for(let i = 0; i < Animalito.length; i++){
//     if(Animalito[i].especie > "conejo"){
//         fileURLToPath.push(Animalito[i])
//     }
// }

const filtro = Animalito.filter((elemento, index, lista)=>{
    return elemento.nombre > "conejo"
});

console.log(filtro);