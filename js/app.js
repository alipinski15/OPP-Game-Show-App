/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const game = new Game();

//add the ability to click the Start Game button to start. 

const start_button = document.getElementById('btn__reset');
start_button.addEventListener('click', event => game.startGame());

//Add the ability to press the Enter(return) key to start the game. 

document.addEventListener('keyup', (e) => {
    if(e.key === 'Enter'){
        game.startGame();
    }
});

//Creates the ability to click on the onscreen keyboard, or use the keyboard to select letters/

const keys = document.querySelectorAll('.key');

for(let i = 0; i < keys.length; i++){
    keys[i].addEventListener('click', (e) => {
        game.handleInteraction(e.target)
    });
}

for(let j = 0; j < keys.length; j++){
    keys[j].addEventListener('keyup', (e) => {
        if(e.key === keys[j].textContent){
            game.handleInteraction(e.key);
        }
    });

}






