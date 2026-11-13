// Fetches one category from Open Trivia DB and returns it
// in the same shape our game uses: { name, questions: [...] }
let fetchCategory = async (categoryId) => {
    let response = await fetch(`https://opentdb.com/api.php?amount=5&category=${categoryId}&type=multiple`);
    let data = await response.json();

    if (data.response_code !== 0) {
        throw new Error(`API error code ${data.response_code} for category ${categoryId}`);
    }

    // Reshape the API's questions into our format
    let questions = data.results.map(q => ({
        question: q.question,
        correct: q.correct_answer,
        incorrect: q.incorrect_answers,
        difficulty: q.difficulty,
        used: false
    }));

    let difficultyRank = { easy: 1, medium: 2, hard: 3 };
    questions.sort((a, b) => difficultyRank[a.difficulty] - difficultyRank[b.difficulty]);

    questions.forEach((question, index) => {
        question.value = (index + 1) * 100;
    });

    return {
        name: data.results[0].category,
        questions: questions
    };
};