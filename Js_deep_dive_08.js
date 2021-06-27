// Section 8 - Scope and Expressions

// Lecture 1 : Function Expression
/*
 - Function declaration put their identifier at enclosing scope.
 - Function expression when they put their identifier , It is coped with same function's scope and it is readonly.
 
 Why named function expression?
 - Function expression with a name. Kyle says you should prefer named function expression over anonymous function
*/

// Function declaration
function teacher() {/*...*/}

// function expression
var myTeacher = function anotherTeacher(){
  console.log(anotherTeacher);
};


console.log(teacher);
console.log(myTeacher);
// console.log(anotherTeacher); // Reference Error

// function declaration with no name: Anonymous function
var clickHandler = function() {
  // ..
}

// Named function expression
var keyHandler = function keyHandler(){
  // ..
}


// Lecture 2: Naming Functions Expressions
/*
 Why named function over anonymous function?
 - It creates reliable function self-reference (recursion, etc)
 - More debuggable stack traces. (Named function shows up in stack trace)
 - More self-documenting code.
*/


// Lecture 3 - Arrow functions
/*
 - Arrow functions are anonymous function.
 - Kyle says to use classic function with name.
*/


var people = [{id: 2}, {id:22}];


var ids = people.map(person => person.id);


// better code by just seeing the function name
var ids = people.map(function getId(person){
  return person.id;
});


// in promise chains its better to use Named function expression


// Lecture 4 - Functions type Heirarchy
/*
Order of superiority: 
(Named) Function Declaration
 >
 Named Function Expression
 > 
 Anonymous Function Expression
*/


// Lecture 5 - Function Expression Exercise
/*
# Function Expressions

In this exercise, you will be writing some functions and function expressions, to manage the student enrollment records for a workshop.

**Note:** The spirit of this exercise is to use functions wherever possible and appropriate, so consider usage of array utilities `map(..)`, `filter(..)`, `find(..)`, `sort(..)`, and `forEach(..)`.

## Instructions (Part 1)

**Note:** In Part 1, use only function declarations or named function expressions.

You are provided three functions stubs -- `printRecords(..)`, `paidStudentsToEnroll()`, and `remindUnpaid(..)` -- which you must define.

At the bottom of the file you will see these functions called, and a code comment indicating what the console output should be.

1. `printRecords(..)` should:
	- take a list of student Ids
	- retrieve each student record by its student Id (hint: array `find(..)`)
	- sort by student name, ascending (hint: array `sort(..)`)
	- print each record to the console, including `name`, `id`, and `"Paid"` or `"Not Paid"` based on their paid status

2. `paidStudentsToEnroll()` should:
	- look through all the student records, checking to see which ones are paid but **not yet enrolled**
	- collect these student Ids
	- return a new array including the previously enrolled student Ids as well as the to-be-enrolled student Ids (hint: spread `...`)

3. `remindUnpaid(..)` should:
	- take a list of student Ids
	- filter this list of student Ids to only those whose records are in unpaid status
	- pass the filtered list to `printRecords(..)` to print the unpaid reminders

## Instructions (Part 2)

Now that you've completed Part 1, refactor to use **only** `=>` arrow functions.

For `printRecords(..)`, `paidStudentsToEnroll()`, and `remindUnpaid(..)`, assign these arrow functions to variables of such names, so that the execution still works.

As the appeal of `=>` arrow functions is their conciseness, wherever possible try to use only expression bodies (`x => x.id`) instead of full function bodies (`x => { return x.id; }`).

*/
