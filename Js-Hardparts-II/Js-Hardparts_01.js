// Section I - Introduction

// Lecture 1: Introduction
/*
  Will Sentance
  - Worked at Icecom, Gem.
  - Runs Codesmith.
  
  
  As Engineer you need to break though blocks.
  
  Things that company look for in capacities:
  - Analytical Problem solving with code.
  - Technical Communication.
  - Engineering best practices and approach.
   - Debugging
   - Code Structure
   - Patience
   - Reference of Documentation
  - Non-technical communication.
  - Language and computer science experience.
  
*/



// Lecture 2: JavaScript Code Execution
/*
 1 - Foundations of JavaScript
 2 - Asynchronous JavaScript
     - callbacks
     - promises
 3 - Iterators
 4 - Generators & Async/await
 
 
 # 1 - Principle of JavaScript:
 - Thread of Execution: parsing and executing the code line after line. It also create Global Execution context, In case of functions , it creates Local Execiution context.
 - Live memory of variables with data (Global memory environment), This memory is called variable environment.
 
 * Context: Where we execute the code.
 * Function definition is treated as a value and can be   saved inside of a variable.
 * Function gets called only when we invoke it via ().
 * When function gets called, function createa new execution context comprising -
     1 - The thread of execution.
     2 - A local memory (variable object) where anything defined in function is stored. (parameter, variable, this).
 * When function finishes apart from stuff that returns out gets garbage collected, deleted.
 * In JavaScript : We can do one task at one time because JS is a single threaded and it is synchronous in nature.
 * Javascript needs to keep track of where it is inside of a code by saving the data inside of: Stack data type. in JavaScript it is called CallStack.
 * Call stack:
   - global() would be at bottom of callstack [always]
   - multiplyBy2(4) will be at top of stack, it removes when function gets finished.
   - multiplyBy2(10) will be at top of stack, it removes when function gets finished.
   - POSH name to add to a stack: push
   - POSH name to remove from a stack : pop
*/


const num = 3;
function multiplyBy2(inputNumber) {
  const result = inputNumber * 2;
  return result;
}

const output = multiplyBy2(4);
const newOutput = multiplyBy2(10);
