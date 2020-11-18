
export default class Dino { //first step
  constructor (dinoString, dinoArray, hangmanDisplay, guesses, lettersGuessed, freebie) {
    this.dinoString = dinoString;
    this.dinoArray = dinoArray;
    this.hangmanDisplay = [];
    this.guesses = guesses;
    this.lettersGuessed = [];
    this.freebie = freebie;
  }
  splitString(string){//method
    this.dinoString = string.toLowerCase();
    this.dinoArray = this.dinoString.split("");
  }
  dashInput() {
    this.hangmanDisplay= this.dinoString.replace(/\w/g, "-");
  }
  guessLetter(letter) {
    let dinoWord = this.dinoString
    let hangman = this.hangmanDisplay
    let remainingLetters = this.dinoString.length;
    // this.dinoArray.forEach(function(element) { 
    while (remainingLetters>0) { 
      for (let i = 0; i < dinoWord.length; i++) {
        if ( dinoWord[i] === letter) {
          hangman[i] = letter;
          remainingLetters--;
        } 
      } 
    }
  }
}

