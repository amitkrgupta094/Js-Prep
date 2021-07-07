
// Section 2 - Asynchronicity 


// Lecture 1: Introducting Asynchronicity 
/*
  - JavaScript is a single threaded language.
  - JavaScript is synchronous It means it can't move to next line without compeleting the current task.
  - Questions/Curiousity:
    - What if I made an API call that takes 300ms to get the data back ?
    
    
  # Solution 1 does not work but it is based on how JS
  works.
  
  # Goals:
  - Be able to do tasks that take a long time to complete
   e.g. getting data from the server.
  - Continue running our JavaScript code line by line
    without one long task blocking further JavaScript
    eecuting.
  - When our slow task completes, we should be run
    functionality knowing that task is done and 
    data is ready.
  
  Problems Problems [ Conundrum ]
*/



// Solution 1 [Untainable]
// function display(data) {
//   console.log(data);
// }

// const dataFromAPI = fetchAndWait("https://twitter.com/will/tweets/1");

// // ... user can do nothing here
// // .. could be 300ms, could be half a second.
// // In this time we are not allowed not to move ahead in code. they're just clicking and getting nothing

// display(dataFromAPI);
// console.log("Me Later!");



// Lecture 3: Asynchronous Web Browser APIS

/*

Web Browser APIs/Node background threads.
-  To solve these problems we need to bring a whole new world of features from Web Browser APIs/Node background threads.

- These are not JavaScript Features.
- Features[Web Browser APIs]:
    - DOM
    - Console
    - Local storage
    - Database
    - XHR (ability to make api call)
    
Facade :
setTimeout function is a Facade. Javascript has no timer.
Instead creating a new context, it would spin up a web browser feature called Timer. It would pass function and time. We can move up from this line as it delegated on browser.

- Once JS syncrhonous code is done running but in background Timer is still running,after 1000ms Timer is complete and we are able to call printHello. It adds printHello at callstack.
*/


// Solution 2: Asynchronous Web Browser APIS

function printHello(){
  console.log("Hello");
}

setTimeout(printHello, 1000);

console.log("Me first!");



// Lecture 4: Asynchronous Web Browser APIS QnA
/*
 #Facade Function:
  - It looks like JS function but it is not but it spins background work.It does not create any local execution context or anything like that. It's a front/pretend.
  
 # We need strict rules to what would happen if things are mixed up.
*/



// Lecture 5: Calling the outside Worlds
/*
 We are interacting with a world outside of JavaScript
 now - so we need strict rules:
 - I must have finished emptying my call stack of any functionality to be run, and finish running all my 
 global synchronous code, all my code.
 - printHello does not go on callstack but goes on a Callback queue / Task queue. It is queue of functions that are ready to come back at callstack. 
 - To check if callstack is empty? Event Loop keeps checking this.
 
*/

function printHelloAgain() {
  console.log("Hello");
}


function blockFor1Sec(){
  // blocks in the JavaScript thread for 1 second
}

setTimeout(printHello, 0);

blockFor1Sec();

console.log("Me First!");


// Lecture 6: Calling the outside Worlds QnA
/*
 Callback Queue - This is a JavaScript Engine feature.
 Functions are getting referenced here not copied.
 Limit to size of callback queue = Test it out?
 
 Limit of call stack - ?
 
 Anonymous function have no labels but they still have 
 have reference in memory so it is still passing that to   callback queue.
*/




// Lecture 7: Wrapping Up Web Browser APIs
/*
 Problems:
 - No Problems.
 - Our response data is only available in the callback function- callback hell.
 - Maybe it feels little odd to think of passing a function into another function only for it to run much later.
 
 Benefits:
 - Super explicit once you understand how it works under the hood.
*/


// Lecture 8: Asynchronous Exercoses
/*
 - https://en.wikipedia.org/wiki/Pair_programming
 - http://csbin.io/promises
 
 Researcher & Stackoverflower
 - How it works | make it work.
 - As pro engineer we need to be better at it.
 
*/
