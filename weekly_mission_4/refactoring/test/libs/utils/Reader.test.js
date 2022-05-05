const fs = require("fs");
class Reader {
    // Part 1 Read json file ===========================
    static readJsonFile(filePath) {
        const rawdata = fs.readFileSync(filePath);
        const explorers = JSON.parse(rawdata);
        return explorers;
    }
}
module.exports = Reader;