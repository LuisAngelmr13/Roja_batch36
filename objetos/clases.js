class Perro {
    constructor (color, nombre, patas){
        this.color = color;
        this.nombre = nombre;
        this.patas = patas;
    }

    ladrar(){
        return "waaau"
    }

    getNombre(){
        return "el perro se llama"; $(this.nombre)
    }
}

const perro1 = new Perro ("cafe", "Ayudante de santa", 4);
const perro2 = new Perro ("blanco con negro", "snoopy", 4);
console.log(perro1.getNombre());
console.log(perro2.getNombre());

let Mypenguin = {
    notas : "Un pingüino que no disfruta del frío",
    origin : "Chilly Willy",
    character : "usa un gorro rojo",
};

console.log("Hola, soy un pingüino y mi nombre es +Chilly Willy+ ");

Mypenguin.puedeVolar = false;

console.log(Mypenguin);

Mypenguin.graznar = function() {
    console.log("kaww kaww")
}

console.log(Mypenguin.graznar());

Mypenguin.graznar = function(){
    console.log("hola soy un pinguino y mi nombre es" +this.ChillyWilly+ "!");
}

Mypenguin.character = "usa un gorro rojo";
Mypenguin.saludar();

myPenguin.volar = function () {
    if (this.puedeVolar) {
        console.log("¡Puedo volar!");
    } else {
        console.log("No puedo volar :(");
    }
};

myPenguin.puedeVolar = true;
myPenguin.volar();

let receta = {
    'titulo': 'Mole',
    'porciones': 2,
    'ingredientes': ['canela', 'comino', 'cocoa']
};

console.log(receta.titulo);
console.log('Porciones: ' + receta.porciones);
console.log('Ingredientes:');
for (var i = 0; i < receta.ingredientes.length; i++) {
    console.log(receta.ingredientes[i]);
};

let libros = [
    {
        titulo: 'Cien Años de Soledad',
        autor: 'Gabriel García Márquez',
        leido: true
    },
    {
        titulo: 'Do Androids Dream of Electric Sheep',
        autor: 'Phillip K. Dick',
        leido: false
    }
];

for (let i = 0; i < libros.length; i++) 
{
    let libro = libros[i];
    let libroInfo = libro.titulo + '" por ' + libro.autor;
    if (libro.leido) {
        console.log('Ya has leído "' + libroInfo);
    } else {
        console.log('Aún necesitas leer  "' + libroInfo);
    }
};

// ------------------------
class cuenta {
    constructor(titular, cantidad){
        this.titular = titular
        this.cantidad = cantidad
    }
    ingresar(cantidad){
        if(this.cantidad + cantidad > 900){
            return "estas superando el limite de $900,operacion cancelada"
        }else {
            this.cantidad += cantidad;
            return "Operacion exitosa: Tu saldo es de " + this.cantidad;
        }
    }

    retirar(cantidad){
        if(this.cantidad - cantidad < 10){
            return"no tienes fondos suficiente,operacion cancelada";
        }else{
            this.cantidad -= cantidad;
            return "Has retirado $" + cantidad + ". Tu nuevo saldo es de: " + this.cantidad;
        }
    }
}

let cuenta = new cuenta(mauriciosaavedra,350);
console.log(cuenta.cantidad);

console.log(cuenta.retirar(400));
console.log(cuenta.ingresar(1000));
console.log(cuenta.retirar(400));
