// Section 4 - Iterators


// Lecture 1: Return function inside a Function
/*
Data & Functionality
 - List of collection of data.
 - Fn: We apply Functionality on data.
 
 
 - We go through collection of data, retrive it and do
   something on it.
 - Thinking collection of data as stream of data coming
   to us rather static collection of data.
 
 Automatic Garbage:
 Automatic deleting things that are not necessary.
*/


// Old way: Thinking collection of data as static list of data
// and accessing it and do something on it.
const numbers = [4,5,6];

for(let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}


// New way: A fn when called on data, it starts giving me data.
// We also need to hold on to new information (but function runs , scope gets lost ~ Magic of Closure)

function createNewFunction() {
  function add2(num) {
    return num + 2;
  }
  
  return add2;
}


const newFunction = createNewFunction();
const result = newFunction(3);


// Lecture 2: Return Next Element with a Function
/*
 - When we return a function from another fn, we get so much than just a fn.
 - Will demonstrates how to create a function that holds both an array, the position current within a 'stream' of elements, and the ability to return the next element in the array.
 
*/


// Closure Magic to build an iterator: Data as stream of data points
// inner function has live memory/state/vo of surrounding data: array and i
function createFunction(array) {
  let i = 0;
  function inner() {
    const element = array[i];
    i++;
    return element;
  }
  
  return inner;
}

const returnNextElement = createFunction([14, 15, 16]);

console.log(returnNextElement()); // 14
console.log(returnNextElement()); // 15
console.log(returnNextElement()); // 16
console.log(returnNextElement()); // undefined


// Lecture 3: Iterator Function
/*
 The bond: check notes.
 [[scope]] --> Closure data. [Persisten Lexical Scope referenced data]/ [Closed over variable environment] / Closure
 
 Closure is a concept not just the bagpack.
 
 Lexical/Static Scope:
 A language says where defines me defines what data I will have available.
 
 Iterator Function:
 Any function that gets called it gives me next data is called Iterator Function.
 
 EXample of iterator: for..of.
*/


// Lecture 4: Iterator Excercise: http://csbin.io/iterators
// Soln: https://gist.github.com/aegorenkov/2ae91cabf21223bddca8c5b3ef3ec6f6






