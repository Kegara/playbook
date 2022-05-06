const ExplorerService = require("../../../app/libs/services/ExplorerService");
const jsonTest = [
    {
        id: "6264d5d89f1df827eb84bb23",
        name: "Warren",
        email: "Todd@visualpartnership.xyz",
        credits: 508,
        enrollments: ["Visual Thinking Intermedio", "Visual Thinking Avanzado"],
        previousCourses: 1,
        haveCertification: true,
    },
    {
        id: "6264d5d85cf81c496446b67f",
        name: "Lucinda",
        email: "Sexton@visualpartnership.xyz",
        credits: 500,
        enrollments: ["Visual Thinking Avanzado"],
        previousCourses: 6,
        haveCertification: false,
    },
    {
        id: "6264d5d8cda17de0d2e9f236",
        name: "Fuentes",
        email: "Sharlene@visualpartnership.xyz",
        credits: 499,
        enrollments: ["Visual Thinking Avanzado"],
        previousCourses: 10,
        haveCertification: true,
    },
];
describe("ExplorerService", () => {
    test("filterByCertification", () => {
        const result = ExplorerService.filterByCertification(jsonTest, true);
        expect(result.length).toBe(2);
    });
    test("filterByUncertification", () => {
        const result = ExplorerService.filterByCertification(jsonTest, false);
        expect(result.length).toBe(1);
    });
    test("getEmailsOfCertifiedExplorers", () => {
        const result = ExplorerService.getEmailsOfCertifiedExplorers(jsonTest);
        console.log(result);
        expect(result.length).toBe(2);
    });
    test("getExplorersWithCreditsGreaterThan", () => {
        const result = ExplorerService.getExplorersWithCreditsGreaterThan(
            jsonTest,
            500
        );
        expect(result.length).toBe(1);
    });
});
