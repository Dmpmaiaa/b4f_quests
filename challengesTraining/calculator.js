class Calculator {

  #numbersArray;

  constructor(numbersArray, operation) {

    this.#numbersArray = numbersArray.every(el => typeof el === 'number') ? numbersArray : 'Please insert a valid number'

  }


  get numbers(){
    return this.#numbersArray
  }

  /**
   * @param {(arg0: number[]) => void} numbersArray
   */

  set newNumbers(numbersArray){
    this.#numbersArray = numbersArray
  }
}

const myCalc = new Calculator([1, "a"], '*')

console.log(myCalc.numbers);
myCalc.newNumbers
console.log(myCalc.numbers);