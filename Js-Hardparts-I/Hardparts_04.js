// Section 4: Asynchronous Programming

// Lecture 1: Single Threaded Execution Preview
/*
  Async syllabus:
   - Promises
   - Asynchronocity
   - The Event loop
   - Microtask queue, callback queue and Web browser API
   
   
   
   - Global Memory created
   - Function ran
     - New Execution Context is created
     - Local memory created to save Function related data
     - return the value and assign it to global variable.
     
     
  JS is a synchronous language.
   - It finishes one line of code at a time.
   
*/

const num = 3;
function multiplyBy2(inputNumber) {
  const result = inputNumber*2;
  return result;
}

const output =  multiplyBy2(num);
const newOutput = multiplyBy2(10);


// LECTURE 2: ASsynchronicity in JavaScript
/*
  Js runs one code at a time but what would happen
  if we have an API that takes time, say twiiter API
  to get all the tweets?
  
  - Slow function blocks the code in JavaScript.
  
  
  JavaScript is not enough - We need new pieces (some of which aren't JavaScript at all)
  
  Our core JavaScript Engine has 3 things:
  - Thread of execution
  - Memory/variable environment
  - Call stack
  
  We need to add some new components:
  - Web Browser APIs/Node background APIs
  - Promises
  - Event Loop, callback/task queue and micro task queue
*/


// Example 1
const tweets = getTweet("http://twitter.com/will/i");

350ms wait while a request is sent to Twitter HQ
displayTweets(tweets);

// more code to run
console.log("I want to runn!");

// Example 2
function printHello() {
  console.log("hello");
}


// setTimeout(printHello, 1000);
setTimeout(printHello, 0);

console.log("Me First");

// In what order will our console logs appear?


// Lecture 3: Asynchronous Browser Features
/*
 JavaScript has other features coming from Web APIs that it does not have natively?
 - Dev tools
   - Console
 - Web sockets
 - Ability to make Network requests
   - XHR / Fetch
 - HTML DOM (rendering)
   - Document (label for DOM)
 - Timer:
   - setTimeout (label for Timer)
 - Local Storage
   - localStorage
 
 All these features we didn't code. Lets us use these.
 - In JS we get a bunch of Facade Functions that look like
 JavaScript but are JS Facades.
 - Big part in JS that we are doing are not even JavaScript.
*/




// Lecture 4: Web API example
/*
  When Example 1 runs
  - Global execution context is created
  - Global memory is created
    - printHello
  - Facade Function runs independent of JavaScript and does not
  effect its already set rule.
  
*/

// Example 1
function printHello() {
  console.log("hello");
}


setTimeout(printHello, 1000);

console.log("Me First");



// Lecture 5: Web API Rules
/*
 - There should be rule for running the code inside of JS, it makes our code super predictable.
 
 - For Loop do block Js code.
*/

function printHello() { console.log("Hello");}
function blockFor1Sec() {
  // blocks JS thread for 1 sec (not a timer)
}

// Facade Function - Handled by Browser API
setTimeout(printHello, 0);
blockFor1Sec();
console.log("Me First!");



// Lecture 6: Callback Queue & Event Loop
/*
  Callback Queue:
  - callbacks added it here inside of web API.
  - All synchronous code should be done before any FACADE function runs.
  - How JS implement this rule ?
    Checks if Callstack is empty or not? Event Loop.
*/

function printHello() { console.log("Hello");}
function blockFor1Sec() {
  
}

setTimeout(printHello, 0);
blockFor1Sec();
console.log("Me First!");


// Lecture 6: Callback Queue and Event Loop Q&A
/*
  NOTHING
*/


// Lecture 7: Callback hell & Async Exercise
/*
  - These background feature after some time gets some data.
    But this data is only available inside of that callback function. How to overcome that?
    
    Problem with Callbacks - 
    - Callback hell
    - Error handling is not clean.
    
  - http://csbin.io/async
*/
