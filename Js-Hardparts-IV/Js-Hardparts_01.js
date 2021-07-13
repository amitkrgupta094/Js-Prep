// Section 2: JavaScript Principles Review


// Lecture 1: Executing JavaScript Code: A Review
/*
  # What happens when JavaScript (Engine) runs the code?
    When code starts running, we create a 
    global execution context.It does 2 things:
    
    - Thread of execution (Parsing of JavaScript code)
      - Going each line and execute the code. JavaScript have only one thread of
        execution.
    - Live memory of variables with data (Known as a Global Variable Environment)
      even we can save code inside of memory.
      
    Note: 
    1.When a function runs, It creates a Local Execution Context and thread of
    execution weaves into it. It also gets a space/memory where we save data.
    It gets deleted when function stops running.
    
    2. Label and value of the Label. Inside of function,
    these are Parameter and Arguments.
    
    
*/

const num = 3;
const multiplyBy2 = (inputNumber) => {
  const result = inputNumber*2;
  return result;
}

const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);;


// Lecture 2: Call Stack Review
/*
 # Callstack:
 - JavaScript needs to keep track if every single
 function it calls. It is a data structure.
 - Every time function gets called, it gets added/pushed to stack.
 - After function finishes off we pop it off /remove from stack.
 - Whole file of code is wrapped inside of big function called Global function.
*/


// Lecture 3: Functions Review
/*
  # Functions:
  - By example 1 and example 2 we can see that "functionality" is changing
    a little bit and rest of code remains same. this is not very DRY.
    
  - Do we have any solution to this?
    Maybe, HOF.
*/


// Example 1

const copyArrayAndMultiplyBy2(array) => {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2);
  }
  return output;
}
