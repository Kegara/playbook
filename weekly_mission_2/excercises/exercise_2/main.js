const explorers = require('./explorers.js');

const stacks = explorers.map(explorer => explorer.stack);
console.log(`Total stack availables are :` )
stacks.forEach(stack => {
    stack.forEach(language => {
        console.log(`    ${language}`);
    })
})


explorers.forEach(explorer => {
    console.log(`${explorer.name} is from ${explorer.city}`);
    explorer.stack.forEach(stack => {
        console.log(`    Knows ${stack}`);
    })
});

const jsexplorers =explorers.filter(explorer => explorer.stack.filter(stack => stack === "js").length > 0)
console.log(`Explorers who know JS:`)
jsexplorers.forEach(explorer => {
    console.log(`    ${explorer.name}`);
})
const CDMXexplorers = explorers.find(explorer => explorer.city === "CDMX")
console.log(`Explorer from CDMX:`)
console.log(`${CDMXexplorers.name}`);

const TotalCompletedExercises = explorers.reduce((acc, explorer) => acc + explorer.exercises_completed, 0);
console.log(`Total completed exercises: ${TotalCompletedExercises}`);

const FrontendFinished = explorers.some(explorer => explorer.missions.frontend.isFinished);
console.log(`Is any explorer with frontend missison finished? : ${FrontendFinished}`);

const AllFrontendFinished = explorers.every(explorer => explorer.missions.frontend.isFinished);
console.log(`Are all explorers with frontend missison finished? : ${AllFrontendFinished}`);