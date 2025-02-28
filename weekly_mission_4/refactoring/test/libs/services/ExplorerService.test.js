const ExplorerService = require("../../../app/libs/services/ExplorerService");
const jsonTest =[
    {
        "name": "Woopa1",
        "githubUsername": "ajolonauta1",
        "score": 1,
        "mission": "node",
        "stacks": [
            "javascript",
            "reasonML",
            "elm"
        ]
    },
    {
        "name": "Woopa2",
        "githubUsername": "ajolonauta2",
        "score": 2,
        "mission": "node",
        "stacks": [
            "javascript",
            "groovy",
            "elm"
        ]
    },
    {
        "name": "Woopa3",
        "githubUsername": "ajolonauta3",
        "score": 3,
        "mission": "node",
        "stacks": [
            "elixir",
            "groovy",
            "reasonML"
        ]
    },
    {
        "name": "Woopa4",
        "githubUsername": "ajolonauta4",
        "mission": "node",
        "score": 4,
        "stacks": [
            "javascript"
        ]
    },
    {
        "name": "Woopa5",
        "githubUsername": "ajolonauta5",
        "score": 5,
        "mission": "node",
        "stacks": [
            "javascript",
            "elixir",
            "elm"
        ]
    },
    {
        "name": "Woopa6",
        "githubUsername": "ajolonauta6",
        "score": 6,
        "mission": "java",
        "stacks": [
            "elm"
        ]
    },
    {
        "name": "Woopa7",
        "githubUsername": "ajolonauta7",
        "mission": "java",
        "score": 7,
        "stacks": [
        ]
    },
    {
        "name": "Woopa8",
        "githubUsername": "ajolonauta8",
        "score": 8,
        "mission": "java",
        "stacks": [
            "elm"
        ]
    },
    {
        "name": "Woopa9",
        "githubUsername": "ajolonauta9",
        "score": 9,
        "mission": "java",
        "stacks": [
            "javascript",
            "elixir",
            "groovy",
            "reasonML",
            "elm"
        ]
    },
    {
        "name": "Woopa10",
        "githubUsername": "ajolonauta10",
        "score": 10,
        "mission": "java",
        "stacks": [
            "javascript",
            "elixir",
            "groovy",
            "reasonML",
            "elm"
        ]
    },
    {
        "name": "Woopa11",
        "githubUsername": "ajolonauta11",
        "score": 11,
        "mission": "node",
        "stacks": [
            "javascript",
            "elixir",
            "groovy",
            "reasonML",
            "elm"
        ]
    },
    {
        "name": "Woopa12",
        "githubUsername": "ajolonauta12",
        "score": 12,
        "mission": "node",
        "stacks": [
            "javascript",
            "elixir",
            "groovy",
            "reasonML",
            "elm"
        ]
    },
    {
        "name": "Woopa13",
        "githubUsername": "ajolonauta13",
        "score": 13,
        "mission": "node",
        "stacks": [
            "javascript",
            "elixir",
            "groovy",
            "reasonML",
            "elm"
        ]
    },
    {
        "name": "Woopa14",
        "githubUsername": "ajolonauta14",
        "score": 14,
        "mission": "node",
        "stacks": [
            "javascript",
            "elixir",
            "groovy",
            "reasonML",
            "elm"
        ]
    },
    {
        "name": "Woopa15",
        "githubUsername": "ajolonauta15",
        "score": 15,
        "mission": "node",
        "stacks": [
            "javascript",
            "elixir",
            "groovy",
            "reasonML",
            "elm"
        ]
    }
] ;
describe("FizzBuzzService", () => {
    test("filterByMission", () => {
        const result = ExplorerService.filterByMission(jsonTest,"node");
        expect(result.length).toBe(10);
    });
    test("getAmountOfExplorersByMission", () => {
        const result = ExplorerService.getAmountOfExplorersByMission(jsonTest,"node");
        expect(result).toBe(10);
    });
    test("getExplorersUsernamesByMission", () => {
        const result = ExplorerService.getExplorersUsernamesByMission(jsonTest,"node");
        expect(result[0]).toBe("ajolonauta1");
    });
});