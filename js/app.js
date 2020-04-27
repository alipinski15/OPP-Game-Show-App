/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
// };
// 

// const phrase = new Phrase();
// phrase.addPhraseToDisplay();

// const game = new Game();
// game.startGame();
// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase.phrase);
// phrase.addPhraseToDisplay();

// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

const game = new Game();

const start_button = document.getElementById('btn__reset');

start_button.addEventListener('click', (e) => { 
    e.target = game.startGame();
    
});


