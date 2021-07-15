// Section 5: Classes & Prototypes



// Class & OOP Introduction
/*
 - A paradigm to structure your code.
 - Prototype Chain: Main feature behind OOP in JS
 - __proto__ & prototypes
 - new keyword, this keyword
 
 Core of JavaScript Code Execution:
 - Save data
 - Runs code on a single threaded, in concurrent manner (have a single thread of execution)
 
 Example: Quiz Game
  - Where is the functionality when I need it?
  - How do I make sure the functionality is only used on the right data!
  
  I want my code to be -
  - Easy to Reason.
  - Easy to add features.
  - Nevertheless efficient and performant.
  
  OOP will allow us to do this.
*/




// Lecture 2: Object DOT notation
/*
user I:
- name: 'Tim'
- score: 3


user II:
- name: 'Stephanie'
- score: 5

And the functionality I need to have for each user:
- increment functionality

How could I store my data and functionality together?

*/


// Objects: store functions with their associated data

// Object literal to have data and function together
const user1 = {
  name: "will",
  score: 3,
  increment: function() {user1.score++;}
};


user1.increment(); 
user1.score; // 4


// Creating user2 user using: dot notation
const user2 = {};
user2.name = "Tim";
user2.score = 6;
user2.increment = function() {
  user2.score++;
}


user2.increment();
user2.score; // 7



// Lecture 3: Factory Function
/*
  - Object.create to create objects
  - One thing to note that by using
    - Literal Object
    - Object dot notation
    - Object.create
    these are not following DRY principle.
    
*/
// Creating user3 using: Object.create
const user3 = Object.create(null);
user3.name = "Eva";
user3.score = 9;
user3.increment = function() {
  user3.score++;
}

user3.increment();
user3.score; // 10

// DRY: Generate objects using a function
// Not used in practice much but still DRY
// function userCreator(name, score) {
//    const newUser = {};
//   newUser.name = name;
//   newUser.score = score;
//   newUser.increment = function() {
//     newUser.score++;
//   }
  
//   return newUser;
// }

// const user4 = userCreator("Willy", 8);
// const user5 = userCreator("Timmy", 5);
// user4.increment();
// user4.score; // 9


// Lecture 4: Factory Function Example
/*
  - Function userCreator gets registered on Global Memory.
  - user1: createsa new Execution context
    - name saved in local memory
    - score saved in local memory
    - newUser saved in local memory - {}
      add new prop here and return the object
      to be save din Global Memory.
    - increment function makes use of closure to have access to newUser variable (The bagpack)
    
  But this approach is efficient as:
   - We can't easily add functionality on objects.
   - We will have copy functionality on every user objects. (Memory is wasted + extra code)
*/
function userCreator(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function() {
    newUser.score++;
  }
  
  return newUser;
}

const user4 = userCreator("Willy", 8);
const user5 = userCreator("Timmy", 5);
user4.increment();
user4.score; // 9



// Lecture 5: Prototype Chain
/*
  prototype chain:
  - store the increment function in just one object and have the interpreter, if it doesn't find function on user1, look up on that object to check
  if it is there.
  
  - use Object.create
  
*/


function userCreator2(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  increment: function() {this.score++;},
  login: function() {console.log("Logged in");}
}

const user6 = userCreator2("Willy2", 18);
const user7 = userCreator2("Timmy2", 15);




// Lecture 6: Prototype Chain example: Prototype 


/*
Link:
- Object.create does create an empty object.
How Object.create links the userFunctionStore:
- under the hood hidden property: __proto__ (dunder score), it links to userFunctionStore.
- when we run user6.increment, Js does not find function then it goes to __proto__ property up the prototype chain to userFunctionStore
*/


// Lecture 7: Prototype Chain Example: Implicit Parameters

/*
  - Object.create(objWillAlwaysBeProto);
  - this hidden property gets shown up in console.
  - implicit parameter: this (one of the use of this keyword)
    - in Local memory we get an implicit parameter.
       this: user6
    
*/
user6.increment(); // creates a new execution context
user6.score; // 19


