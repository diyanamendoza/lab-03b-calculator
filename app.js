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


// function calculateAnswer () {
//   if (addButton.clicked == true) {
 
//   }
// }

addButton.addEventListener('click', () => {
  let answer = (Number(numOne.value) + Number(numTwo.value));
  mathResult.textContent = `= ${answer}`;
  mathAction.textContent = "+";
})

subtractButton.addEventListener('click', () => {
  let answer = (Number(numOne.value) - Number(numTwo.value));
  mathResult.textContent = `= ${answer}`;
  mathAction.textContent = "-";
})

multiplyButton.addEventListener('click', () => {
  let answer = (Number(numOne.value) * Number(numTwo.value));
  mathResult.textContent = `= ${answer}`;
  mathAction.textContent = "*";
})

divideButton.addEventListener('click', () => {
  let answer = (Number(numOne.value) / Number(numTwo.value));
  mathResult.textContent = `= ${answer}`;
  mathAction.textContent = "/";
})

clearButton.addEventListener('click', () => {
  numOne.value = "";
  numTwo.value = "";
  mathResult.textContent = "";
  mathAction.textContent = "";
})
