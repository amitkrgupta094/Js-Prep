

// Lecture 1: Introduction
/*
  Kyle's handle: getify @gmail @github @twitter.
  Companion to this course: https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/README.md
*/

// Hello world program

var teacher = "Kyle";
var twitterHandle = "getify";
var age = 39;

function whoAmI(myName, myNickname, myAge) {
  console.log(`Hi, I'm ${myName} (aka ${myNickname}),
      and I'm ${myAge} years old.`);
}

whoAmI(teacher, twitterHandle, age);




// Lecture 2: Course Overview

/*
  - Programming Primer (in Js)
    - Values
    - Operations
    - Variables
    - Expressions and Statements
    - Decisions
    - Loops
    - Functions
  - Three Pillars of JS:
    - Types / Coercion
    - Scope / Closure
    - this / Prototypes
*/



// Lecture 3: Values
// Examples of varities of values

// In Js there is one type of numbers "number"
42;
3.14;

// work, sentence, a set of characters
"Hello, friend";

// Boolean values: 
true;
false;

// Empty values : not be any value / missing value
null;
undefined;
 
// Non primitive values
// Primitive means literal value rather a collection of values.
// Non Primitive means collection of values.

// Array - collection of values with numbered locations.
[1, 2, 3];

// object - collection of values, values are positioned with names/string.
{name: 'Kyle'};

// These values reperesent task we want to accomplish and they have intrinsic behaviour attached with them.


// Lecture 4: Operations
// + operator is overloaded means it does different things based on type of data structure.
// Operators types = Binary Operators, Unary Operators.
// In Js there are 2 types of equality operator: ==, ====

3 + 4;
43 - 1;

"Kyle " + "Simpson";

!false;

3.0 == 3;

3 < 4;

true || false;


// Lecture 5: Types
// type - kind of a value. typeof operator used to evaluate "kind" of value.

typeof 42; // "number"
typeof "Kyle" // "string"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof {age: 39}; // "object"
typeof null; // "object" - a bug
typeof [1,2,3]; // "object"


// Lecture 6: Variables

// variable - place in memory. symbolic representation. 
// = operator is used to do assignment operation.
// () is an overloaded operator - function call / group things together
// ; is also an operator which indicates end of the expression.
var name = "kyle simpson";

var age; // decalared
age = 39; // assignment

var friends = ["Brandon", "Marc"];

// console is special built in variable
console.log( friends.length ); // 2
console.log( friends[1]); // 'Marc'

// operators that can only be done with variables

var age = 39;

age++;
age += 2;

age; // 42


// Lecture 7: Expressions vs Statements

// Expression - it is like a phrase.
// Staments - complete sentence.

var age = 39;
age = 1 + ( age * 2);


// Lecture 8 : If & Else (Decisions making in code)

// if statement
var age = 39;
if (age >= 18) {
  console.log("go vote");
}


// if-else statement
const isEnrolled = function() {};
const takeClass = function() {};
const enrollFirst = function() {};

if (isEnrolled()) {
  takeClass();
} else {
  enrollFirst();
}



//  Lecture 9: Loops (Operations that we have to do multiple times.)

var students = ["Marc", "Brandon"];
function greetStudent(student) {
  console.log(`Hey, ${student}`);
}

// for loop
for (let i = 0; i < students.length; i++) {
   greetStudent(students[i]);
}


// for..of loop, Iterator going through list of values.
for (let student of students) {
   greetStudent(student);
}


// while

while (students.length > 0 ) {
  let student = students.pop();
  greetStudent(student);
}


// Lecture 10: Functions (Procedure)
// Using a code multiple times from different places.
// `` = Interpolated string.
// A function can return things.

// function greetStudent(student) {
//   console.log(`Hello, ${student.name}!`);
// }


function timeRemaining(timeElapsed, endTime) {
  return endTime - timeElapsed;
}

var left = timeRemaining(42, 240);

left; // 198



// Lecture 11, 12 and 13 (Programming Primer question)
/*
# Programming Primer (in JS)

This is an exercise to practice basic programming principles.

## Instructions

The code of this exercise can be executed via Node.js or in the console tab of your browser's developer tools.

1. Define an `addFavoriteBook(..)` function that receives a single parameter, called `bookName`.

2. If the provided `bookName` string does *NOT* have the word "Great" in it, add it to the `favoriteBooks` array.

	Hints:

	- `someString.includes(anotherString)` will return `true` if `anotherString` is found inside `someString`, or `false` otherwise.

	- Use `!` to negate a boolean value (change `true` to `false` or vice versa).

	- `someArray.push(value)` will add a value to the end of the array.

3. Define a `printFavoriteBooks()` function that receives no parameters.

4. `printFavoriteBooks()` should first print a message like "Favorite Books: ..", and include the number of books in the `favoriteBooks` array.

	Hint:

	- Use the \` back-tick operators for strings that need to include values in them.

	- Use `console.log(..)` to print a message to the screen.

5. Finally, `printFavoriteBooks()` should loop through the `favoriteBooks` array and print out each value.

	Make sure to then call the `printFavoriteBooks()` function at the end of the program.

	Hint: Use the `for ( let .. of .. ) { }` style loop.
  */

