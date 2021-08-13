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
    if ((isNaN(Number(numOne.value)) === false) && (isNaN(Number(numTwo.value)) === false)) {
    let answer = (Number(numOne.value) + Number(numTwo.value));
    mathResult.textContent = `= ${answer}`;
    mathAction.textContent = "+";
    }
    else {
        alert('Please enter a number.');
    }
}
  
export function subtractIt (numOne, numTwo) {
    if ((isNaN(Number(numOne.value)) === false) && (isNaN(Number(numTwo.value)) === false)) {
    let answer = (Number(numOne.value) - Number(numTwo.value));
    mathResult.textContent = `= ${answer}`;
    mathAction.textContent = "-";
        }
    else {
        alert('Please enter a number.');
    }
}
  
export function multiplyIt (numOne, numTwo) {
    if ((isNaN(Number(numOne.value)) === false) && (isNaN(Number(numTwo.value)) === false)) {
    let answer = (Number(numOne.value) * Number(numTwo.value));
    mathResult.textContent = `= ${answer}`;
    mathAction.textContent = "*";
        }
    else {
        alert('Please enter a number.');
    }
}
  
export function divideIt (numOne, numTwo) {
    if ((isNaN(Number(numOne.value)) === false) && (isNaN(Number(numTwo.value)) === false)) {
    let answer = (Number(numOne.value) / Number(numTwo.value));
    mathResult.textContent = `= ${answer}`;
    mathAction.textContent = "/";
        }
    else {
        alert('Please enter a number.');
    }
}
  