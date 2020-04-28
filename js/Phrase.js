/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase){
         this.phrase = phrase.toLowerCase();
    }

    /**
    * Display phrase on game board
    */

    addPhraseToDisplay(){
        const ul = document.getElementById('phrase').firstElementChild;
        for(let i = 0; i < this.phrase.length; i++){
            const li = document.createElement('li');
            const letter = this.phrase[i];
            if(letter === ' '){
                li.className = "space";
                li.innerHTML = ' ';
                ul.appendChild(li);
            } else {
                li.className = `hide letter`;
                li.innerHTML = `${letter}`;
                ul.appendChild(li)
            }
        }
    }

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */

    checkLetter(letter){
        return this.phrase.includes(letter);
        
    }


    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */

    showMatchedLetter(letter){
        const phrase_letter = document.querySelectorAll('li[class = "hide letter"]');
        for(let i = 0; i < phrase_letter.length; i++){
            if(letter === phrase_letter[i].innerText){
                phrase_letter[i].classList.remove('hide');
                phrase_letter[i].classList.add('show');
            } 
        }
    }

    resetPhrase(){
        const ul = document.getElementById('phrase');
        ul.innerHTML = '<ul></ul>'
    }
}

