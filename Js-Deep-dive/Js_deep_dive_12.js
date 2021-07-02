// Section 12 : Prototypes

// Lecture 1: Prototypes
/*
 Prototypes:
 - class system works on this.
 - Objects are built by 'construction calls' (via new)
 - A 'constructor call' makes an object ~"based on"~ its own prototype.
 - In classical language
   - Class is a blueprint
   - Instant is literal thing that is built by it.
   - class related coding fundamentally a "copy operation".
   - Inheritance is also fundamentally a "copy operation".
 - But Javascript does not copy at all. so exact phrase to - 
   A 'constructor call' makes an object linked to its own prototype.
- Linking vs Copying
  - They're different.
 
*/




// Lecture 2 -Prototypal Class
/*
  - adding methods on Prototype object.
*/
function Workshop(teacher) {
  this.teacher = teacher;
}

Workshop.prototype.ask = function(question) {
  console.log(this.teacher, question);
}


var deepJS = new Workshop("Kyle");
var reactJS = new Workshop("Suzy");

deepJS.ask("Is 'prototype' a class?");
// Kyle Is 'prototype' a class?

reactJS.ask("Isn't 'prototype' ugly?");
// Suzy Isn't 'prototype' ugly?



// Lecture 3: The Prototypal Chain

/*
Line 0:
2 things exist:
[O]
Object: Fundamental Function. It has several things on it. It is also namespace with various things on it.

[P]
There is another object: []
There is property name on this Object function which points out to an object [who does not have a name]. On Object.prototype there are bunch of properties to it.

[C]
A property also exist on this "invisible object" which points it to Object function. this property is called Object Constructor.


Line x:
Line 1: 
1.Workshop Function [Ww]
2.There is also an object exist there: Workshop.prototype. [Pp]
3.constructor also exists at line 1. [Cc]

Line 4:
Pp will have method ask on it.


When new is used:
 - An empty object is created. 
 - It links it to Prototype of function Ww.
 - this keyword points to this newly created object and adds teacher property.
 - returns an object
 
Same thing happens in Line 9.

L11:
 does deepJS have ask method? No.
 But there internal invisible linkage (Prototypal chain), it walks up one level and ask Pp if it has the function. this still points to callsite Object.
 
*/


// Lecture 4 - Dunder Prototypes
/*
 - There is no constructor property on deepJs, it goes on Workshop.prototype and it points to Workshop.
 - deepJS is not constructed by Workshop but new keyword but Workshop establishes relationships.
 - deepJS seems to have a property called __proto__ but it is not there.
 it finds it on Workshop.prototype has it? no. It goes to Object.prototype has it but it's a getter function.
*/
function Workshop(teacher) {
  this.teacher = teacher;
}

Workshop.prototype.ask = function(question) {
  console.log(this.teacher, question);
}

var deepJS = new Workshop("Kyle");

deepJS.constructor === Workshop; // true
// dunder proto
deepJS.__proto__ === Workshop.prototype // true
Object.getPrototypeOf(deepJS) === Workshop.prototype; // true



// Lecture 5 - this & prototype Q&A
/*
 - Arrow function do have lexical scope but they don't have this variable.
 - callsite is only thing matters.
 - What happens when you set a dunder proto?
 Technically it is a getter and setter.
 - Regular functions do have prototype property but Arrow function does not.
 - Super keyword is statically bound.
*/



// Lecture 6 : Shadowing Prototypes


// Exercise 1: this is not relative polymorphic regference here
// function Workshop(teacher) {
//   this.teacher = teacher;
// }

// Workshop.prototype.ask = function(question) {
//   console.log(this.teacher, question);
// }

// var deepJS = new Workshop("Kyle");

// deepJS.ask = function(question) {
//   this.__proto__.ask.call(this.question.toUpperCase());
// }

// deepJS.ask = function(question) {
//   this.ask(this.question.toUpperCase());
// }

// deepJS.ask("Oops, is this infinite recursion?");




// Example 2: how to solve recursion issue: use dunder proto
// Explicit pseudo relative polymorphis,
// this.__proto__ is Workshop.prototype
// this.question, this points to deepJS
// function Workshop(teacher) {
//   this.teacher = teacher;
// }

// Workshop.prototype.ask = function(question) {
//   console.log(this.teacher, question);
// }

// var deepJS = new Workshop("Kyle");

// // equivalent to super
// deepJS.ask = function(question) {
//   this.__proto__.ask.call(this.question.toUpperCase());
// }


// deepJS.ask("Is this fake polymorphism?");




// Lecture 7: Prototypal Inheritance
/*
 Object.create does 2 things -
 1. creates brand new empty object
 2. It links it to another object
*/
function Workshop(teacher) {
  this.teacher = teacher;
}

Workshop.prototype.ask = function(question){
  console.log(this.teacher, question);
}

function AnotherWorkshop(teacher) {
  Workshop.call(this, teacher);
}


AnotherWorkshop.prototype = Object.create(Workshop.prototype);
AnotherWorkshop.prototype.speakUp = function(msg) {
  this.ask(msg.toUpperCase());
}


var JSRecentParts = new AnotherWorkshop("Kyle");
JSRecentParts.speakUp("Is this actually inheritance?");
// Kyle IS THIS ACTUALLY INHERITANCE?


// Lecture 8: Classical vs Prototypal Inheritance
/*
in classical OOPS - (copying)
Workshop ---> deepJS
         ----> reactJS
         
AnotherWorkshop


In Js oops (linking) [Prototypal Inheritance]
Workshop.prototype <--- deepJS
         <---- reactJS
         
AnotherWorkshop.prototype <--- JSRecentParts

Kyle says saying it "Prototypal Inheritance" is confusing.


*/




// Lecture 9: Inheritation is Delegation
/*
Inheritance in Js:
This is different design pattern than classes called "delgation".
"Javascript Inheritance" = "Behaviour Delegation".

Kyle says class based system is subset of Prototypal system.
you can build class based system inside of Prototypal ststem but reverse is not true.


 
*/


// Lecture 10 - OLOO Pattern
/*
  OLOO:
  Objects Linked to Other Objects.
*/



// Lecture 11: Delegation : design pattern
/*
 Delegation to write code better.
 Two or more objects can share methods of each other.
 Mocking these objects is easy while testing them.
*/



// Lecture 12: Wrapping Up
/*
 - Ask more question about javaScript.
 - Read spec to have a right mental model.
 - communicate in your code in a better way.
 - Have curiousity. 
*/
