// Section 6: Async Await

// Lecture 1: Async Await

/*
 - Async/await simplifies all this and finally fixes inversion
 control problem of callbacks.
 - No need of trigger of generator function on the promise resolution.
  (under the hood things remain same though)
  
  Further Reading:
  What is Inversion problem of callbacks? check Will's old course.
  
  
  Memory:
  - Declare an Async Function (New type of function)
  - LM
    - data is defined and it's undefined of now.
    - await fetch(......) 

    
      
      
  
  Code Flow:
   - Invoke createFlow and immediately enter the Execution Context.
   - After 1ms console.log() gets printed "Me First"
   - fetch returns a Promise object inside of JS world {value: .., onfullfilled: []}
   - it also starts an XHR call in background (browser API)
   - once background work is done, it would set value property
   - await keyword throws us out of Local Execution context
   - console log of "Me second"
   - Once background is done and value is set, we are gonna trigger
   onfullfillment array functions.
   - We are gonna trigger the continuation of createFlow by putting
   it on callstack and creating a local execution context.
   - evaluating the data value as hi.
   - await still behaves similar to yield.
*/


async function createFlow(){
 console.log("Me first")
 const data = await fetch('https://twitter.com/will/tweets/1')
 console.log(data);
}
createFlow();
console.log("Me second");


// Lecture 2: Wrapping UP
/*
 - These understanding of CORE concepts are necessary for SR or MID level
 dev.
 - Go deep on JavaScript.
 - Will talks about Codesmith.
*/
