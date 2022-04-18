// Ejemplo 5: Objeto con método que recibe parametros.
const myPet = {
    name: "Porofessor",
    reciveSnackFrom: function(giverName){
        console.log(`  ${giverName} gives a snack to ${this.name}  `)
    }
}

console.log("Ejemplo 5: Objeto con método que recibe parámetros")
myPet.reciveSnackFrom("Braum")