// Lecture 8: hasOwnProperty Method
/*
where is hasOwnProperty coming from?
Big headline JS Object, it is available for all objects.
Prototype Chain:
- user6 --> userFunctionStore --> Object.prototype (__proto__: null)
*/

user6.hasOwnProperty('score'); // true


// Lecture 8: this
/*
 this:
 Declaraing & Calling a new function inside of our "method" incrememnt 
 
 - value of parameter "this" inside of add1 function would be?
 this: window [default object]
 
 Solution in old days:
 
 1.define a local variable that
  - that: this
 define a local variable inside of fn:
  - this: that
  
  2. call & apply
  - add1.call(this);
 
*/


function userCreator3(name, score) {
  const newUser = Object.create(userFunctionStore2);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore2 = {
  increment: function() {
    function add1() {
      this.score++;
    }
    add1();
    // add1.call(this);
  },
}

const user9 = userCreator3("Amit", 26);
user9.increment(); 
user9.score; // 27


// Lecture 9: Arrow Function Scope & this

/*
 - Arrow function's this assigment is lexically scope.
 - Value of this is set based on around scope.
 - it can be used as an idiom.
*/

function userCreator4(name, score) {
  const newUser = Object.create(userFunctionStore3);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore3 = {
  increment: function() {
    const add1 = () => {this.score++;}
    add1();
  },
}

const user10 = userCreator4("Amit", 26);
user10.increment(); 
user10.score; // 27


// Lecture 10: Prototype Chain Review
/*
Solution 2: Use prototype chain
- More control using this.
- Object.create is not a standard tho but close to
  creating object using standard way.
*/


// Lecture 11: new Keyword
/*
  Solution 3: use new keyword
  It automates so much stuff.
  - It creates a new object & links it to this.
  - It returns the object automatically
  
  Ex2: 
  -Functions are both objects and functions in JS.
  - When JS sees dot on function, it attaches an object to it = fn + Object
  - Function also have a property on function is 
  prototype. It is not an hidden property.by default it is an empty object aka {}.
  - shared functions are put inside of prototype property.
  - Remember in case of Object.create, it was linked to __proto__ property.
*/

// Ex 2
function multiplyBy2(num) {
  return num*2;
}


multiplyBy2.stored = 5;
multiplyBy2(3); // 6

multiplyBy2.stored; // 5
multiplyBy2.prototype; // {}

function makeUser(name, score) {
  this.name = name;
  this.score = score;
}

makeUser.prototype.increment = function() {
  this.score++;
}

const madeUser = new makeUser("Amit Gupta",26);


// Lecture 12: new keyword example
/*
New keyword magic explained:
  - creates an empty object and sets this value.
  - __proto__ points to object property prototype of function.
  - adds property to objects.
  - returns this.
*/
function makeUser2(name, score) {
  this.name = name;
  this.score = score;
}

makeUser2.prototype.increment = function() {
  this.score++;
}

makeUser2.prototype.login = function() {
  console.log("Login!");
}

console.log(makeUser2.prototype); 
// { increment: ƒ (), login: ƒ () }

const madeUser2 = new makeUser2("Ravi",26);
madeUser2.increment();
madeUser2.score; // 27

// Lecture 13: class keyword

/*
Solution 3: new keyword + prototype property
- new keyword automates a lot of work.
- if we run function run without new keyword, this would be global object.
- Capitalise your constructor function.

Solution 4: The class "syntactic" sugar
- check the notes
- It runs function constructor.
- Under the hood it is different than other languages.

*/

class UserCreator {
  constructor(name, score){
    this.name = name;
    this.score = score;
  }
  
  increment() {this.score++;}
  login(){ console.log("login"); }
}

const user1 = new UserCreator("Eva", 9);
user1.increment();
user1.score; // 10

