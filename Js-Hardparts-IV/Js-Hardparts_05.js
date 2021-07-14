// Section 5: Composition


// Lecture 1: Function Composition
/*
 Reduce, Filter and chaining HOF.
 - Easier to add features.
 - More Readable.
 - Easier to debug. [Things are easy to debug when we know things under the hood.]

 Topics:
 - Function Composition
   - Take individual functions and join them using chaning.
     functions return array, which have access to all the HOFs
     because of prototype chain.
   - What if output is not an array but different value? there is
     a way doing it, define global variables. It is risky as
     people can change global variable. 
     Example 1:
      - Huge dependency tree here.
     
 - Pure Function
 - Point free style
 - Data Mutability
 
*/

// Example 1
// const multiplyBy2 = x => x * 2;
// const add3 = x => x + 3;
// const divideBy5 = x => x / 5;


// const initialResult = multiplyBy2(11);
// const nextStep = add3(initialResult);
// const finalStep = divideBy5(nextStep);

// console.log("finalStep", finalStep); // 'finalStep' 5


// Example 2: Better way (Referential transparency)
/*

 - It relies on our functions being "referentially transparent" -
  we can replace the call to the functions with its return value with no 
  consequence on our app. [https://en.wikipedia.org/wiki/Referential_transparency]
 - Nested Function calls.
 - Not very readable.
 
 Reduce:
 Critical function in functional programming.
*/
// const result2 = divideBy5(add3(multiplyBy2(11)));
// result2; // 5


// Example 3: Reduce [Functional programming]
const multiplyBy2 = x => x * 2;
const add3 = x => x + 3;
const divideBy5 = x => x / 5;

const reduce = (array, howToCombine, buildingUp) => {
  for(let i = 0; i < array.length; i++) {
    buildingUp = howToCombine(buildingUp, array[i]);
  }
  return buildingUp;
}


// Built in Reduce have (input, fn)
// Reducer
const runFunctionOnInput = (input, fn) => {
  return fn(input);
}


const output = reduce([multiplyBy2, add3, divideBy5], runFunctionOnInput, 11 );
output; // 5




// Lecture 2: Function composition with Reduce
/*
  - Inside of Redux we use Reducer the same way.
  - Check image which describes Reduce to implement Function Composition.
*/


// Lecture 3: Function Composition Review
/*
  - We don't use Reduce to directly to implement composition
   - We use compose or pipe.
   - Both of these functions uses reduce internally.
*/

const multiplyBy2 = x => x * 2;
const add3 = x => x + 3;
const divideBy5 = x => x / 5;
const subtract5 = x => x - 5;

const reduce = (array, howToCombine, buildingUp) => {
  for(let i = 0; i < array.length; i++) {
    buildingUp = howToCombine(buildingUp, array[i]);
  }
  return buildingUp;
}


// Built in Reduce have (input, fn)
// Reducer
const runFunctionOnInput = (input, fn) => {
  return fn(input);
}


const output = reduce([
  multiplyBy2, 
   add3,
   divideBy5,
   subtract5
  ], 
  runFunctionOnInput, 11 );
output; // 0






