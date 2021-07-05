// Section 3: Hard Parts

/*
 Closure:
 - It is many important concept based on lexical scope.
 - One of the Esoteric JavaScript concept.
 - Enables powerful pro-level functions like
   - once
   - memoize 
 - Many JavaScript pattern uses Closure. eg: Module pattern.
 - More uses cases
   - Build Iterators
   - Handle partial application
   - Currying 
   - Maintain State in an asynchronous world
 
*/


// Functions get a new memory every run/invocation

function multiplyBy2(inputNumber) {
  const result = inputNumber*2;
  return result;
}


const output = multiplyBy2(7);
const newOutput = multiplyBy2(10);

/*
Explanation:

Functions with memories:
- When function is called , we create a live store of data which is called 
  local memory / variable environment / state for that function's execution context.
  
- When function is done executing, It's local memory is deleted except the returned value..

- But what if our functions could hold on to live data between executions?
This would let our function definitions to have an associated chache/persisted memory.
- But it all starts with us *returning a function from another function*.
  
*/




// Lecture 2 : Returning Functions
/*
 But it all starts with us *returning a function from another function*:
 
*/


// Functions can be returned from other functions in Javascript
/* 
- function definition is a value and can be returned.
-  generatedFunc has nothing to do with createFunction, 
It was one time running result of createFunction.
- JS is like run the code and move on, never touch the line again.
- generatedFunc was the code that was initially multiplyBy2.
- What parameter is holding the value of 3?
  - num. Actually code is inside of global execution context and JS not going inside
   createFunction
- Why we even saving multiplyBy2 inside of function and not define globally?
 - because when function is returned from another function, it gets a bondu 
   property from Javascript we can ask for? that is - ?
- Check the image
*/
function createFunction() {
  function multiplyBy2(num){
    return num+2;
  }
  return multiplyBy2;
}


const generateFunc = createFunction();
const result = generateFunc(3);



// Lecture 3 : Nested Function Scope

/*
- Calling a function in the same function call as it was defined.
- When you define your functions ~ determines what data it has access to
when you call it.
- Cases
    i. when incrementCounter() is run it tries to look for counter inside of its scope, then checked in outer() callstack and found it?
    ii. it is the fact that incrememntcounter saved inside of outer() ?
- Check image
*/

function outer() {
  let counter = 0;
  function incerementCounter(){
    counter++;
  }
  
  incerementCounter();
}



// Lecture 4: Retaining Function Memory
/*
 Calling a function outside of the function call it was defined.
 - When function is returned it somehow have access to counter variable, does it done by scope chain lookup? NO.
 - Truth is when a function is returned ,It also takes the all surrounding data on its backup (a little caveat) aka it copies Local memory of 
 its execution context.
*/
function outer() {
  let counter = 0;
  function incerementCounter(){
    return counter++;
  }
  
  return incerementCounter;
}

const myNameFunction = outer();
myNameFunction(); // 0
myNameFunction(); // 1


// Lecture 5: Function closure
/*
  - When I run my function, function will look into backup than execution contexts.
  - This function checks in this manner -
   - Local Memory
   - Bagpack (Permanent attached to function)
   - Global Memory
   
- How function is able to grab all the data?
 - As soon we declara incrementcounter, JS adds an hidden property
 [[scope]] that links to surrounding data. we can't get access to this data
 in any other way tho unless we call this function.
*/



// Lecture 6: Closure QnA
