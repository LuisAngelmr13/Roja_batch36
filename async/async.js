// const hola = (nombre) => {
//     return `Cómo estás, ${nombre}?`;
// };

// const adios = (name) => {
//     return `Hasta luego, ${name}`;
// };


// const ordenSuperior = (callback, name) => {
//     return callback(name);
// };

// console.log(ordenSuperior(adios, 'Yael'));


// console.log(ordenSuperior(10, 2, divide));


// const suma = (num1, num2) => num1 + num2

// const resta = (num1, num2) => num1 - num2;

// const multi = (num1, num2) => num1 * num2;

// const divi = (num1, num2) => num1 / num2;

// const ordenSuperior = (callback, x, y) => callback(x,y);

// console.log(ordenSuperior(multi, 10, 30))
const alumnosPar =  [6,7,8,9,6,4,6,5];
const alumnosImpar = [9,7,8,10,4,5,7];

const media = (calif) => {
    let acc = 0;
    for (let i = 0; i < calif.length; i++) {
        acc += calif[i];   
    };
    return acc / calif.length;
};

const mediana = (calif) => {
    const sortCalif = calif.sort((a,b) => a - b);
    const califLength = sortCalif.length;

    if(califLength % 2 === 0){
        const index1 = Math.floor(califLength / 2);
        const index2 = Math.floor(califLength / 2 + 1);

        const  medianaToPromediar = [sortCalif[index1],sortCalif[index2]];

        return media(medianaToPromediar);
    }else{
        const index = Math.floor(califLength / 2);

        return sortCalif[index];
    };
};

const ordenSuperior = (callback, calif) => callback(calif);


console.log(ordenSuperior(mediana,alumnosPar));