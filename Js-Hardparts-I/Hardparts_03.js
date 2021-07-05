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
/*
  Function Decorator:
  We can pass a function to another function + use closure to
  access the argument passed in the actual function and make
  passed function behave same + more like HOF.
  
  Closure usecases :
  I.  Currying
  II. Partials
  III.Decorators
  
  
  Where does Scope come into play?
  - watch next lesson.
  
  - Learn more about JS debuuger.
  Bagback Data Important Note:
  - Only things that get referenced inside of returning function It would be saved on bagback of function.
  
  Memory Leak:
  Data that gets saved inside of memory but we can't access
  it anymore.
*/



// Lecture 7: Closure Technical Definition & Review
/*
 Local Memory:
 It is also called variable environment.
 
 [[SCOPE]] (bagpack):
 closed over variable environment.
 The data inside of bagpack gets persisted which is liked 
 by scope property.
 P.L.S.R.D.
 
 In Industry the colloqial term is Put the data in the function 
 closure.
 
 
 Scope:
 Rules that say what data is available to me running any
 line of code.
 
 Scope Rule:
 It is called statical or Lexical Scoping. Where I save my
 function determines for the rest of that life, for the life of that function whenever it gets run whatever label it gets what daya it will have access to when that function runs.
 
*/


// Lecture 8: Multiple Closure Instances
/*
 - Every instance of closure gets it owns bagpack.
*/

function outer() {
  let counter = 0;
  function incrementCounter() {
    counter ++;
    console.log(counter);
  }
  
  return incrementCounter;
}


const myNewFunction = outer();
myNewFunction();
myNewFunction();

const anotherFunction = outer();
anotherFunction();
anotherFunction();


// Lecture 9: Practical Applications

/*
  Helper Function: 
   "Once": Any app when we want to lock down a function.
   "Memoize": Say nth prime number, giving our function persistent memory.
   
  Iterators and Generators:
  
  Module Pattern:
  
  
  Async JavaScript:
*/


// Lecture 10: Closure Exercise

// http://csbin.io/closures
