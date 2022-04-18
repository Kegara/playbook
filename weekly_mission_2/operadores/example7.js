// Ejemplo 7: Uso de filter para filtrar una lista de elementos.
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesContainingLand = countries.filter(country => country.includes('land'))

console.log("Ejemplo 7: Uso de filter para filtrar una lista de elementos")
console.log(countriesContainingLand)
const countriesEndsByia = countries.filter(country => country.endsWith('y'))
console.log("Ejemplo 7: Países que terminar en y")
console.log(countriesEndsByia)