function miPrimeraPromesa(numero){
    return new Promise((resolve,reject)=>{
        setTimeout( () => {
            if(numero === 5){
                resolve("Se cumplio la promesa")
            }else{
                reject("No se cumplio la promesa")
            }
        },3000)
    });
}

miPrimeraPromesa(100)
.then((resolve)=>{
    console.log(resolve);
})
.catch((reject)=>{
    console.log(reject);
})