// Section 9 : Advanced Scope

// Lecture - Lexical & Dynamic Scope

/*
 Lexical Scope:
 Idea of compiler to figure out scope at compilation time.
 It is decided at compilation time. It is not changed at runtime.
 
 
 Another model of scoping:
 Dynamic Scoping model. eg: Bash.
*/



// Lecture 2 - Lexical Scope
/*
 -Marbel color is decide at compilation time, there is no lookup.
 - Es levels to analayse scope.
*/

var teacher = "Kyle";

function otherClass() {
  var teacher = "Suzy";
  
  function ask(question) {
    console.log(teacher, question);
  }
  
  ask("Why?");
}



// Lecture 3 - Dynamic Scope
/*
 - It does not exist in Javascript. In dynamic nesting, function call gives you variable name.
 - We can tho replicate dynamic scope in Js.
*/



var teacher = "Kyle";

function ask(question) {
  console.log(teacher, question);
}

function otherClass() {
  var teacher = "Suzy";
  ask("Why?");
}

otherClass();



// Lecture 4 - Function Scoping
/* 
What can we do with knowledge of scope -

*/


var teacher = "Kyle";


// ..

console.log(teacher); // Kyle



// Problem: Name collision??

var teacher = "Kyle";


// someone added this
var teacher = "Suzy";
console.log(teacher); // Suzy
// ..

console.log(teacher); // Suzy




// ex - but this is not a good solution for naming collision.
var teacher = "Kyle";

function anotherTeacher() {
  var teacher = "Suzy";
  console.log(teacher); // Suzy
}


anotherTeacher();

console.log(teacher); // Kyle





// Principle of least exposure:  You should default to everything private and expose minimal necessary.
// this solves 3 problems - 
/*
 - Naming collision resolved
 - Someone will not able to misuse it (they can't access it)
 - No refactor is needed.
*/


// Lecture 5 - IIFE pattern
/*
 IIFE - Immediately invoked function.
 - Taking a function and immediately invoking it.
 - It is not a function declaration, () turns expression into a declaration.
 - Kyle says to avoid passing an anonymous function.
 Use cases -
 1) IIFE 
*/



var teacher = "Kyle";

(function anotherTeacher() {
  var teacher = "Suzy";
  console.log(teacher); // Suzy
})();

console.log(teacher); // Kyle


// this is IIFE is anonymous
(function() {
  var teacher = "Suzy";
  console.log(teacher); // Suzy
})();


// use of IIFE - turning statement into expression

// problem
var teacher;

try {
  teacher = fetchTeacher(1);
}
catch (err) {
  teacher = "Kyle";
}

// IIFE : cleaner solution
// try..catch statement turned into an expression
// this code makes obvious that teacher gets assigned only once
var teacher = (function getTeacher(){
    try {
    teacher = fetchTeacher(1);
  }
  catch (err) {
    teacher = "Kyle";
  }
})();




// Lecture 6 - Block scoping (Encapusaltion)
/*
 Block scoping - Scoping done inside of block.
 - var actually attches itself to outerscope so we don't use it.
 - We will have to use let and const.
 - blocks are not scope until they have let and const.
 - use:
   - 
 
*/


// instead of an IIFE

var teacher = "Kyle";

{
  let teacher = "Suzy";
  console.log(teacher); // Suzy
}


console.log(teacher); // Kyle



// problem 1
function diff(x, y) {
  if(x > y) {
    var tmp = x;
    x = y;
    y = tmp;
  }
  
  return y - x;
}


// using block scope variable
function diff(x, y) {
  if(x > y) {
    let tmp = x;
    x = y;
    y = tmp;
  }
  
  return y - x;
}


// Let is a new var? Nope, you should use it.

function repeat(fn, n) {
  var result;
  
  for( var i = 0; i < n; i++) {
    result = fn( result, i)
  }
  
  return result;
}




// Lecture 7 - Choosing let or var

/*
 - use var at top level.
 - Something are naturally block scope and few things are not.
 - var attaches itself to function scope (hositing)
 - var can be used inside of same scope (no exception), lets can't
 
*/

function lookupRecord(searchStr) {
  try {
    var id = getRecord( searchStr);
  }
  catch (err) {
    var id = -1;
  }
  
  return id;
}


// Lecture 8 - Explicit let block
/*
  - Use explicit let block with {}
*/



function formatStr(str) {
  {
    let prefix, rest;
    prefix = str.slice(0, 3);
    rest = str.slice(3);
    str = prefix.toUpperCase() + rest;
  }
  
  if(/^FOO:/.test( str )) {
    return str;
  }
  
  return str.slice( 4 );
}



// Lecture 9 - Const
/*
 Const:
 - It means "things do not change" but in programming it means
 variable that can not be re-assigned.
 - Mutation is allowed with const. (mutable assignment is possible.)
 - use const in small block.
 - Kyle says he would be using const only with primitive.
*/

var teacher = "Suzy";
teacher = "Kyle"; // OK

const myTeacher = teacher;
// myTeacher = "Suzy"; // TypeError

