const Reader = require("../../../app/libs/utils/Reader");

describe("Reader", () => {
    test("prueba de valores", () => {
        const result = Reader.readJsonFile("explorers.json");
        expect(result.length).toBe(15);
    }
    );
});
