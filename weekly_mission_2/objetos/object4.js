// Ejemplo 4: Objeto con métodos.
const pet = {
    name: "Porofessor",
    // Esta es una función que se guarda como propiedad.
    requestSnak: function(){
        // this.name hace referencia a la propiedad del objeto.
        console.log(`${this.name} te pide una porogalleta`)
    }
}

console.log("Ejemplo 4: Objeto con métodos")
pet.requestSnak()