// Hard Parts II: Functions & Callbacks

// Lecture 1: Generalized Functions
/*
  # Why even we have a function?
   - Example 1 & Example 2, we made function but it seems to repeating itself, same logic.
   - This breaks DRY principle (DO NOT REPEAT PRINCIPLE). write code once and use it again and again.
   - Parameters (placeholders) mean we don't need to decide what data to run
   our functionality until we run the function.
   - Then provide an actual value ('argument') when we run the function.
   - Higher order function does same here it takes functionality (another function) as parameter and use when we run the function.
   - So you can have data and functionality figured out at runtime which makes function really really ppwerful too.
  
*/


// Example 1: Create a function 10sqaured , takes no input. returns 10*10
function tenSquared(){
  return 10*10;
}


tenSquared(); // 100


// Example 2: Create a function 9sqaured , takes no input. returns 9*9
function nineSquared(){
  return 9*9;
}


nineSquared(); // 81


// Example 3: Generalized Function: 
function squareNum(num){
  return num * num;
}

squareNum(10); // 100
squareNum(9); // 81
squareNum(8); // 64




// Lecture 2: Repeating Functionality
/*
  Will explains how the code runs detailing:
  Memory allocation
  Execution Context and 
  Execution Context tracting via Call Stack.
  
  Check image for more explanation.
*/

function copyArrayAndMulitplyBy2(array) {
  const output = [];
  for(let i = 0; i < array.length; i++) {
    output.push(array[i] * 2);
  }
  return output;
}

const myArray = [1,2,3];
const result = copyArrayAndMulitplyBy2(myArray);
console.log(result); // [2,4,6]



// Lecture 3: Higher Order Function
/*
 Will explains how the code runs detailing:
  Memory allocation
  Execution Context and 
  Execution Context tracting via Call Stack.
  
  Check image for more explanation.
  
  
  HOF: 
  Functions can't be edited. In examples 1,2 we are repeating.
  What we can do here? Pass function as parameter and change it on runtime.
  
  How do we wrap up functionality and it can pass through another function and run it?
  - Use a funciton.
*/

// Example 1
function copyArrayAndDivideBy2(array) {
  const output = [];
  for(let i = 0; i < array.length; i++) {
    output.push(array[i] / 2);
  }
  return output;
}

const myArray2 = [1,2,3];
const result2 = copyArrayAndDivideBy2(myArray2);
console.log(result2); // [0.5, 1, 1.5]


// Example 3
function copyArrayAndAdd3(array) {
  const output = [];
  for(let i = 0; i < array.length; i++) {
    output.push(array[i] + 2);
  }
  return output;
}

const myArray3 = [1,2,3];
const result3 = copyArrayAndAdd3(myArray2);
console.log(result3); // [4, 5, 6]



// Lecture 4: HOF example
/*
  HOF:
  Any function that takes in a function or passes out a function.
  
*/


// Example 1
function copyArrayAndManipulate(array, instructions) {
  const output = [];
  for(let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
}


function multiplyBy2(input) { return input * 3}
function divideBy2(input) { return input / 3}
function addThree(input) { return input + 5}

const result4 = copyArrayAndManipulate(myArray,multiplyBy2);
const result5 = copyArrayAndManipulate(myArray,divideBy2);
const result6 = copyArrayAndManipulate(myArray,addThree);
console.log(result4, result5, result6); // [ 3, 6, 9 ]  [ 0.3333333333333333, 0.6666666666666666, 1 ] [ 6, 7, 8 ]



// Lecture 5: HOF, QnA
/*
  - we do not copy objects & functions but linking to parameter of a function.
  - When for loop was running with let, It does not create an execution context.
*/



// Lecture 6: Callbacks & Higher Order Functions
/*
 Function:
 - In Js function is first class objects aka they have every property that objects have.
   - Can be assigned to variables and properties of other objects [methods]
   - Passed as argument into functions
   - Returned as values from function [Closure]
   
   
   Which is higher order function & callback function?
    - HOF: copyArrayAndManipulate
    - Callback F: multiplyBy2
  
  HOF & Callbacks F:
   - They keep code dry.
   - We can use these to create more declarative code makes it more readbale code.
   - Notion of passing one function to another is base for Asynchronous programming in JS.
*/


// Lecture 7: Arrow functions
/*
  - Arrow function can be less readable.
  - It also create an execution context and everything happens same normal function.
  - Short version function written in Arrow function is fine for legibility.
*/

function multiplyBy2(input) { return input*2; }

// const multiplyBy2 = (input) => { return input*2; }

// const multiplyBy2 = (input) => input*2

const multiplyBy2 = input => input*2

const output = multiplyBy2(3); // 6


// Lecture 8 - Pair Programming
/*
 Pair programming is better.
 QnA: http://csbin.io/callbacks
 Ans: https://github.com/CodesmithLLC/cs-bin-solutions
*/



