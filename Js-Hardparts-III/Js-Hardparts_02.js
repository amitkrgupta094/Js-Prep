// Section 3 : Prototype and new

// Lecture 1: Avoid Duplication with Prototype.
/*
 # Probable Solution to problems with: Objects created by functions
  - Store the functionality in just one object and have the interpreter
    , if it does not find the function on user1, look up to that object
    if it's there. 
    
 # How to make this link?
   - Prototype Chain.
*/

// Example 1: We bundled our functionality at one place
const functionStore = {
  increment: function(){this.score++},
  login: function(){console.log('Youre logged in')}
}


const user1 = {
  name: 'Phil',
  score: 4
}

user1.name; // name is property/key on user1 object
user1.increment; // (undefined not Error!) increment is not!


// Lecture 2: Prototype Walkthrough
/*
 # How do we share functionStore object with other objects?
  - Prototype Chain.
  
 # Solution 1:
  - We passed functionStore to Object.create , When interpreter
    hits that line `user1.increment`, It does not find method on
    user1 and looks up the Prototype Chain to next object and 
    finds .increment 1 level up.

# Code Explanation:
  - Check Graphic Notes on this. 
     
  Execution Context:
    When we hit line `user1 = userCreator("Phil", 5)` > It creates a new
    Local execution context.
  
  
    
 # Tip:
  - When you're reading your code never look up at functions body/innards
  until you see a function execution.
  - Check Pic: Section.2.object.create.png
*/


// Example 2: Object.create

const user1 = Object.create(functionStore);
user1.name = 'Amit';
user.score = 10;
user1; // {}


user1.incement(); // score: 11


// Example 3: Object.create + Function

function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
};


const userFunctionStore = {
  increment: function() {this.score++},
  login:  function() {console.log("You're logged in!")}
};

const user1 = userCreator("Phill", 4);
const user2 = userCreator("Julia", 5);
user1.increment();


// Lecture 3: Prototype Chain
/*
 # Prototype Chain:
   - As soon we pass userFunctionStore to Object.create, It returns
     and empty object and it also adds an hidden property __proto__
     (dunder proto) which links to userFunctionStore.
     
     {
       name: "Phil",
       score: 4,
       __proto__: reference to userFunctionStore
     }
     
     {
       name: "Julia",
       score: 5,
       __proto__: reference to userFunctionStore
     }
    - Look Up Process:
      - user1.increment() ---> JS tries to find user1 in Local Memory
                          ---> JS does not find increment method there.
                          ---> JS has this prototypal nature/feature so when it
                               does not find the method it checks the __protot__
                               property and it finds the increment method there.
        
        
    Note:
    __proto__ is not same as prototype property.
*/


// Lecture 4: new & this keyword
/*
 # new Keyword:
   - Call your function with new keyword and it would automate 3 major things.
     - It will create a new object.
     - It will also return the object.
     - It refers this object with using 'this'.
     
  const = new userCreator("Phil", 4);
 # Another challenge?
    - How do we add functionas so objects can access from it?
*/




// Lecture 5: Functions are Objects & Functions
/*
 # How JavaScript thinks about functions?
  - Functions are both objects and functions i.e multiplyBy2 + {}.
  - Function when gets created it gets object part and a property on
    it called prototype i.e fn + {prototype: {}}. prototype is an object.
  - new keyword makes an automatically bond between __proto__ property to functions
    prototype property which is an object and we put our functions there.
  
*/


function multiplyBy2(num) {
  return num * 2;
}


multiplyBy2.stored = 5;
multiplyBy2(3); // 6

multiplyBy2.stored; // 5
multiplyBy2.prototype; // {}




// Lecture 6: new Keyword & Shared functions with prototype
/*
  
  CheckImage: Section.2.newKeyowrd.png
  Tip: 
  JavaScript kind of encapsulates (not strict as we can access properties) 
  data and functions using Object.
*/

function UserCreator(name, score) {
  this.name = name;
  this.score = score;
};


UserCreator.prototype.increment = function() {
  this.score++;
};

UserCreator.prototype.login = function() {
  console.log("login");
};


const user1 = new UserCreator("Eva", 9);
user1.increment();
user1;


// Lecture 7: Review of new
/*
 # Benefits:
  - Faster to write.
  - Still typical practice in professional code.
  
 # Downsides:
   - 99% of developer have no idea how it works and therefor
    fail interview.
   
   
 # New keyword & Function naming:
  - Without new keyword calling a function, this keyword would refer to window object.
  - Upper case your Functions.
*/



// Misc Code Example: Inner function inside of main function
function UserCreator(name, score){
 this.name = name;
 this.score = score;
}

UserCreator.prototype.increment = function(){
 // here this loses reference to object and points to window object
 function add1(){
 this.score++;
 }
 // const add1 = function(){this.score++;}
 add1()
};

UserCreator.prototype.login = function(){
 console.log("login");
};

const user1 = new UserCreator(“Eva”, 9);



user1.increment();



// Fix: Use Arrow function as this would be set based on lexical scope.
function UserCreator(name, score){
 this.name = name;
 this.score = score;
}
UserCreator.prototype.increment = function(){
 // this points to Object now
 const add1 = () => {this.score++}
 add1()
};
UserCreator.prototype.login = function(){
 console.log("login");
};
const user1 = new UserCreator(“Eva”, 9);
user1.increment();
