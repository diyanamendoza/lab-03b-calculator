// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { addIt, subtractIt, multiplyIt, divideIt } from './test-utils.js';

const test = QUnit.test;

test('addIt should take in 3 and 5 and return 8', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const numOne = 3;
    const numTwo = 5;
    const expected = 8;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = addIt(numOne, numTwo);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('subtractIt should take in 3 and 5 and return -2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const numOne = 3;
    const numTwo = 5;
    const expected = -2;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtractIt(numOne, numTwo);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('multiplyIt should take in 3 and 5 and return 15', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const numOne = 3;
    const numTwo = 5;
    const expected = 15;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiplyIt(numOne, numTwo);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('divideIt should take in 3 and 5 and return .6', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const numOne = 3;
    const numTwo = 5;
    const expected = .6;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divideIt(numOne, numTwo);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});