# Jeopardy

This is a jeopardy game. It will allow players to pick from a table of categories with 5 options in each category ranging from 100 points to 500 points. Each time then click on a box they will be asked a question and then they will answer. Based on how they answer they willl either get the points added to their overal points or wont.

## How to Run
1. npm install
2. npm start

## How to Play
1. run it 
2. press play
3. wait for the questions and categories to load (about 1 minute).
4. Press any number under any category.
5. Press one of the answers to the question that pops up.
6. It will tell you if you got it correct or not and your score will update.
7. keep going until not categories have any numbers underneath.
8. Then you have finished the game and your final score will pop up.
9. Click play agian if you want to play again.

## Features
- questions from Open Trivia DB, sorted by difficulty
- loading screen 
- fetch polyfill using XMLHttpRequest
- error screen if questions fail to load
- presents your score 
- lets you play again 

## Testing the Fetch Polyfill
Uncomment `<script>delete window.fetch;</script>` in index.html and reload.

## File Structure
1. Jeopary folder has all the componenets for the program in it
    2.CSS folder has all CSS files 
    3. js folder has all Javascript files
        4 api.js fetches all categores and questions from Trivia DB and sorts it 
        5. helpers.js shuffles all of the answers to each questions 
        6. main.js ths calls all the js files and puts the whole project together
        7. polyfill.js is used to get the information off the web not using a fetch 
        8. screens folder 
            9. board.js creates the whol jeopardy board 
            10. end.js creates the end of the game page 
            11. error.js creates the error screen when an error has occured
            12. home.js creates the home page to start the game
            13. loading.js created the loading screen for while Javascript is fethcing the data from the web 
            14. question.js creates the question screen for eahc question you pick
            15. result.js creates the page that shows you if you can the answer correct or wrong 
    16. package.json is the recipe for my whole program; tells you what it needs and how it works 
    17. README.md is also a tutorial on the whole jeopardy folder and the program. 
    18. index.html creates the html layout for how the whole project lands on a webpage
    
    


## Author
Porter Jordan