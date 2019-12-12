const{ Mascota } = requiere("./Herencia");

class Perro extends Mascota {
    constructor(raza, color, nombre){
        super(4, nombre)
        console.log("se creo el perro");
        this.raza = raza;
        this.color = color;
    }
    getRaza(){
        return this.raza;
    }
}

module.exports = {
    Perro
}