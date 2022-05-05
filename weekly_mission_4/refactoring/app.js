//include required modules
const Reader = require("./app/libs/utils/Reader");
const ExplorerService = require("./app/libs/services/ExplorerService");
const FizzBuzzService = require("./app/libs/services/FizzBuzzService");
// Part 1 Read json file ===========================
const explorers = Reader.readJsonFile("explorers.json");
// Part 2: Get the quantity of explorers names in node
const explorersInNode = ExplorerService.filterByMission(explorers,"node");
console.log(explorersInNode.length);
// Part4: Get the explorer's usernames in Node
const usernamesInNode = ExplorerService.getExplorersUsernamesByMission(explorers,"node");
console.log(usernamesInNode);
// Part 5: Assign explorer's FizzBuzz value
const explorersInNodeAndFizzTrick = explorersInNode.map((explorer) => FizzBuzzService.applyValidationInExplorer(explorer));
console.log(explorersInNodeAndFizzTrick);