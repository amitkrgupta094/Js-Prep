// Section 8: Subclassing with class, extends & super

// Lecture 1: Create an Object with a class
/*
 # class
 - Mega approach of creating objects or implementing OOP in js.
 - It is a facade, under the hood things are different.
 
# Code runs:
 - class is just a function + object combo.
 - userCreator: 
    - It has a fn (constructor)
    - It has a {prototype: {sayName: fn, increment: fn}}
 - new userCreator
   - userCreator calls constructor function.
     - creates a new execution gets created
     - Memory
       name: "Phil"
       score: 4
     - new keyword sets value of this with an empty object.
     - it sets proto property of object with prototype of Object fn prototypope.
     - It gets returned to global memory user1.
*/

class userCreator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  
  sayName() {
    console.log("I am " + this.name);
  }
  
  increment(){
    this.score++;
  }
}

const user1 = new userCreator("Phil", 4);
const user2 = new userCreator("Tim", 4);

user1.sayName(); // Look up: (i) don't find on property (ii) finds on __proto__


// Lecture 2: Creating a Subclass with extends

/* extends: It going to do 2 major things
/ 1. links __proto__ of paidUserCreator linked to prototype of
  userCreator's constructor fn prototype.
  
  2.paidUserCreator also have __proto__, 
  it links it to userCreator. Super keyword uses this 
  to call on Parent class.
*/
class paidUserCreator extends userCreator {
  constructor(paidName, paidScore, accountBalance) {
    super(paidName, paidScore);
    this.accountBalance = accountBalance;
  }
  
  increaseBalance() {
    this.accountBalance++;
  }
}


// Lecture 3: Creating an object with a subclass
// Lecture 4: Using super in subclass constructor

/*
  - new PaidUserCreator("Alyssa", 8, 25);
  - PaidUserCreator creates a new execution context
    - Local Memory
      paidName: 'Alyssa'
      paidScore: 8
      accountBalance: 25
      this: not yet here (depends on super call)
          : after super call objects get created in userCreator
          and proto sets up to paidUserCreator.
          : value of this is {name: 'Alyssa', score: 8, __proto__: paidUserCreator.prototype}
          : add accountBalance to this object, {name: 'Alyssa', score: 8,accountBalance: 25 __proto__: paidUserCreator.prototype}
          : return the object (new keyword does it)
    
    - new keyword
      - In class it works a little bit weird: this value will be 
        uninitialised. and we should have a super call that sets 
        or decides value of this.
      - The object created by paidUserCreator does not born in here
        but inside of userCreator. (different than previous implementation)
      - super gets called with arguments
        - (this =) super("Alyssa", 8)
          - Behind the scenes when we call super, it calls Reflect.construct().
          - Reflect.construct(TheFunctionThatGoingToBeCreatingObject, [arguments], TheFunctionWhosePrototypeWewantReturnObjectToPointTo)
          - Reflect.constructr(userCreator, ['Alyssa', 8], paidUserCreator)
      - Note:
        How Reflect.construct finds reference of userCreator?
        because extends added __proto__ property as userClass for
        paidUserCreator.
      - super is same as userCreator so
        new userCreator('Alyssa', 8), but returned out object proto will be paidUserCreator.
  
  # Super:
   - So super refers to userCreator and lets run it and set value of this.
   - new userCreator("Alyssa", 8)
     - Creates a new execution context
     - Local Memory:
       - name: 'Alyssa'
       - score: 8
       - this: {
          name: 'Alyssa',
          score: 8
        __proto__: paidUserCreator.prototype
       }
       - __proto__ does not link to userCreator but paidUserCreator 
    -return this object and set the value of this of PaidUserCreator
     with returned object.
*/
const paidUser1 = new PaidUserCreator("Alyssa", 8, 25);


paidUser1.increaseBalance(); 
paidUser1.sayName();
