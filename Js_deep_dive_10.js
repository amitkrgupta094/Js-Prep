// Section 10 - Closure


// Lecture 1 - Closure
/*
  - Kyle talks about history of JavaScript.
  - Kyle says we use closure everytime.
  - Idea of Closure comes from Lambda Calculus.
*/


// Lecture 2 - What is closure
/*
  Closure is when a function "remembers" its lexical scope even when the function
  is executed outside that lexical scope.
  
  - Function holds on to the reference of scope. this is closure.
*/


// waitASec closed over question variable
// Js engine creates a linkage on complete scope (not a variable)
function ask(question) {
  setTimeout(function waitASec(){
    console.log(question);
  }, 100);
}


ask("What is closure?");
// 'What is closure?'


// holdYourQuestion is closed over question variable
function ask(question) {
  return function holdYourQuestion() {
    console.log(question);
  }
}

var myQuestion = ask("What is closure?");

myQuestion(); // 'What is closure?'


// Lecture 3 - Closing over variables
/*
  - Closure is to actual having the variable not the snapshot of it.
  - 
  
*/

var teacher = "Kyle";

var myTeacher = function() {
  console.log(teacher);
}

teacher = "Suzy";

myTeacher(); // "Suzy"



// ex - Closure when looping.
// There is only one i variable but we have 3 functions.
// Closure preserves a variable.
for (var i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(`i: ${i}`)
  }, i*100)
}


// 'i: 4'
// 'i: 4'
// 'i: 4'

// so here everytime it runs, a new variable j gets created in block scope.
// 3 separate j gets created
for (var i = 1; i <= 3; i++) {
  let j = i;
  setTimeout(function() {
    console.log(`j: ${j}`)
  }, 100)
}

// 'j: 1'
// 'j: 2'
// 'j: 3'

// each declaration creates a new i
for (let i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(`i: ${i}`)
  }, 100)
}

// 'i: 1'
// 'i: 2'
// 'i: 3'


// Lecture 4 - Module Pattern
/*
*/


// Set of data and behaviour together - To make an object.
// This is a name space patten, an idiom. we make namespace with objects.
// it is not a module.
var workshop = {
  teacher: "Kyle",
  ask(question) {
    console.log(this.teacher, question);
  },
}


workshop.ask("Is this a module?"); 





// Module pattern requires a pattern of encapsulation.
// Hiding data and behaviour. There are things that are Public API and things are Private API.

// Classic Module Pattern - Revealing Module pattern
/*
 Modules encapsulate data and behaviour(methods) together. the state of a 
 module is held by methods via closure.
*/

// It has 2 parts:
// 1. Outer enclosing function
// 2. Inner function that closed over that values (ask function closed over teacher variable)
// The prupose of module is to track state over a time.

// Module IIFE 
var workshop = (function Module(teacher) {
  var publicAPI = {ask, };
  return publicAPI;
  
  // *******
  function ask(question) {
    console.log(teacher, question);
  }
})("Kyle");


workshop.ask("It's a module, right?");
// 'Kyle' "It's a module, right?"


// Regular function as module: Module Factory Functions
// We can create many 100s of workshop module with their own states.
function WorkshopModule(teacher) {
  var publicAPI = {ask, };
  return publicAPI;
  
  // *******
  function ask(question) {
    console.log(teacher, question);
  }
}

var workshop = WorkshopModule("Kyle");
workshop.ask("It's a simple module, right?")



// Lecture 5 - ES6 Modules and Nodejs
// Es6 modules are work in progress. If you want to use ES6 Module system in node, you'd have to use .mjs extension. TC39 and Node community are working together to get done by 2022.

// use export to make anything public.
// ES6modules are file based so it is impossible to have 2 modules in same file.
// ES6 modules are singleton, No matter how many times you import, it runs once. 
var teacher = "Kyle";
export default function ask(question) {
  console.log(teacher, question);
}


// Lecture 6 - ES6 Module syntax


// Two ways to do this

// Named import
import ask from "workshop.js";
ask("It is a default import, right?");


// Name spaced import: get all content of a module
import * as workshop from "workshop.mjs";
workshop.ask("Yup!");



// Lecture 6 - Ex1
/*
# Modules

In this exercise, you will refactor some code that manages student enrollment records for a workshop, to use the module pattern.

## Instructions

1. Wrap all of the functions in a module factory (ie, function named `defineWorkshop()`). This function should make a return a public API object.

2. The returned public API object should include the following methods:

	- `addStudent(id,name,paid)`
	- `enrollStudent(id)`
	- `printCurrentEnrollment()`
	- `enrollPaidStudents()`
	- `remindUnpaidStudents()`,

3. Move the `currentEnrollment` and `studentRecords` arrays inside the module definition, but as empty arrays.

4. Create an instance of this module by calling `defineWorkshop()`, and name it `deepJS`.

5. Define all the student records by calling `deepJS.addStudent(..)` for each.

6. Define the student enrollments by calling `deepJS.enrollStudent(..)` for each.

7. Change the execution code (the console output steps) to references to `deepJS.*` public API methods.

*/


var currentEnrollment = [ 410, 105, 664, 375 ];

var studentRecords = [
	{ id: 313, name: "Frank", paid: true, },
	{ id: 410, name: "Suzy", paid: true, },
	{ id: 709, name: "Brian", paid: false, },
	{ id: 105, name: "Henry", paid: false, },
	{ id: 502, name: "Mary", paid: true, },
	{ id: 664, name: "Bob", paid: false, },
	{ id: 250, name: "Peter", paid: true, },
	{ id: 375, name: "Sarah", paid: true, },
	{ id: 867, name: "Greg", paid: false, },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/


// ********************************

function getStudentFromId(studentId) {
	return studentRecords.find(matchId);

	// *************************

	function matchId(record) {
		return (record.id == studentId);
	}
}

function printRecords(recordIds) {
	var records = recordIds.map(getStudentFromId);

	records.sort(sortByNameAsc);

	records.forEach(printRecord);
}

function sortByNameAsc(record1,record2){
	if (record1.name < record2.name) return -1;
	else if (record1.name > record2.name) return 1;
	else return 0;
}

function printRecord(record) {
	console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`);
}

function paidStudentsToEnroll() {
	var recordsToEnroll = studentRecords.filter(needToEnroll);

	var idsToEnroll = recordsToEnroll.map(getStudentId);

	return [ ...currentEnrollment, ...idsToEnroll ];
}

function needToEnroll(record) {
	return (record.paid && !currentEnrollment.includes(record.id));
}

function getStudentId(record) {
	return record.id;
}

function remindUnpaid(recordIds) {
	var unpaidIds = recordIds.filter(notYetPaid);

	printRecords(unpaidIds);
}

function notYetPaid(studentId) {
	var record = getStudentFromId(studentId);
	return !record.paid;
}


// Solution will be done on sunday
