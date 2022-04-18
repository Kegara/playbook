// Ejemplo 12: Uso de find en una lista de objetos.
const scores = [
    { name: 'A', score: 95 },
    { name: 'M', score: 80 },
    { name: 'E', score: 50 },
    { name: 'M', score: 85 },
    { name: 'J', score: 100 }
]

const score_less_than_80 = scores.find(user => user.score > 80)
console.log("Ejemplo 12: Name score found: " + score_less_than_80.name)