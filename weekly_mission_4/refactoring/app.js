//include required modules
const Reader = require("./app/libs/utils/Reader");
const ExplorerService = require("./app/libs/services/ExplorerService");
const FizzBuzzService = require("./app/libs/services/FizzBuzzService");
const express = require("express");
// Part 1 Read json file ===========================
const explorers = Reader.readJsonFile("explorers.json");
//Express App  
const app = express();
// for parsing application/json
app.use(express.json());
//port number
const port = 3000;
// HTTP METHODS
app.get("/v1/explorers/:mission", (req, res) => {
    console.log(`Api Explorers GET ALL requests ${new Date()}`);
    console.log(`Getting explorers on mission ${req.params.mission}`);
    //Get the list of explorers on requested mission 
    const explorersOnMission = ExplorerService.filterByMission(explorers,req.params.mission);
    res.status(200).json(explorersOnMission);
});
app.get("/v1/explorers/amount/:mission", (req, res) => {
    console.log(`Api Explorers GET request ${new Date()}`);
    console.log(`Getting explorers ammount  on mission ${req.params.id}`); 
    //Get the amount of explorers on requested mission
    const explorersOnMission = ExplorerService.getAmountOfExplorersByMission(explorers,req.params.mission);
    console.log(explorersOnMission);
    res.status(200).json(explorersOnMission);
});
app.get("/v1/explorers/usernames/:mission", (req, res) => {
    console.log(`Api Explorers GET request ${new Date()}`);
    console.log(`Getting explorer usernames on mission: ${req.params.id}`); 
    //Get the list of explorers  usernames on requested mission       
    const usernamesOnNode = ExplorerService.getExplorersUsernamesByMission(explorers,req.params.mission);
    console.log(usernamesOnNode);
    res.status(200).json(usernamesOnNode);
});
app.post("/v1/fizzbuzz/:number", (req, res) => {
    console.log(`Api Explorers POST fizzbuzz  ${new Date()}`);
    console.log(`Getting explorer usernames on mission: ${req.params.id}`); 
    //Get the list of explorers  usernames on requested mission       
    const fizzbuzz = FizzBuzzService.applyValidationInExplorer({score: req.params.number});
    res.status(200).json(fizzbuzz);
});
//Iniciamos el servidor de nuestra app
app.listen(port, () => console.log(`Example app listening on port ${port}!`));