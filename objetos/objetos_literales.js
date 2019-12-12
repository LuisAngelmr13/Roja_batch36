const ayudanteDeSanta = {
    ojos: 2, 
    patas: 4,
    nombre: "Ayudante de santa",
    raza: "Galgo",
    ladrar: function () {
        return "waaaau"
    },
    comer: function(comida){
        if(comida === "croquetas"){
            return "wacala"
        } else {
            return " yomi yomi"
        }
    },
}

const snoopy ={
    ojos: 2, 
    patas: 4,
    nombre: "Ayudante de santa",
    raza: "beagle",
    ladrar: function () {
        return "waaaau"
    },
    comer: function(comida){
        if(comida === "croquetas"){
            return "wacala"
        } else {
            return " yomi yomi"
        }
    },
}

console.log(snoopy.raza);
console.log(ayudanteDeSanta.raza);