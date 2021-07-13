// Section 7: Subclassing with new and call/apply

// Lecture 1: Create an Object with new
/*
 # Constructor method to create objects
 - UserCreator is a function has a object part which has 
   prototype property where we put any functions that
   object created from it will have access it.
   
 - sayName fn is added to prototype.
 - login is added to increment fn to prototype.
 
 user1:
   - creates a new execution context.
   - "new" (i) creates a new empty object and (ii) sets __proto_ to 
      prototype of constructor function.
   - name and score parameter gets argument / values
   - "new" then returns the created object
   -  user1 gets value of object assigned to it.
   - user1.increment() ->  [Prototype Chain Lookup]
     (i) not directly on object 
     (ii) checks on __proto and funds it
*/

function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}

UserCreator.prototype.increment = function() {
  this.score++;
};

UserCreator.prototype.sayName = function() {
  console.log(`My name is ${this.name}`);
}

const user1 = new UserCreator("Phil", 4);
const user2 = new UserCreator("Tim", 5);


user1.sayName();




// Lecture 2: Creating a subclass with a Constructor
/*
 - Create a subclass that have access to all things available
  to UserCreator
*/

// Subclassing
function PaidUserCreator(paidName, paidScore, accountBalance) {
   // with the use of call we call the UserCreator
   // value of this would point to objects created by PaidUserCreator
   // and it will run the code of UserCreator!!!!
   // Brilliant way of using code of other function here
   // this.name = paidName
   // this.score = paidScore
   UserCreator.call(this, paidName, paidScore);
  // UserCreator.apply(this, [paidName, paidScore]);
  this.accountBalance = accountBalance;
}

// We override prototype object property of PaidUserCreator and 
// links it __proto_ to link to prototype of UserCreator
// Note: We could have used setPrototypeOf method but it
// does not create a new object
PaidUserCreator.prototype = Object.create(UserCreator.prototype);


// Add increeaseBalance on prototype prop of PaidUserCreator
PaidUserCreator.prototype.increaseBalance = function() {
  this.accountBalance++;
}




// Lecture 3: using a call method in a Constructor
// Lecture 4: Assigning properties to Instance
/* 
 paidUser1: new PaidUserCreator('Alyssa', 8, 28);
 1.PaidUserCreator:
   - creates a new execution context
   - Set Local memory of this execution context
    - paidName: 'Alyssa'
    - paidScore: 8
    - accountBalance: 25
    - this: {}
 2.new keyword:
   - this gets set to an empty object
   - object's __proto__ gets set to prototype of PaidUserCreator
   - 3 happens (side effect) and add accountBalance
     {
       name: 'Alyssa',
       score: 8,
       accountBalance: 25,
       __proto__: PaidUserCreator.prototype
     }
 
 3.call method:
   - UserCreator.call(this, paidName, paidScore);
     - "this" would be empty object created by new keyword
       of PaidUserCreator. this parameter inside of UserCreator
       here points to created Object created inside of PaidUserCreator
       execution context.
     - call creates a new execution context.
       Local memory:
        - this = value of this created inside of PaidUserCreator
        - name: 'Alyssa'
        - score: 8
     - Run this function with passed argument, add name 
       and score prop to empty object and returns "this" object
     
*/

const paidUser1 = new PaidUserCreator('Alyssa', 8, 25);





// Lecture 5: Prototype Tracing
/*
 - paidUser1.increaseBalance();
   - not inside of paidUser1 property
   - checks inside of __proto (PaidUserCreator.prototype) and finds ir
   
- paidUser1.sayName(); 
  - not in property of paidUser1.
  - not in PaidUserCreator.prototype
  - find it inside of __proto__ of PaidUserCreator.prototype 
    i.e UserCreator.prototype
*/

paidUser1.increaseBalance();
paidUser1.sayName(); // "My name is Alyssa"
