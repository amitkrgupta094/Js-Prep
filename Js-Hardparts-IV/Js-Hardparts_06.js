// Section 6: Purity and Immutability
/*
  # Point Free style of writing code:
   Listing out our lines of code (function) by name with each one's consequence
   limited to only affect the next line (functional call/invocation).
   
   Check code of last lecture.
   
 # Pure functions:
 - Functions as tiny units to be continued and run automatically
   must be highly/completely predictable.
 - we rely on using their evaluated results to pass the input to the
   next unit of code (automatically). Any 'side effects' would destroy
   this.
*/

// Side effect example: Running of function also affects global variable.
// hence this function is not a pure function.
// Function should be only acting on Local Memory.
let num = 10;
const add3 = x => {
  num++;
  return x+3;
}

add3(7); // 10



// Lecture 2: Immutability 
/*
 Map Function:
 It takes in global variable but does not mutate it but
 creates a new array and does operation and returns a new array.
 Map does not mutate data.
 Read Immutability Deck.
*/

const array =[1, 2, 3];
const multiplyBy2 = num => num * 2;

const result = array.map(multiplyBy2);
const newResult = array.map(multiplyBy2);



// Lecture 3: Pure Functions & Immutability Review
/*
 PF & IR
 - Easier to add features.
 - More Readable.
 - Easier to debug.
*/

