
  
const ExplorerService = require("../../../app/libs/services/FizzBuzzService");

describe("FizzBuzzService", () => {
    test("return score", () => {
        const jsonTest ={
            "name": "Woopa8",
            "githubUsername": "ajolonauta8",
            "score": 8,
            "mission": "java",
            "stacks": [
                "elm"
            ]
        };
        const result = ExplorerService.applyValidationInExplorer(jsonTest,"node");
        expect(result.trick).toBe(8);
    });
    test("return BUZZ", () => {
        const jsonTest ={
            "name": "Woopa8",
            "githubUsername": "ajolonauta8",
            "score":5,
            "mission": "java",
            "stacks": [
                "elm"
            ]
        };
        const result = ExplorerService.applyValidationInExplorer(jsonTest,"node");
        expect(result.trick).toBe("BUZZ");
    });
    test("return FIZZ", () => {
        const jsonTest ={
            "name": "Woopa8",
            "githubUsername": "ajolonauta8",
            "score":3,
            "mission": "java",
            "stacks": [
                "elm"
            ]
        };
        const result = ExplorerService.applyValidationInExplorer(jsonTest,"node");
        expect(result.trick).toBe("FIZZ");
    });
    test("return FIZZBUZZ", () => {
        const jsonTest ={
            "name": "Woopa8",
            "githubUsername": "ajolonauta8",
            "score":15,
            "mission": "java",
            "stacks": [
                "elm"
            ]
        };
        const result = ExplorerService.applyValidationInExplorer(jsonTest,"node");
        expect(result.trick).toBe("FIZZBUZZ");
    });
});
