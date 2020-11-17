
export default class Dino { //first step
  constructor (dinoString, dinoArray, guesses, lettersGuessed, freebie) {
    this.dinoString = dinoString;
    this.dinoArray = dinoArray;
    this.guesses = guesses;
    this.lettersGuessed = [];
    this.freebie = freebie;
  }
}