const favoriteBooks = [];
const addFavoriteBook = function(bookName){
  if(!bookName.toLowerCase().includes("great")) {
    favoriteBooks.push(bookName);
  }
}

const printFavoriteBooks = function() {
  for(let bookName of favoriteBooks) {
    console.log(bookName);
  }
}


addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// print out favorite books
printFavoriteBooks();


// ================================================================ //

// Type System

// Lecture 1: Primitive Types
/*
  - Types/Coercion
  - Scope/Closure
  - this/prototypes
  
  
  Types / Coercion
  - Primitive Types
    - In Js everything is not an Object.
    - Primitive types
     - undefined
     - string
     - number
     - boolean
     - symbol
     - object
     
     Special types 
       - null (a primitive type)
       - function (subtype of object)
       - array (subtype of object)
  
  - Coverting Types
  - Checking Equality
*/


// In Js, variables don't have types, values do.
// typeof is used to define type of a variable
var v;
typeof v; // "undefined"

v = "1";
typeof v; // "string"

v = 2;
typeof v; // "number"

v = true;
typeof v; // "boolean"

v = {};
typeof v; // "object"

v = Symbol();
typeof v; // "symbol"


typeof s; // not declared but "undefined"


v = null;
typeof v; // "object" OOPs!

v = function(){};
typeof v; // "function"

v = [1,2,3];
typeof v; // "object"



// Lecture 2: NaN ("not a number")

var greeting = "Hello, class!";
var something = greeting / 2; // ?!?!?

something; // NaN
Number.isNaN(something); // true

Number.isNaN( greeting ); // false

//IMPORTANT: Whenever you do mathematical operation in JavaScript, Test for NaN cases for edge cases.


// Lecture 3: new keyword
/*
 Use new:
 - Object()
 - Array()
 - Function()
 - Date()
 - RegExp()
 - Error()
 
 Don't use new: (used to change types)
 - String()
 - Number()
 - Boolean()
*/

var yesterday = new Date("March 6, 2019");
yesterday.toUTCString();

var myGPA = String(3.54);
myGPA;



// Lecture 4: Coercion  (converting one type to another.)
// Coercion: Implicit | Explicit


var msg1 = "There are ";
var numStudents = 16;
var msg2 = " students.";
console.log(msg1 + numStudents + msg2); // Implicit Coercion
// "There are 16 students."


console.log(`There are ${numStudents + ""} students.`);  // Implicit Coercion
// "There are 16 students."

/*
N + N = N
N + S = S
S + N = S
S + S = S
*/

// DOM values are usually strings hence coercion is required.
var fakeDOMValue = "hey";
function addAStudent(numStudents) {
  return fakeDOMValue + 1;
}



// Lecture 5: Booleans
/*
Falsy: 
""
0, -0
null
NaN
false
undefined

Truthy:
Anything else that is not inside of Falsy set.
*/

let studentsInputElem = {value: "2"};
function enrollStudent() {};
let newStudents = [];

// not safe as anyone can type a string 
if(studentsInputElem.value) {
  numStudents = Number(studentsInputElem.value)
};

// safe assumption
while (newStudents.length) {
  enrollStudent(newStudents.pop())
}


// More Explicit

// not safe as anyone can type a string 
if(!!studentsInputElem.value) {
  numStudents = Number(studentsInputElem.value)
};

// safe assumption
while (newStudents.length > 0) {
  enrollStudent(newStudents.pop())
}


// Implicit Coercion can be good (sometimes)
// at least one of these are number we are safe
var workshop2Elem = {value: 45};
var workshopEnrollment1 = 16;
var workshopEnrollment2 = workshop2Elem.value;


if(Number(workshopEnrollment1) < Number(workshopEnrollment2)) {
  // Do something
}


if(workshopEnrollment1 < workshopEnrollment2) {
  // Do something
}


// Lecture 6: Coercion Best Practices
/*
 - A quality JS program embraces coercion, making sure the types involved in every operation are clear.
*/


// Lecture 7: Equality
/*
== vs ===
- == checks value (loose)
- checks value and type (strict)

Above things are wrong.
- == allows coercion (types different)
- === disallows coercion (types same)



- if types are same , double or triple equal does the same.
- Make your types obvious.
- If types are different, they have different behaviour.
- null and undefined are coerively equal.
*/

var studentName1 = "Frank";
var studentName2 = `${studentName1}`;


var workshopEnrollment1 = 16;
var workshopEnrollment2 = workshopEnrollment1 + 0;






