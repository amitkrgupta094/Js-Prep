// Section 5 - Generators

// Lecture 1: Generators
/*
  - Thinking data as flow/stream of data using Iterators.
  - JavaScript built in iterators are actually objects
    with a next method that when called returns the
    next element from the 'stream/flow' - so lets
    restructure a bit. built in iterator actually produce
    the next element in format: {value: 14, done: false} until
    it iterates over all values and {value: 16, done: true}.
    The flow of data is created using function and not from collection.

*/


// Example 1

function createFunction(array) {
  let i = 0;
  const inner =  {
    // even this function makes closure over i & array
    next: function() {
      const element = array[i];
      i++;
      return element;
    }
  }
  
  return inner;
}

const returnNextElement = createFunction([14, 15, 16]);

console.log(returnNextElement.next()); // 14
console.log(returnNextElement.next()); // 15
console.log(returnNextElement.next()); // 16
console.log(returnNextElement.next()); // undefined



// Lecture 2: Generators Functions with dynamic data
/*
   Generator function:
   Special function that creates data flow.
 
   - Once we start thinking our data as flows 
    (where we can pick of an element one-by-one)
    we can rethink how we produce those flows- 
    JavaScript now lets us produce the flows using a
    function.
    
   Code:
   - createFlow() does not go inside of createFlow execution context.
   - It creates a special object with next function on it.
    {next: fn} (generator object)
   - when next is called on returned object, it calls the createFlow
     and create a new execution context. this function has interment bond
     with createFlow function (the function it was born).
   - yield is something like return statement but it suspends the
     execution context.
   - we can dynamically set what data flows to us (when we run returnNextElement's function)
*/


function *createFlow() {
  yield 14
  yield 15
  yield 16
}


const returnNextElement = createFlow();

console.log(returnNextElement.next()); // { value: 14, done: false }
console.log(returnNextElement.next()); // { value: 15, done: false }
console.log(returnNextElement.next()); // { value: 16, done: false }
console.log(returnNextElement.next()); // { value: undefined, done: true }

/*
 Example 2: Explanation
 - yield num --> yield 10 [yield throws you out of function] which kicks
   out value of 10 outside and newName would not get assigned anything.
 - now whatever value we pass in next call, that will be evaluated
 value of yield + 10 --> 2 hence newNum = 2
 
 - We control what our next data would be.
 Pseudo pausing of Execution context
 - Generator object is = {next: fn} + closure data + [[Generator]]: line number at which function it as. when we run, we put it on callstack and run it from that line.
 
   
*/

// Example 2: Dynamic data
function *createFlow() {
  const num = 10
  const newNum = yield num
  yield 5 + newNum
  yield 6
}


const returnNextElement = createFlow();

console.log(returnNextElement.next()); // 10
console.log(returnNextElement.next(2)); // 7


// Lecture 3: Generator Q&A
/*
 What is this pattern after?
 
 - next returns an object.
 - treat yield same as return statement.
 - [[GeneratorLocation]] is a property on General Object.
 - Q&A: http://csbin.io/iterators
 
*/




// Lecture 4: Introducing Async Generators

/*
 - next controls when we want to go back to the paused thread.
 - We can use this to handle asynchronicity. 
 
*/


// Lecture 5: Async Generators

function doWhenDataRecieved(value) {
  returnNextElement.next(value);
}


function * createFlow() {
  const data = yield fetch("http://twitter.com/will/tweets/1");
  console.log(data);
}

// gives an Generator Object with next method on it
const returnNextElement = createFlow(); 
// It makes a fetch Facade call
// Creates a promise Object
// runs XHR in background 
// Yield kick us out of here, fetch evaluates to an Object {value: .., onfullfillment: []}
const futureData = returnNextElement.next(); // Promise Object

// Value gets updated when background thing is done
// function also gets passed to micro task queue
// and then pushes that function inside of onfullfillment
// yield fetch("http://twitter.com/will/tweets/1") --> hi
// console logs the data 
futureData.then(doWhenDataRecieved);


// Lecture 6: Async Generators Q&A
/*
  - this type of code increases readibility
*/
