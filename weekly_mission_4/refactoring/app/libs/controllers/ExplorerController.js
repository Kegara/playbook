const ExplorerService = require("../services/ExplorerService");
const FizzBuzzService = require("../services/FizzBuzzService");
const Reader = require("../utils/Reader");
const explorers = Reader.readJsonFile("explorers.json");

class ExplorerController {
    static getExplorersByMission(mission) {
    //Get the list of explorers on requested mission
        const explorersOnMission = ExplorerService.filterByMission(
            explorers,
            mission
        );
        return explorersOnMission;
    }
    static getExplorersAmountByMission(mission) {
    //Get the amount of explorers on requested mission
        const explorersOnMission = ExplorerService.getAmountOfExplorersByMission(
            explorers,
            mission
        );
        return explorersOnMission;
    }
    static getExplorersUsernamesByMission(mission) {
    //Get the list of explorers  usernames on requested mission
        const usernamesOnNode = ExplorerService.getExplorersUsernamesByMission(
            explorers,
            mission
        );
        return usernamesOnNode;
    }
    static applyValidationInNumber(number) {
    //Apply validation in number with fizzbuzz service
        const fizzbuzz = FizzBuzzService.applyValidationInExplorer({
            score: number,
        });
        return fizzbuzz;
    }
    static fizzbuzzfromTelegram(numberToApplyFb) {
    //Apply validation in number with fizzbuzz service
        if (!isNaN(numberToApplyFb)) {
            const fizzbuzzTrick = this.applyValidationInNumber(numberToApplyFb);
            const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick.trick}`;
            return responseBot;
        } else {
            return "Envia un número valido";
        }
    }
}

module.exports = ExplorerController;
