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


export function addIt (numOne, numTwo) {
    return numOne + numTwo;
}
  
export function subtractIt (numOne, numTwo) {
    return numOne - numTwo;
}
  
export function multiplyIt (numOne, numTwo) {
    return numOne * numTwo;
}
  
export function divideIt (numOne, numTwo) {
    return numOne / numTwo;
}
  