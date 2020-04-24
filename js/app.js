/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
// };
// 

// const phrase = new Phrase();
// phrase.addPhraseToDisplay();

const game = new Game();
const randomPhrase = game.getRandomPhrase();
const phrase = new Phrase(randomPhrase.phrase);
phrase.addPhraseToDisplay();