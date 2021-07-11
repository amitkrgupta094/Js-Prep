// Section 3: Scope & this

// Lecture 1: Calling Prototype Methods.


/*
  # prototype Lookup process:
  - user1.increment();, JS tries to find it on object.
  - JS does not panic and it looks on __proto__ and finds
    the function on UserCreator.prototype
    
  
  # Code Run
  - New Execution context gets created.
  - this.score++ (Posh name for this is implicit parameter.)
  - How it would target selected objects score?
   - this here is totally different than first when object was created.
   - when we call function on object, inside of function local memory.
    this will point to object of left hand of dot.
    i.e this = user1
  - this.score++
    user1.score++
   
  
*/

function UserCreator(name, score){
  this.name = name;
  this.score = score;
}

UserCreator.prototype.increment = function(){
  this.score++;
}


UserCreator.prototype.login = function() {
  console.log("login");
}

const user1 = new UserCreator("Eva", 9);

user1.increment();


// Lecture 2: 
/*
  # Favourite gotcha bug.
   -(Aside) We can override prototype of function inside of function object
   to store all our functions.
   
  # Code run up:
   add1 --> inside of it this points to window object.
   this.score++;
   window.score++; (It is not there)
   
  # Fix?
    - Sol1: var that = this in parent function.
    - Sol2: use call, bind and apply.
    - Sol3: use Arrow function, this gets decided 
      by lexical/static environment.
*/


// this Bug
function UserCreator(name, score){
 this.name = name;
 this.score = score;
}
UserCreator.prototype.increment = function(){
 function add1(){
 this.score++;
 }
 // const add1 = function(){this.score++;}
 add1()
};
UserCreator.prototype.login = function(){
 console.log("login");
};
const user1 = new UserCreator(“Eva”, 9)
user1.increment()





// this Bug fixed
function UserCreator(name, score){
 this.name = name;
 this.score = score;
}
UserCreator.prototype.increment = function(){
 const add1 = () => { this.score++ };
 add1();
};
UserCreator.prototype.login = function(){
 console.log("login");
};
const user1 = new UserCreator(“Eva”, 9);
user1.increment();


// Lecture 3: Solving scope with Arrow function
/*
Arrow function:
- this of Arrow function depends where it is defined.
- lexical/ statical scope means "wheere I'm born decides 
  about me when I get called" aka value of this.

*/


// Lecture 4: Es6 class Keyword

/*
 class:
  - With constructor function we are adding property
  - And adding methods on prototype of this function.
  - class keyword provides us to do two of these things together
    same as some of the classical programming OOP concept 
    (but it's not classical oop.)
  - Will says this syntax makes look JS something else
    It is rather a FACADE function.
*/

class UserCreator{
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  
  increment() {
    this.score++;
  }
  
  login() {
    console.log("login");
  }
}


const user1 = new UserCreator("Eva", 9);
user1.increment();



// Lecture 5: Recap of class ketword
/*
 Recap:
 - user1.increment() happens same as old methods.
 - Classical language OOP implementation is different than JavaScript 
   Prototype oriented programming.
 
 # __proto__
  - In JavaScript all objects (Array, object, functions etc) by default
    get a bunch of functionality, __proto__ is one of them.
*/
