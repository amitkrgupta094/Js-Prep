// Section 4: Promise

// Lecture 1: Promise Introduction
/*
  - setTimeout is an outside function / Facades.
  - Keeping track of setTimeout Facde is hard. can we map it?
  - Promise:
    An Object to that can be modified on future based on a background process.
    It can retrieved via a method on a callback function.
    
  - Mapping
    XHR/Fetch --> Object (Promise) --> Populate Data / Use Data in JS.
    
  ES6 Solution (Promise):
  - Initiate background web browser work and
  - Return a placeholder object (Promise) immediately in Javascript.
  
*/

// Example 1
function printHello() {
  console.log("Hello");
}

function blockFor1Sec() {
  // blocks the JavaScript thread for 1 sec
  
}

setTimeout(printHello, 0);
blockFor1Sec();
console.log("Me First!");

// Example 2
function display() {
  console.log(data);
}



const futureData = fetch('https://twitter.com/will/tweets/1');
futureData.then(display)

console.log("Me first!");



// Lecture 2: Promises Example: fetch
/*
 Code runs:
 Execution context gets created:
 Global Memory:
   display function: fn
   futureData: {value:...., onfullfilled: []}
   
futureData:
fetch does 2 things:
  - half part is consequence of fetch (background process)
  - It creates an Object {value: ..., onfullFilled: []} in JS. onfullfilled is a hidden property. this Object keeps track 
  of data.
  - When data comes back, value property gets set.
 
*/

function display() {
  console.log(data);
}



const futureData = fetch('https://twitter.com/will/tweets/1');
futureData.then(display)

console.log("Me first!");


// Lecture 3: Promises Example: then
/*
 How do we know when data come back, if yes then automatically
 run some code.
 
 - onfullfilled Property: [Array of functions]
  - Inside of this we can put any code which we can trigger when value property gets filled in.
  - then method: JS gives a method which is used to push any function we want to run when we recieve the data.
  - then method is not on the object.
  
*/

// Lecture 4: Web APIs & Promises Example: fetch
/*
 We need to know how our promises-deffered functionality gets back into JavaScript to run.
 
 Asynchronous:
 Out of order code , when background work is done, Javascript will run it.
 
*/


function display() {console.log(data)}
function printHello(){console.log("Hello")}
function blockFor300ms(){/* Blocks JS for 300ms*/}

setTimeout(printHello, 0);



const futureData = fetch('https://twitter.com/will/tweets/1');
futureData.then(display)

blockFor300ms();
console.log("Me first!");


// Lecture 5: Web APIs & Promises Example: then
// Lecture 6: Microtask queue
/*
 Background work: setTimeout, Network Call
 Now say API call data gets back at 270ms
 
 callback Queue is called Task queue.
 There is another queue which is called Microtask queue.
 
 Task Queue: [setTimeout]
 Micro Task Queue: [display]
 
 Which Queue gets first?
 Micro Task Queue gets used first. => display gets put on callstack. Microtask is empty.
 
 Event Loop goes to Task Queue:
 Then it runs printHello.
*/


// Lecture 7: Promise and Asynchronous Q&A
/*
 - behind the scenes value of promise object is not even filled.
 - Micro Task Queue: 
   If I make my own promise created, I can directly add function of promise to Microtask queue.
*/


// Lecture 8: Promises Review
/*
 Problems:
 - 99% of developer have no idea of working under the hood.
 - Developers fail technical interviews.
 
 Benefits:
 - 
 
 
 Promise object:
 It has another internal property called onRejection.
 If we get error it triggers this function.
 futureData.catch()
 
 
 Non Blocking Dynamic Application is based on:
 Web browser API
 Promise
 Event Loop
 Microtask Queue
 Callback Queue
*/


