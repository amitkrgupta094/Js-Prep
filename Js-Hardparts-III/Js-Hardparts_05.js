// Section6: Subclassing with Factory Functions

// Lecture 1: Intro to Subclassing and Inheritance
/*
 # Subclassing
  - In JavaScript we can use prototype chain to share knowledge/properties
  down. A core aspect of an OOP approach is inheritnace - passing knowledge
  down.
  - Users:
    - Normal Users
    - Paid Users [have extra property]
  - In JavaScript, methods are not copied to child objects but linked via
   prototype chain. It is more of lookup than inheritance.
*/


// Lecture 2: Create object with Factory Function
/*
  # Factory function approach
  - Thinking other parts of code as a part of a master class
  and customising it to make it work without writing extra code [OOP].
  
*/

function userCreator(name, score) {
  // Object.create to create an empty object
  // Passing userFunctions to share methods at one place.
  // __proto__ links to userFunctions
  // create function is available directly on Old big Function Object
  const newUser = Object.create(userFunctions);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}


// An object having all common functions that
// would be shared with created Objects
userFunctions = {
  sayName: function() {
    console.log("I'm " + this.name);
  },
  increment: function() {
    this.score++;
  }
}

const user1 = userCreator("Phil", 5);
// prototype look up happens for method sayName
user1.sayName(); // "I'm Phil"


// Lecture 3: Create a Sub-Factory Function
/*
 # Sub-Factory Function
  - Creating specific type of User with more stuff.
  - Create an Object paidUser1 which have all propery of 
   user1 with
    - extra property I can add
    - access to functionlaity to its collection of functions
    - access to functionality to user1 collection of functions
    
 Caveates:
  - Will talks how naming of setPrototypeOf is so confusing, it seems
  to set prototype property but in actuality is setting __proto__ 
  property of an Object.
*/
// subclass
function paidUserCreator(paidName, paidScore, accountBalance){
  // use of userCreator to create a new paid user
  const newPaidUser = userCreator(paidName, paidScore);
  
  // __proto__ reference by default to userFunctions
  // so we fix it by making __proto__ reference to paidUserFunctions
  Object.setPrototypeOf(newPaidUser, paidUserFunctions);
  
  // Adding a new bonus property
  newPaidUser.accountBalance = accountBalance;
  return newPaidUser;
}

const paidUserFunctions = {
  increaseBalance: function() {
    this.accountBalance++;
  }
};

// Object.setPrototypeOf(Object, whatEverWewantSetProtoTo)
// We make __proto__ of paidUserFunctions > userFunctions
Object.setPrototypeOf(paidUserFunctions, userFunctions);



// Lecture 4: Creating an object with a Sub-Factory Function
/*
 # Create an Object with a Sub-Factory Functions
 - will explains how this object is created.
*/

const paidUser1 = paidUserCreator("Alyssa", 8, 25);



// Lecture 5: Prototype Lookup
/*
 # Lookup
 - paidUser1.increaseBalance() Lookup
   - check in property inside of paidUser1 [Could not find it]
   - check __proto__ property to paidUserFunctions [finds it]
   
 - paidUser1.sayName() Lookup
   - check in property inside of paidUser1 [Could not find it
   - check __proto__ property to paidUserFunctions [Could not find it]
   - check __proto__ of paidUserFunctions and it finds on userFunctions [finds it]
     
*/

paidUser1.increaseBalance();
paidUser1.sayName(); // "I'm Alyssa"

// Lecture 6: Subclass Review
/*
 # Review [Interlude]
  - Interlude:
    - normally we call a function and this points to object
      on which it is called.
    - We can use built in tools and take control of 
      execution contexts this assignment. "new" keyword
      also controls value of this but these methods will
      able to give us more control over this keyword.
      1. Call
      2. Apply
      
  - Actual Review
    - new keyword actually automates a bunch of stuffs.
    - So implementing subclass in very automated way.
*/

// Lecture 7: Call and Apply
/*
 # Built in tools
 - Call(valueOfThis, agr1, arg2, arg3,...)  []
 - Apply(valueOfThis, [arg1, arg2, arg2] ) []
 
 # Difference between call and apply?
  - Argument passing is different in apply and call.
 
 - this always refers to the object to the left of the dot on
   which the function (method) is being called - unless we override
   that by running the function using .call() or .apply() which lets
   us set the value of this inside of the increment function
   
  - function.call(otherObject);
*/


const obj = {
  num: 3,
  increment: function(){this.num++;}
}


const otherObj = {
  num: 10
}

// Look up process: found increment on obj and we execute it.
// .increment creates a new execution contex
// and sets value of this = obj
// then -> this.num++; -> obj.num++ --> 4
// But think - if we can change value of this here to another object
// we will able to use this functionality on another object which does not have it?
obj.increment(); // obj.num now 4

obj.increment.call(otherObj); // otherObj.num now 11
// obj.increment.apply(otherObj);


