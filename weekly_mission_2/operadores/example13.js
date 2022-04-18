// Ejemplo 13: Uso de findIndex, este metodo regresa la posicion del primer
// elemento que cumpla con la validacion que indiques.
const names = ['Explorer1', 'Explorer2', 'Explorer3']
const result = names.findIndex(name => name.length > 7)
console.log("Ejemplo 13: Primer elemento cuya palabra sea mayor a 7 esta en la posicion " + result)