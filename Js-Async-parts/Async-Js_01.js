// Rethinking Asynchronous JavaScript


// Lecture 1 - Course Introduction
/*
Connect Kyle: @getify.

Agenda:
Async Patterns (Concept --> Use Cases)
- Parallel vs Async
- Callbacks (fundamental unit of async Js)
- Thunks 
- Promises
- Generators/Coroutines
- Event Reactive (observables) [Event Oriented Async Programming]
- CSP (channel-oriented concurrency)

Kyle says there is not silver bullet. you can use these patterns based on scenario,

*/



// Lecture 2 - Parallel vs Async
/*
Parallel vs Async
- Theyre different concepts.
- Non Parallelism:
  Suppose you're in a line for a roalercoaster.
  There are 30 seats but they only let you on.
  Even there is capacity for 30 people but only one person can have ride.
  
- Parallelism:
  All 30 people will get seat and all 30 people will experience the roalercoaster exactly at the same instant.
  In Computer Parallelism it is reperesented with Threads.
  On a CPU there could a bunch of actions (threads) to be happen.
  One core would be doing some operation and exactly at same time another core might be doing another operation.
  
  Machines: 16 Core, 32 Core, 48 Core.
  Even a single browser takes 10+ core to do single task.
  OS has virtual threading that times these operation and makes these parallel as much it can.
  
  it is about optmisation.
  
  
- Asynchrounousy
  Javascript program runs on a single thread. (only one like of Js is running.)
*/



// Lecture 3 - Concurrency
/*
 Concurrency:
 Two higher level tasks happening in same timeframe.
 Higher level operations: can be broken up to micro level tasks.
 
 
 Macrolevel Task A.     Macrolevel Task B
 1                       1(5)
 2                       2(6)
 3                       3(7)
 4
 
 
 - These two operations have to happen at same thread.
 - We will have to worry about contention. 
 
 - Scheduling (Way : 1)
   - Do task A first
   - Then task B second
   
   Kyle says it is bad idea, XHR is also based on it. (now deprecated)
   
 - Scheduling (Way : 2)
   Both tasks happen concurrently
   1
   1(5)
   2
   2(6)
   3(7) - done
   3
   4 - done
   
   Event Loop: 
   The single thread in Javascript is called Event Loop.
   Concurrency programming is to manage these tasks.
   We use Async patterns to solve these kind of problems.
*/