// Lecture 8: Types Summary
/*
Question to ask: Is coercion helpful for me?
- == is not about comparisons with unknown types. (Kyles view)
- Make your types obvious in your program, you can use == operator,

*/

// ======================================================= //
// Scope and Closure

// Lecture 1: Scope
/*
 - Nested scope
 - Closure
 
 Scope and how they work?
 Where Js engine looks for things. rules for finding the variables is called scope. 
*/

x = 42;
// console.log(y);



var teacher = "Kyle";

function otherClass() {
  teacher = "Suzy";
  topic = "React";
  console.log("Welcome")
}

otherClass(); // "Welcome"

teacher; // "Suzy"
topic; // "React"





// Lecture 2: Undefined vs Undeclared 

/*
 - Theyre very distinct things. 
*/



// Lecture 3: Function Expressions

/*
 A funciton that assigned as a value to somewhere. 
 - Kyle says you should name funciton expression. why? because it makes it appear in Error trace.
*/


// Anonymous Function Expression
var clickHandler = function() {
  // ..
};


// Named Function Expression
var keyHandler = function keyHandler() {
  // ..
};



// Claim
// var people = [{id: 1}, {id: 2}];
// var ids = people.map(person => person.id);

// var ids = people.map(function getId(person) {
//   return person.id;
// })


// Promises - Check the deck.


// Lecture 4: IIFEs (Immediadely Invoked Function Expression)
// Helps create a new block of scope untouched the global variables, avoids polluting the outer scope.

(function anotherTeacher() {
  var teacher = "Suzy";
  console.log(teacher);
})();

console.log(teacher)





// Lecture 4: Block Scoping (Instead of an IIFE)

// How to have block scoping in your code? use let/const with {}.
// use let / const keyword
// Block scoping is used to make things private (General programming principle.) You can still use on funciton level and use let in block.

{
  let teacher2 = "Suzy2";
  console.log(teacher2);
}


// Example

function diff(x,y) {
  if(x > y) {
    let tmp = x;
    x = y;
    y = tmp;
  }
  
  return y - x;
}



// Lecture 5: Closure
/*
 closure is when a function "remembers" the variables outside of it, even if you pass the function elsewhere.
 We observe this when we pass function around / treat it as a value.
 
 "Make the scope alive - closure" but actually scope does not become alive. 
*/

// function - passed as value
function ask(question) {
  setTimeout(function waitASec(){
    console.log(question);
  }, 100)
}

ask("What is closures?");


// ex 2 - function returned


function ask(question) {
  return function holdYourQuestion() {
    console.log(question);
  }
}

var myQuestion = ask("What is closure again?");

myQuestion(); // "What is closure again?"


// ================================================================================ //
// this & Prototypes

// Lecture 1 - this
/*
- this
- Prototypes
- class {} // built on top of Prototypes


this -
A function's this references the execution context for that call, determined entirely by how the function was called.
A this-aware function can thus have a different context each time it's called, which makes it more flexible & reusable.
we can change "this" context.
*/


var workshop = {
  teacher: "Kyle",
  ask(question) {
    console.log(this.teacher, question)
  },
}

workshop.ask("What is implicit binding?");
// 'Kyle' 'What is implicit binding?'


// Dynamic Context
function ask(question) {
  console.log(this.teacher, question);
}

function otherClass() {
  var myContext = {
    teacher: "Suzy"
  };
  
  ask.call(myContext, "Why");
}

otherClass(); // 'Suzy' 'Why'


// Lecture 2: Prototypes
/*
 An object where any object is linked it.
*/

// Lecture 3: class
/*
- layered on top of prototype system.
- Looks more like classical class system.
*/


// Exercises - Three Pillars of JavaScript

class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	}

	// TODO: define methods `addFavoriteBook(..)`
	// and `printFavoriteBooks()`
  
  addFavoriteBook = function(bookName) {
	if (!bookName.includes("Great")) {
		this.favoriteBooks.push(String(bookName));
	}
}
  
  
  printFavoriteBooks = function() {
	console.log(`Favorite Books: ${this.favoriteBooks.length}`);
	for (let bookName of this.favoriteBooks) {
		console.log(bookName);
	}
}
  
  
}


function loadBooks(bs) {
	// TODO: call fakeAjax( .. );
  fakeAjax(BOOK_API, (bookArr) => {
    bookArr.map(book => {
      bs.addFavoriteBook(book);

    })
          bs.printFavoriteBooks();

  });
  

}

var BOOK_API = "https://some.url/api";


// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}

loadBooks(new Bookshelf())


// ================================================================= // 
// Final Words - Pillars of Js Summary

/*
 Type System
 Coercion
 
 Scope / Closure
 - Module pattern is based on this.
 
 this/Prototype
 - class based system
*/


Revised: 2
