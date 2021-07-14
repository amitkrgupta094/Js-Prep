 // Section 4: Map & Reduce


// Lecture 1: Map
/*
 Map:
 - Copy Array and manipulate the Array items.
 - Mapping data from one collection to brand new collection of data.
*/


const map = (array, instructions) => {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  
  return output;
}


const multiplyBy2 = input => input*2;
const result = map([1, 2, 3], multiplyBy2);
result; // [2, 4, 6]



// Lecture 2: Reduce Introduction
/*
  Reduce & Reducer:
  - Will says it is most versatile function.
  - Takes a mental shift to look at problems through reduce lens.
  - Can even enable function composition (will study later)
  
 Assumption:
  - [1, 2, 3],We assumed with map that we are going to take 1st, 2nd and 3rd
   element and make a new array.
  - New Mental Model:
    - [1, 2, 3]
       Here we are doing this: We are taking two things and reducing it to
       one thing. op = operation. This brings idea of reducer.
       [] + op(1) ==> [1]
       [1] + op(2) ==> [1,2]
       [1,2] + op(3) ==> [1,2,3]
  
  Reduction means:
   Making one thing from two things.
  
  Reducer: 
  Passed Callback to Reduce function is called Reducer.
  
  
  How else we could combine and use?
  - Any accumulator (array, string, number)
  - Any combinding logic/code/functionlity (the reducer)
  
  
  Tip:
   - Map is called MapReduce https://en.wikipedia.org/wiki/MapReduce. 
    (TY SAM.) so it is a version of Reduce function.    
*/



// Lecture 3: Reduce Example
/*
 - This function is called Reduce.
 - Reduce from 2 things to inside.
 
 Jargons:
 - Reducer: Rule/HowToFunction we use to reduce 2 things in 1 is called Reducer.
 - Accumulator: An initial point of value.
 - Reduce: HowToFunction and Accumulator combined creates this idea/function called
 reduce.
 
*/
const reduce = (array, howToCombine, buildingUp) => {
  for (let i = 0; i < array.length; i++) {
    buildingUp = howToCombine(buildingUp, array[i])
  }
  
  return buildingUp;
}


const add = (a, b) => a + b;
const summed = reduce([1, 2, 3], add, 0);


summed; // 6



// Lecture 4: Built-In Array Methods
// Interlude
/*
 - Arrays, Objects and Functions have access to methods.
 - Methods are functions that they can use on themselves.
 - Arrays and Functions have object part to it. This object has 
  __proto__ which links to Constructor.prototype 
  [Array.prototype | Function.prototype] which has list of methods.
  {prototype: { push: fn, reduce: fn, filter: fn, map: fn, forEach: fn, flatMap: fn, reduceRight: fn}}
 - All these higher order function 'iterate' through each element of the array and 
 run a function on each.
 - check MDN guides.
*/


const array =[1, 2, 3];
array.push(10); // where this method come from?

// JavaScript version of reduce
const summed2 = [1,2,3].reduce(add, 0); // this function uses "this" internally


// Lecture 5: Filter
// Lecture 6: Chaining Array methods
/*
Filter:
  - It creates a new empty array.
  - Checks every array element against passed callback function.
  
 Chaining:
  - We can chain these Higher Order function - pass the output
   of one as the input of the next.
  - Reason: The output of each HOF, where it's an array,
  has access to all the HOFs(map, filter, reduce) through
  the prototype chain.
*/

// Example 1
const array1 = [1, 2, 3, 4, 5, 6];
const add1 = (a, b) => a + b;
const greaterThan2 = num => num > 2;
const filteredArray = array1.filter(greaterThan2);
filteredArray; // [ 3, 4, 5, 6 ]


// Example 2

const filteredArray2 = array1.filter(greaterThan2).reduce(add1, 0);
filteredArray2; // 18


