/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
    constructor(){
        this.missed = 0;
        this.phrases = [
            {phrase: "Carpe Diem"},
            {phrase: "Oh captain my captain"},
            {phrase: "Just keep swimming"},
            {phrase: "Youre killin me Smalls"},
            {phrase: "Hang in there"}
            ];
        this.activePhrase = null;
    }

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */

    // createPhrases(){
    //     const phrases = [
    //         {phrase: "Carpe Diem"},
    //         {phrase: "Oh captain my captain"},
    //         {phrase: "Just keep swimming"},
    //         {phrase: "Youre killin me Smalls"},
    //         {phrase: "Hang in there"}
    //     ];
    //     return phrases;
    // }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */

    getRandomPhrase(){
        const random_phrase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[random_phrase];
    }

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */

    startGame(){
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        const phrase = new Phrase(this.activePhrase.phrase);
        phrase.addPhraseToDisplay();
    }
    
    handleInteraction(){
        const keys = document.querySelectorAll('.keyrow button');
        const matched_letter = new Phrase(this.activePhrase.phrase);
        console.log(matched_letter);
        keys.forEach(key => {
            key.addEventListener('click', (e) => {
                if(e.target === matched_letter){
                    console.log('true');
                }
            });
        });
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    
    checkForWin(){
        const hidden = document.querySelectorAll('li[class = "hide letter"]');
        if(hidden.length > 0){
            return true;
        } else {
            return false;
        }
    }

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        if(this.missed === 5){
            const lost = this.checkForWin();
            this.gameOver(lost);
        } else {
            const heart = document.querySelectorAll('#scoreboard li');
            heart.src = 'images/lostheart.png'
            console.log(heart);
        }
    }

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    // gameOver(gameWon) {

    // }

}