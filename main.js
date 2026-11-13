//the main javascript file that puts all the componenets together
let app = document.getElementById("app");
let score = 0;
let categories = [];
// Background music that plays while a question is on screen
let thinkMusic = new Audio("think.mp3");
thinkMusic.loop = true; 

//Home screen
let goHome = () => {
    app.innerHTML = homePage();
    // Start the music from the beginning
    
    let btn = document.getElementById("play-btn");
    btn.addEventListener("click", goLoading); //should go to loading first then to board
};

// Loading screen: fetches each category one at a time (API allows 1 call per 5 sec)
let goLoading = async () => {
    
    let categoryIds = [9, 10, 11, 12, 13, 14];
    categories = [];
    try {
        for (let i = 0; i < categoryIds.length; i++) {
            app.innerHTML = loadingPage(i + 1, categoryIds.length);
            let category = await fetchCategory(categoryIds[i]);
            categories.push(category);
            if (i < categoryIds.length - 1) {
                await wait(5000);
            }

        }
        thinkMusic.play();
        goBoard();
    } catch (error) {
        console.error(error);
        goError();

    }
    
};

// No more questions left 
let goEnd = (result) => {
    app.innerHTML = endPage(result);
    let againBtn = document.getElementById("play-again-btn");
    againBtn.addEventListener("click", () => {
        result = 0;
        score = 0;
        categories.forEach(category => {
            category.questions.forEach(question => {
                question.used = false;
            });
        });
        goHome();
    });
}

//Board screen
let goBoard = () => {
    // Check if all questions have been answered
    if (categories.every(category => category.questions.every(question => question.used))) {
        goEnd(score);
        return;
    }
    app.innerHTML = boardPage(categories, score);


    
    let squares = document.querySelectorAll("td");
    squares.forEach(square => {
        square.addEventListener("click", (evt) => {
            let cat = Number(evt.target.dataset.cat);
            let row = Number(evt.target.dataset.row);
            let question = categories[cat].questions[row];
            if (question.used) {
                return;
            }
            goQuestion(question);
        });
    });
};

let goError = () => {
    app.innerHTML = errorPage();
    let retryBtn = document.getElementById("retry");
    retryBtn.addEventListener("click", goHome);
}

// this shows the questions with 4 answers.
let goQuestion = (question) => {
    let answers = shuffleAnswer([question.correct, ...question.incorrect]);
    app.innerHTML = questionPage(question, answers);
    let answerButtons = document.querySelectorAll(".answer-btn");
    answerButtons.forEach(answerButton => {
        answerButton.addEventListener("click", () => {
            let isCorrect = answers[Number(answerButton.dataset.index)] === question.correct;
            if (isCorrect) {
                score += question.value;
            }
            question.used = true;
            
            goResult(isCorrect, question.correct);
        });
    });
};


// You just answered the question this is the result 
let goResult = (isCorrect, correctAnswer) => {
    app.innerHTML = resultPage(isCorrect, correctAnswer);
    setTimeout(() => {
        goBoard();
    }, 1000);

};






goHome();