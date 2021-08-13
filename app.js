// Import things
import { addIt, subtractIt, multiplyIt, divideIt } from './utils.js';

// Access elements
const numOne = document.getElementById('num1');
const numTwo = document.getElementById('num2');
const addButton = document.getElementById('add-button');
const subtractButton = document.getElementById('subtract-button');
const multiplyButton = document.getElementById('multiply-button');
const divideButton = document.getElementById('divide-button');
const clearButton = document.getElementById('clear-button');
const mathResult = document.getElementById('math-result');
const mathAction = document.getElementById('math-action');
const addCount = document.getElementById('add-count');

// let addCounter = 0;

addButton.addEventListener('click', () => {
  addIt(numOne, numTwo);
  // addCounter++;
  // addCount.textContent = `You have clicked Add ${addCounter} time(s)!`;
})

subtractButton.addEventListener('click', () => {
  subtractIt(numOne, numTwo);
})

multiplyButton.addEventListener('click', () => {
  multiplyIt(numOne, numTwo);
})

divideButton.addEventListener('click', () => {
  divideIt(numOne, numTwo);
})

clearButton.addEventListener('click', () => {
  numOne.value = "";
  numTwo.value = "";
  mathResult.textContent = "";
  mathAction.textContent = "";
})
