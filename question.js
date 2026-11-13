// question screen that shows the question and answer buttons
let questionPage = (question, answers) => {
    return `
        <div id="question">
            <h1>${question.question}</h1>
            <h2>For ${question.value} points</h2>
            ${answers.map((answer, index) => `
                <button class="answer-btn"
                data-index="${index}">
                ${answer}
                </button>`)
                .join("")}
        </div>
    `;
};