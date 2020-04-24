/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase){
         this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay(){
        const ul = document.getElementById('phrase').firstElementChild;
        const li = document.createElement('li');
        for(let i = 0; i < this.phrase.length; i++){
            const letter = this.phrase[i];
            if(letter === ' '){
                li.className = "space";
                li.innerHTML = ' ';
                ul.appendChild(li);
            } else {
                li.className = `hide letter ${letter}`;
                li.innerHTML = `${letter}`;
                ul.appendChild(li)
            }
        }
        console.log(li);
    }
}

