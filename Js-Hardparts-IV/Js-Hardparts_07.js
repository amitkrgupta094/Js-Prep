// Section 7: Closure


// Lecture 1: Closure
/*
  # Closure:
  - Esoteric Concept inside of JavaScript.
  - Functions are our units of build with but they
    are limited - they forget everything each time they finish
    running - with no global state.
  - Can we give funcitons some memory ?
    It starts with returning a function
    from a function.
*/


// Lecture 2: Closure Under the Hood.
/*
 Code Execution:
 Check image: Section7-Closure1.jpg
*/

// Exercise I
const functionCreator = () => {
  let counter = 0;
  const add3 = (num) => {
    const result = num + 3;
    return result;
  }
  
  return add3;
}


const generatedFunc = functionCreator();
const result = generatedFunc(2); // 5

// Lecture 3: Closure Clarification
/*
 Passed out things:
 In Js function is an object, these are saved
 inside of heap and not inside of Local/Global memory.
 The link to these actual object/function are saved in Local/
 Global memory.
 
 Heap: a much larger part of the memory that stores 
 everything allocated dynamically, that allows a  
 faster code execution, and protects it from corruption
 and makes the execution faster.
 
 Check Pic: Section7-Closure2.jpg, Section7-aboutHeap.jpg
 
 
*/


// Lecture 4: Inner Function
/*
 Calling a function inside the function call in
 which it was defined.
 Can we say how incrementCounter is able
 to access to counter variable.
 Check Pic: Section7-Closure3.jpg
*/

const outer = () => {
  let counter = 0;
  const incrementCounter = () => {
    counter++;
  }
  incrementCounter();
}


outer();

// Lecture 5: Outer Function
// Lecture 6: Closure Clarification & Review
/*
 neFunction looks for counter value
 - inside of Local Memory X
 - Global Memory X
 In Actuality:
 - When A function is returned from another function
   the returning function gets the function code + something
   else on the back of this function.
 - Backpack of Function: It brings all surrounding data.
 - This actually get saved on function at [[Scope]]
   property/hidden link.
 - Look actually happens this way:
   Local Memory --> Check in backpack --> Global Memory

 - Returning function will have access to those variables
   that is getting used inside of it, if there are any other
   variables around it will get Garbage collected.
   
 - So...Function have two types of data -
   - Single execution data.
   - Persistent data attached to it.
  

  
 - Scope:
  A fancy name for rules that helps use determine -
  if we are running at certain line inside of code,
  what data I've access to that point of time.
  
 - Fancy name for this backpack:
  - Persisten Lexically Scope Referenced Data. (P.L.S.R.O)
  - Closed Over Variable Environment (C.O.V.E)
  - Backpack
  - Posh name "Closure"
  
    
    
  * Lexical Scoping: (When we run newFunction
    we have special type of scope here which helps us to find datat
    that is initially saved when function was defined. This is called lexical scoping.)
    Lexical scope enables the closure.
  * Dynamic Scoping: The data that will be available to 
    depening on where your code runs.
    
  
  # Benifits of Closure:
  - Easier to add features.
  - Easier to debug if you understand under the hood stuffs.
    
  http://csbin.io/functional
*/

const outer = () => {
  let counter = 0;
  const incrementCounter = () => {
    counter++;
  }
  return incrementCounter;
}


const newFunction = outer();
newFunction();
newFunction(); 
