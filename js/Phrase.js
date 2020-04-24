/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase){
         this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay(){
        const phrase_letters = this.phrase.split(' ');
        console.log(phrase_letters);
    }
}
