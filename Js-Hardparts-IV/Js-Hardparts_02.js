// Section 3: Higher Order Functions

// Lecture 1: The Problem: Repetitive Functions
/*

 Problem:
 - We have seen from last lecture that we are changing
   'functionality' that is done on array items. Rest of the
   code is same.
   
 - Principle of Functional Programming:
   - DO NOT REPEAT YOURSELF.
   
 - Solution?
   - Pass function as an argument to another function?
*/

const copyArrayAndManipulate = (array, instructions) => {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
}


const myArray = [1,2,3];
const multiplyBy2 = (input) => {
  return input * 2;
}



// Lecture 2: Generalizing Functions
/*
 Generalize Functions:
 - We can have a generalized function so that we pass in our
   specific instruction only when we run the copyArrayAndManipulate
   function.
*/

const result1 = copyArrayAndManipulate(myArray, multiplyBy2);
const result2 = copyArrayAndManipulate(myArray, (num) => num + 3);
const result3 = copyArrayAndManipulate(myArray, (num) => num / 2);


result1;
result2;
result3;

// Lecture 3: Higher Order Functions Review
/*
 Higher Order Functions:
 #Note:
 - In JS functions are first class object that means
   - assigned to a variable
   - assigned to properties of objects
   - passed as arguments into functions
   - returned as values from functions

Callback vs Higher Order Functions:
- HOF: copyArrayAndManipulate is a HOF, The function that takes in the function.
       "Takes in a function or passes out a function."
- Callbacks: multiplyBy2 is a callback function, The function we pass in is a callback function.

Beneifits of HOF:
- Easier to add features.
- More readable.
- Easier to debug.
   
*/

// Lecture 4: Higher Order Functions Pair Programming
/*
 Practice: http://csbin.io/functional [Half Done]
 Navigator and Driver [Pair Programming]
 - One would be Navigator
 - One would be Driver
*/

// Lecture 5: Arrow & Anonymous Functions
/*
 - condensed functions.
 
 Anonymous Function: (inseting functions without a name)
 - A little less readable.
*/

const multiplyBy3 = (input) => {return input*3}
const op = multiplyBy3(3); // 9


// Short hand version
const multiplyBy4 = input => input*4;

 


const myArray = [1,2,3];
const result = copyArrayAndMultiplyBy2(myArray);


// Example 2

const copyArrayAndDivideBy2(array) => {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] / 2);
  }
  return output;
}


const myArray = [1,2,3];
const result = copyArrayAndDivideBy2(myArray);
