
// this pops up after answering a question and shows if it was correct
let resultPage = (isCorrect, correctAnswer) => {
    return ` 
        <h1>${isCorrect ? "Correct!" : `Incorrect! The correct answer was ${correctAnswer}.`}</h1>
    `
}