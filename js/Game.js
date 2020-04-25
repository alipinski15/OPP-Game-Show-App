/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */

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

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */

    getRandomPhrase(){
        const random_phrase = Math.floor(Math.random() * this.phrases.length);
        const pulled_phrase = this.phrases[random_phrase];
        return pulled_phrase;
    }

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */

    startGame(){
        document.getElementById('overlay').style.display = 'none';
        const random_phrase = this.getRandomPhrase();
        const phrase = new Phrase(random_phrase.phrase);
        phrase.addPhraseToDisplay();
        this.activePhrase = phrase;
    }
    
    handleInteraction(){
        const keys = document.querySelectorAll('.keyrow button');
        
    }
}