const teachers = ["Kyle", "Suzy"];
teacher[1] = "Brain"; // Allowed


// Lecture 10 - Const Q&A
/*
 - Kyle says he would like to use const for string, number and boolean.
 - Object.freeze() - shallow lock for object.
*/



// Lecture 11 - Hoisting
/*
 Hoisting -
 It is not a real thing, Js engine does not move things around.
 It is there to discuss the idea of lexical scope.
 
 Explain what happens with L1.
 - Compiler
 - Execution 
 
 Parsing -
  Parsing actually happens, it handles them in first pass.
  
-  Function declaration 'hoist'
-  variables get hoisted (vars)
 
*/


student2;   // ??
teacher2;   // ??
var student2 = "you";
var teacher2 = "Kyle";


// Hoisting described like this but this does not happen

var student3;
var teacher3;

student3;
teacher3;
student3 = "You";
teacher3 = "kyle";



// Lecture 12 - Hoisting Example
var teacher = "Kyle";
otherTeacher(); //

function otherTeacher() {
  console.log(teacher);
  var teacher = "Suzy";
}


// var hoisting and function hoisting

// bad idea
teacher5 = "kyle";
var teacher5;


// good idea as it improves readibility
getTeacher();

function getTeacher() {
  return teacher;
}








// Lecture 13 - Let does not hoist
/*
  - in ex1 and in ex2 , teacher will give TDZ error.
  - let and const still hoist, it hoist to a block. var hoists to a function.
  - var initiliazes it as undefined, let/const in compilation time says to create a location but not initiliased.
  - tdz exist because of const. imagine if const initalised as undefined, consoling it will have undefined and then at different time we have a file. they inveted TDZ for const but also used for let.
  
  why function declaration is not hoisted?
   - variable declaration are hoisted but assignment happens at runtime. declarative code can be ordered but not executable code.
   - 
*/

// ex 1
{
  teacher = "Kyle"; // TDZ error;
  let teacher; 
}


// ex 2
var teacher = "Kyle";

{
  console.log(teacher); // TDZ error;
  let teacher = "Suzy";
}


// Lecture 14 - Hoisting Excercise
/*
# Hoisting

In this exercise, you will refactor some code that manages student enrollment records for a workshop, to take advantage of function hoisting.

## Instructions

Refactor all inline function expressions to be function declarations. Place function declarations at the bottom (that is, below any executable code) of their respective scopes.

Also, pull function declarations to outer scopes if they don't need to be nested.



*/

// My soln: wrong (not completely)
// printRecords(currentEnrollment);
// console.log("----");
// currentEnrollment = paidStudentsToEnroll();
// printRecords(currentEnrollment);
// console.log("----");
// remindUnpaid(currentEnrollment);

// function matchId(record){
// 		return (record.id == studentId);
// 	}

// function sortByNameAsc(record1,record2){
// 		if (record1.name < record2.name) return -1;
// 		else if (record1.name > record2.name) return 1;
// 		else return 0;
// 	}

// function printRecord(record){
// 		console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`);
// 	}

// function getStudentFromId(studentId) {
// 	return studentRecords.find(matchId);
// }

// function printRecords(recordIds) {
// 	var records = recordIds.map(getStudentFromId);

// 	records.sort(sortByNameAsc);

// 	records.forEach(printRecord);
// }

// function needToEnroll(record){
// 		return (record.paid && !currentEnrollment.includes(record.id));
// 	}

// function getStudentId(record){
// 		return record.id;
// 	}

// function notYetPaid(studentId){
// 		var record = getStudentFromId(studentId);
// 		return !record.paid;
// 	}
// function paidStudentsToEnroll() {
// 	var recordsToEnroll = studentRecords.filter(needToEnroll);

// 	var idsToEnroll = recordsToEnroll.map(getStudentId);

// 	return [ ...currentEnrollment, ...idsToEnroll ];
// }

// function remindUnpaid(recordIds) {
// 	var unpaidIds = recordIds.filter(notYetPaid);

// 	printRecords(unpaidIds);
// }


// // ********************************

// var currentEnrollment = [ 410, 105, 664, 375 ];

// var studentRecords = [
// 	{ id: 313, name: "Frank", paid: true, },
// 	{ id: 410, name: "Suzy", paid: true, },
// 	{ id: 709, name: "Brian", paid: false, },
// 	{ id: 105, name: "Henry", paid: false, },
// 	{ id: 502, name: "Mary", paid: true, },
// 	{ id: 664, name: "Bob", paid: false, },
// 	{ id: 250, name: "Peter", paid: true, },
// 	{ id: 375, name: "Sarah", paid: true, },
// 	{ id: 867, name: "Greg", paid: false, },
// ];

// printRecords(currentEnrollment);
// console.log("----");
// currentEnrollment = paidStudentsToEnroll();
// printRecords(currentEnrollment);
// console.log("----");
// remindUnpaid(currentEnrollment);

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

/*
 - Kyles idea here in his solution to make scope flatter tha nested to avoid bugs.
 - put function outside if it is stand alone.
 - put function inside of the same function if it has a dependency on some variable provided by variable.
*/
