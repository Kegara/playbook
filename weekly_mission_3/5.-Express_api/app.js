// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// HTTP METHODS
app.get('/v1/explorers', (req, res) => {
    console.log(`Api Explorers GET ALL requests ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer1 = { id: 1, name: "Carlo" }
    const explorer2 = { id: 4, name: "Carlos" }
    const explorer3 = { id: 3, name: "Carla" }
    const explorer4 = { id: 6, name: "Carliyo" }
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
})

app.get('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorers =[{ id: 1, name: "Carlo" }
    , { id: 4, name: "Carlos" },
    { id: 3, name: "Carla" },
    { id: 6, name: "Carliyo" }]
    const explorer = explorers.find(explorer => explorer.id === parseInt(req.params.id))
    if (!explorer) 
    res.status(404).json({ error: `Explorer with id ${req.params.id} not found` })
    else
    res.status(200).json(explorer)
})

app.post('/v1/explorers', (req, res) => {
    console.log(`Api Explorers POST request ${new Date()}`)
    const requestBody = req.body // Parámetros de un cliente
    res.status(201).json({ message: "Created" })
})

app.put('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers PUT request ${new Date()}`)
    console.log(`Update explorer with id ${req.params.id}`)
    const requestBody = req.body // Parámetros de un cliente
    res.status(200).json({ message: "Updated!" })
})

app.delete('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers DELETE request ${new Date()}`)
    console.log(`Delete explorer with id ${req.params.id}`)
    const requestBody = req.body // Parámetros de un cliente
    res.status(200).json({ message: "Deleted" })
})

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})