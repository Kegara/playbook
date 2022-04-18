// Ejemplo 10: Uso de every nos ayuda a validar todos los elemetnos de una lista.
// Si todos cumplen con la validación que indiques te regresa true, de lo contrario false.
const names = ['Explorer1', 'Explorer2', 'Explorer3', 'Explorar4']
const areAllStr = names.every(name => typeof name === 'string') // every
console.log("Ejemplo 10: Son todos los nombres string: " + areAllStr)