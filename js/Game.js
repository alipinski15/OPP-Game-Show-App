/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    createPhrases(){
        const phrases = [
            {phrase: "Carpe Diem"},
            {phrase: "Oh captain my captain"},
            {phrase: "Just keep swimming"},
            {phrase: "Youre killin me Smalls"},
            {phrase: "Hang in there"}
        ];
        return phrases;
    }
    getRandomPhrase(){
        const random_phrase = Math.floor(Math.random() * this.phrases.length);
        const pulled_phrase = this.phrases[random_phrase];
        return pulled_phrase;
    }

    startGame(){
        const overlay = document.getElementById('overlay').hidden = 'true';
        const random_phrase = this.getRandomPhrase();
        const phrase = new Phrase(random_phrase.phrase);
        phrase.addPhraseToDisplay();
        this.activePhrase = phrase;
    }
 }

