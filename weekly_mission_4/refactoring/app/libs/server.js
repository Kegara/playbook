//include express
const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
// Part 1 Read json file ===========================
//Express App  
const app = express();
// for parsing application/json
app.use(express.json());
//port number
const port = 3000;
// HTTP METHODS
app.get("/v1/explorers/:mission", (req, res) => {
    const mission = req.params.mission;
    console.log(`Api Explorers GET ALL requests ${new Date()}`);
    console.log(`Getting explorers on mission ${mission}`);
    //Get the list of explorers on requested mission
    const explorersOnMission = ExplorerController.getExplorersByMission( mission);
    res.status(200).json({mission: mission, explorers: explorersOnMission});
});
app.get("/v1/explorers/amount/:mission", (req, res) => {
    const mission = req.params.mission;
    console.log(`Api Explorers GET request ${new Date()}`);
    console.log(`Getting explorers ammount  on mission ${mission}`); 
    //Get the amount of explorers on requested mission
    const explorersAmountInMission = ExplorerController.getExplorersAmountByMission(mission);
    res.status(200).json({mission: mission, quantity: explorersAmountInMission});
});
app.get("/v1/explorers/usernames/:mission", (req, res) => {
    const mission = req.params.mission;
    console.log(`Api Explorers GET request ${new Date()}`);
    console.log(`Getting explorer usernames on mission: ${mission}`); 
    //Get the list of explorers  usernames on requested mission       
    const usernamesOnNode = ExplorerController.getExplorersUsernamesByMission(mission);
    res.status(200).json({mission: mission, explorers: usernamesOnNode});
});
app.post("/v1/fizzbuzz/:number", (req, res) => {
    console.log(`Api Explorers POST fizzbuzz  ${new Date()}`);
    console.log(`Getting explorer usernames on mission: ${req.params.number}`); 
    //Get the list of explorers  usernames on requested mission       
    const fizzbuzz = ExplorerController.applyValidationInNumber(req.params.number);
    res.status(200).json(fizzbuzz);
});
// Start server

//Iniciamos el servidor de nuestra app
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
