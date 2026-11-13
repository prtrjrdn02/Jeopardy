
// Returns a Promise that finishes after ms milliseconds
let wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
// returns a new array of the answers randomized
function shuffleAnswer(answers) {
    let remaining = [...answers];
    let shuffled = [];
    // Returns a Promise that finishes after ms milliseconds
    
    while (remaining.length > 0) {
        let randomIndex = Math.floor(Math.random() * remaining.length);
        shuffled.push(remaining.splice(randomIndex, 1)[0]);
    }
    return shuffled;
}

