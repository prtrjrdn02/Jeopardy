// this pops up when you have answered every question and shows your final score
let endPage = (score) => {
    return `
    <h1>Good Game! You scored ${score} points.</h1>
    <button id="play-again-btn">Play Again</button>
    `
};