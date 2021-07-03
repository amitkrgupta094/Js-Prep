// Hard Parts I: How Js code runs.

// Lecture 1: Introduction
/*


  #Topics:
  - JavaScript Principles (How Js runs its code)
  - Callbacks & Higher Order functions
  - Closure
  - OOP: Classes/Prototypes & Asynchronity
  
  
  #Why understanding JS deep is important?
  - You would able to build things using knowledge of atoms. 
  
  
  #Different Levels of Engineers & Technical Communication:
  - Jr Level Engineer: 
    - If they are given a problem and have seen the same tech - 
    They will solve it.
    
  - Mid Level Engineer:
   - Takes a problem and knows how to solve it.
   
  - Senior Level Engineer:
    - Takes a problem, solves it and also enables member of team to understand it and expand on it. [Technical Communication is important.]  
*/


// Lecture 2: Thread of Execution

/*

2 core feature of JavaScript: 

  # Thread of Execution
   - JavaScript goes line by line and runs/execute each line of code, It is called thread of Execution.
   
   
  # Memory:
  - Whenever JavaScript meets something in code that needs to be stored/saved and use it later, It saves them inside of memory. It not only saves variables but also variable that holds function (i.e is a code).
   
*/


/*
 Code Explanation:

Thread of Execution             Memory [Anything that needs saving]
                         |              
[pt1]                    |
output = multiplyBy2(3)  |
                         |      num: 3
                         |.     multiplyBy2: function saved as 
                         |      string in memory
                         |.     output: nothing here yet [pt1]
                         |
                         |
*/
const num = 3;
function multiplyBy2(inputNumber) {
  const result = inputNumber*2;
  return result;
}

const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);


// Lecture 3: Functions
/*

 ## Function
 A function is being run is like some code to run. It creates a brand new
 Execution Context. So we need 2 things -
 1. Thread of Execution
 2. Memory where we store data [Local Memory: stuff available while we are running the function]
 
 ## Function Jargons
   - Parameter is label. Argument is actual value.
   - Function evaluates into a value and returns back to it
 
 ## Global Execution Context
 Main code runs inside of Global Execution Context.
 In JavaScript we can do one thing at a time.
 - So we can have only one thread of execution.
   - GCE or LCE
 
 Check the image.
*/



// Lecture 4: Call stack

/*
 How JS knows what Execution it is currently running?
 - It is a data structure where we save some information.
 - It has something called callstack to track it. the very base of callstack you
 have Global Execution context. All of our code by default sits on GEC.
 - When function runs it creates a LEC and adds it on call stack.
 
 
 3 Core components of JS :
 - Memory to save data
 - Thread of Execution to go through line by line
   - GEC
   - LEC
 - Call Stack to track thread of execution. 
*/
