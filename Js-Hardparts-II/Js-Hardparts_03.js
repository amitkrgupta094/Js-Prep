// Section 3 - Promises

// Lecture 1: Introducing Promises
/*
 # Promises: Readability Enhancer
 
 - Special Objects built into JavaScript to get returned
   immediately when we make a call to a web browser API/feature (e.g: fetch) that's set up to return a promise. (not all are)
   
  - Promises act as a placeholder for data we hope to get back from the web browser feature's background work.
  
  - We also attach the functionality we want to defer running until that background work is done (using built in then method).
  
  - Promise objects will automatically trigger that functionality to run.
   - the value returned from the web browser feature's work (eg: the returned data from the server using fetch) will that function's input/argument.
   
   
   
# New type of Facade functions: Fetch are 2 pronged
 - Start the background work
 - Create an object inside of JavaScript immediately    (placeholder object called promise.), It is an object {value: ..., onfullfilment: [...], onrejection: [...]}
*/


// Lecture 2: Promises

/* 
  fetch:
   - starts background work in web browser: 
      xhr / making network call.
       - URL
       - Path
       - Http Verb/Method (GET)
       - Once operation completes, update futureData.value which in
         turn will run function inside of onfullfillment 
         array functions.
       - display function runs.
   - it returns out an object 
     { value: undefined,
      onfullfillment: [.fn.]
     }
   - then:
     - It is written to push function(s) on the onfullfillment array.
       It is not running the fn. Only when value property gets filled in passed function runs.
     (when value gets filled in, fn inside of onfullfillment 
     starts executing.)
   
*/


// Solution3 - Using two-rponged 'facade' functions that both intiate backgeound web browser work and return a placeholder object (promise) immediately in javascript


function display(data) {
  console.log(data);
}


const futureData = fetch('https://twitter.com/will/tweets/1');
futureData.then(display); // Attaches display functionality
console.log("Me First!");


// Lecture 3: Promsies Q&A
/*
 He talks about how promises would be working under the hood
 How const works
*/


// Lecture 4: Promises & Microtask Queue
/*
 # But we need to know how our promise -
 deffered functionality gets back into JavaScript to be run.
 

  # We need a way of queuing up all this deffered functionality.
  
  
 Process -
 Global execution context forms
 Global Memory:
    display function saved
    printHello function saved
    blockFor300ms function saved
    
 Execution:
 %setTimeout :
   - Facade function so It calls web browser feature Timer.
   - It completes at 0 complete, puts printHello on callback queue
     run when all asynchronouse code is ran, this check is done by Event Loop.
  %Fetch:
    - future data starts with undefined.
    - After some time futureData going to be Object provided by Facade function - {value:..., onfullfillment: []}
    - Fetch then starts XHR background work in the background, it needs
    URL, path and Method. It sends request to Twitter. It would take some time. On data gets back it gets assigned to value of Promise object created in JS world. once value is set, Then pushes the function 
    on onfullfilment array. but the passed function is still not ran.
  - display function gets passed on Callback Queue? No, Job queue.
%blockFor300ms - it will sit on callstack for 300ms.
%console.log is done too. 

# setTimeout vs display function, which one would go first?
JavaScript has an additional queue - Microtask (job) queue.

- Traditional Facade --> Callback queue
- Modern Facade --> Microtask queue
- MQ is prefferred over CQ. [Event Loop decides this]
  
  
  
*/


function display(data){console.log(data);}
function printHello(){console.log('Hello!');}
function blockFot300ms() {/* blocks js thread for 300ms with long for loop */}

setTimeout(printHello,0);

const fetchFutureData = fetch('https://twitter.com/will/tweets/1');
fetchFutureData.then(display); // Attaches display functionality
console.log("Me First!");


// Lecture 5: Microtask Queue Q&A
/*
 Find about which queue certain task go : use Spec
 Promise also have status property: pending, resolved, rejected
 value --> triggers onfullfillment functions (then pushes fn here)
 rejected --> triggers onrejection functions (catch pushes fn here)
 
*/



// Lecture 6: Wrapping Promises
/*
 Promised based Model -
  - 99% of developer does not know it works.
  - debugging becomes super-hard.
  
Benifits:
 - Cleaner readable style with pseudo synchronous style code.
 - Nice error handling process
*/



