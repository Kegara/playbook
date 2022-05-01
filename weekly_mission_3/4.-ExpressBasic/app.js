const express = require('express') //Instanciamos express
const app = express() //Creamos una "app"
const port = 3000 //Declaramos el puerto que usaremos

app.get('/', (req, res) => res.send('Hello World!')) //Declaramos nuestra primera ruta y su respuestas
app.get('/launchx', (req, res) => res.send('Bienvenidos a mi página'))
app.get('/explorersInNode', (req, res) => {
    const explorer = {
        name:'John',
        msg: 'I need a gun'
    }
    res.send(explorer)
})
app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) //Iniciamos el servidor de nuestra app