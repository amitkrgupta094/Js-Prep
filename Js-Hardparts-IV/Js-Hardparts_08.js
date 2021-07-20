// Section 8 - Function Decoration

// Lecture 1: Function Decoration Introduction
/*
  Functional Decoration:
  - Will says we have HOF where whenever we want a new functionality
    we pass specific function at the time. Problem: We have a placeholder
    and we want to specify a new function.
  - Can I edit body of function after declaration? No.
  - We want to edit function but not build from scratch.
    - Function declaration. It's going to create a new function
      inside which the function we want to edit will be inserted.
      New function will be created that'd be behave differently.
*/

// Can we have a function a backpack, a permanent memory if It did not have

// Once: Limiting the function to be called Once. (Real Example: Tik Tok Toe)
/*
 - It seems that oncify edits the multiplyBy2 but it is not.
 - In reality it creates a new function which has access to closure
   and limits function to runonly once.
 - It is called decorating a function: Creating a brand new function + have backup attached 
   to it.
*/

// Lecture 2: Decorating a Function
// Lecture 3: Invoking a Decorated Function
// Lecture 4: Function Decoration Review
/*
FD:
- Easier to add features.
- Easier to debug.
 Check Pic: section8-oncify-closure.jpg
*/
const oncify = (convertMe) => {
  let counter = 0;
  const inner =  (input) => {
    if(counter === 0) {
      const output = convertMe(input);
      counter++;
      return output;
    }
    return "Sorry";
  }
  return inner;
}

const multiplyBy2 = num => num * 2;

const oncifyMultiplyBy2 = oncify(multiplyBy2);
oncifyMultiplyBy2(10); // 20
oncifyMultiplyBy2(7); // Sorry



// Lecture 5: Partial Application and Currying
// Lecture 6: Partial Application Example
// Lecture 7: Partial Application Clarification
/*
 Scenario:
 We are piping function but one of the function needs to take 2 inputs
 what we can do here?
 
 Solution:
 A function will have one function at backpack that can take 2 inputs.
 One input is prefield.
 
 * Converting arity of function to less Arity.
 * Arity: Number of Inputs it can take.
 * When we use closure , It is not pure. It reduces purity of function.
   But in Fn programming, there is no consequences.
*/

// Known as Partial Application
// Check Pic: section8-partialapplications.jpg
const multiply = (a, b) => a * b;
const prefillFunction (fn, prefilledValue) {
  const inner = (liveInput) => {
    const output = fn(liveInput, prefilledValue);
    return output;
  }
  
  return inner;
}


const multiplyBy2 = prefillFunction(multiply, 2);
const result = multiplyBy2(5);




// Lecture 8: Partial Application Review
/*
 Partial application and Currying
 - In practice we can have a prefill one, two...multiple arguments
   at different times.
 - We can convert (decorate) any function to a 
   function that will accept arguments one by one and only run the function
  in full once it has all the arguments. (Currying)
 - This is a more general version of partial application.
 
 
 Partial application & currying:
 - Easier to add features.
 - More readable
 - Easier to debug.
*/


// Lecture 9: Wrapping Up
/*
 * Functional Programming.
 - closure enables partial application.
*/










