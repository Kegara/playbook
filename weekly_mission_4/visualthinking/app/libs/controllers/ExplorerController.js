const ExplorerService =require("../services/ExplorerService");

class ExplorerController {
    static getAllExplorers() {
        const Reader = require("../utils/Reader");
        const explorers = Reader.readJsonFile("explorers.json");
        return explorers;
    }
    static getEmailsOfCertifiedExplorers() {
        //Get the amount of explorers on requested mission
        const explorersOnMission = ExplorerService.getEmailsOfCertifiedExplorers(this.getAllExplorers());
        return explorersOnMission;
    }
    static getExplorersWithCreditsGreaterThan(ammount) {
        
        const explorers = 
        ExplorerService.getExplorersWithCreditsGreaterThan(this.getAllExplorers(),ammount);
        return explorers;
    }
}

module.exports =  ExplorerController;