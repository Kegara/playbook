// Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayusculas.
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesFirstThreeLetters = countries.map(country => {
    // El método slice obtiene solo la longitud marcada del string.
    return country.toUpperCase().slice(0, 3)
})

console.log("Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas")
console.log(countriesFirstThreeLetters)