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
    
    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */

    handleInteraction(button){
        button.disabled = 'true';
        const selected_key = button;
        const phrase = this.activePhrase.phrase
        // if(phrase.checkLetter(letter) === true){
        //     console.log(selected_key);
        // }
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    
    checkForWin(){
        const hidden = document.querySelectorAll('li[class = "hide letter"]');
        return hidden.length > 0;
     
    }

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */

    removeLife() {
        this.missed += 1;
        if(this.missed === 5){
            this.gameOver(false);
        } else {
            const heart = document.querySelector('img[src="images/liveHeart.png"]');
            heart.src = 'images/lostheart.png';
        }
    }

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */

    gameOver(gameWon) {
        const overlay = document.getElementById('overlay');
        const game_over_message = document.getElementById('game-over-message');
        if(gameWon){
            game_over_message.innerHTML = "You Won!";
            overlay.classList.add('win');
        } else {
            game_over_message.innerHTML = "Sorry you lost";
            overlay.classList.add('lose');
        }
        overlay.classList.remove('start');
        overlay.style.display = "inherit";
    }
}