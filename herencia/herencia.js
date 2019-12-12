class Mascota{
    constructor( patas, nombre){
        this.patas = patas;
        this.cerebro = true;
        this.nombre = nombre;
        Console.log("se creo la mascota");
    }
    getnombre(){
        return this.nombre;
    }

}

module.exports = {
    Mascota
}