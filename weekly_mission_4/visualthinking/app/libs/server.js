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
app.get("/v1/explorers", (req,res) => {
    console.log(`Api Explorers GET ALL requests ${new Date()}`);
    //Get the list of all explorers
    const explorers = ExplorerController.getAllExplorers();
    res.status(200).json({explorers: explorers});
});
app.get("/v1/explorers/certificatedEmails/", (req,res) => {
    console.log(`Api Explorers GET request ${new Date()}`);
    //Get certified explorers
    const explorersCertified = ExplorerController.getEmailsOfCertifiedExplorers();
    res.status(200).json({explorers: explorersCertified});
});
app.get("/v1/explorers/credits/500", (req,res) => {
    console.log(`Api Explorers GET request ${new Date()}`);
    //Get explorers with credits greater than 500
    const explorersWithCredits = ExplorerController.getExplorersWithCreditsGreaterThan(500);
    res.status(200).json({ explorers: explorersWithCredits});
});
// Start server

//Iniciamos el servidor de nuestra app
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
