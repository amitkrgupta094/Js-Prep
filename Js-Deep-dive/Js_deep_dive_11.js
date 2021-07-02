// Section 11: Objects

// Lecture 1 - Objects
/*
 Objects (Oriented) Programming in JS
 - this (foundational pieces)
 - class {} (based on prototype systems)
 - Prototypes
 - "Inheritance" vs "Behaviour Delegation"
    [OO vs OLOO]
*/


// Lecture 2: The this keyword
/*
 this:
 - A function's this references the "execution context for that call", determined entirely by "how the function was called".
 - If a function have this keyword, it is assigned based on how function is called.
 - A this-aware function can thus have a different context each time it's called, which makes it more flexible & reusable.
 - this keyword is Js version of dynamic scoping.
 - Context here refers to objects.
 
*/

// Example 1 : Not this-aware function
var teacher = "Kyle";

function ask(question) {
  console.log(teacher, question);
}


function otherClass() {
  var teacher = "Suzy";
  
  ask("Why?"); // called here so it points to Suzy
}


otherClass();


// Example  2: this-aware function
function ask(question){
  console.log(this.teacher, question);
}


function otherClass() {
  var myContext = {
    teacher: "Suzy"
  };
  ask.call(myContext, "Why?"); // Suzy why?
}


otherClass();


// Lecture 3 - Implicit & Explicit Binding
/*
 There are 4 ways to invoke a function in JavaScript:
 1. Implicit Binding:
   - In Namespace pattern how this keyword would behave.
     Object that used to invoke it would be "this" (Implicit Binding Rule)
  
  2. Explicit Binding:
    - call method
    - apply method
    Both of them take first argument as this's value.
    - We can use these methods to explicitely apply this keywords value.
    
    Variation of Expliciting binding - 
    1. Loosing your this binding (hard binding)
  
  
*/

// Way 1: Implicit Binding

// Example 1: Sharing function but explicetly.
var workshop = {
  teacher: "Kyle",
  ask(question) {
    console.log(this.teacher, question);
  },
}

workshop.ask("What is implicit binding?"); 
// Kyle What is implicit binding?


// Example 2: Sharing behaviour among different contexts
function ask(question) {
  console.log(this.teacher, question);
}

var workshop1 = {
  teacher: "Kyle",
  ask: ask,
}


var workshop2 = {
  teacher: "Suzy",
  ask: ask,
}


workshop1.ask("How do I share a method?");
// Kyle How do I share a method?

workshop2.ask("How do I share a method?");
// Suzy How do I share a method?


// Way 2 - Explicit Binding
function ask(question) {
  console.log(this.teacher, question);
}

var workshop1 = {
  teacher: "Kyle",
}


var workshop2 = {
  teacher: "Suzy",
}

ask.call(workshop1, "Can I explicitly set context?");
// Kyle Can I explicitly set context?

ask.call(workshop1, "Can I explicitly set context?");
// Suzy Can I explicitly set context?


// Way 2 variation: Hard Binding
/*
 this brings dynamacism but it also brings some problem
 
 <Trade/Offs>
 If I'm writing this-aware system with minimal hard bind stuff, then its fine to use that.
 
 But if I'm writing a this-aware system where I have do a bunch of hard bind then we should switch to something better. (Predicatble Lexical closure)
 
 
*/


var workshop = {
  teacher: "Kyle",
  ask(question) {
    console.log(this.teacher, question);
  }
}

// Losing this
setTimeout(workshop.ask, 10, "Lost this?");
// undefined Lost this?

// passing hard bound function using bind() function
// bind function creates a new function which is bound to a particular context
setTimeout(workshop.ask.bind(workshop), 10, "hard bound this?");
// Kyle hard bound this?




// Lecture 4 - The new keyword
/*
 3. new keyword: (constructor calls)
   It does not deal with classes, it is a 3rd way to invoke a function. It does 4 things that it is not obvious.
   
   Purpose of new keyword -
   Invoke a function with this keyword pointing to a whole new object.
   
   4 things the new keyword to do when it invokes a function
   - Create a brand new empty object
   - *Links that object to another object
   - Call function with this set to the new object
   - if function does not return an object, it assumes return of this.
   
*/

function ask(question) {
  console.log(this.teacher, question);
}



var newEmptyObject = new ask("What is 'new' doing here?");
// undefined What is 'new' doing here?



// Lecture 5 - Default Binding
/*
 4th way of binding: Default Binding
 - In Non strict mode, default to global object/context (fallback this value).
 - In strict mode, when we non invoke with no this binding, default context is undefined so it gives a TypeError.
*/

var teacher = "Kyle";

function ask(question) {
  console.log(this.teacher, question);
}


function askAgain(question) {
  "use strict";
  console.log(this.teacher, question);
}




ask("What's the non-strict-mode default?");
// Kyle What's the non-strict-mode default?

askAgain("What's the strict-mode default?");
// TypeError


// Lecture 5 - Binding Precendence
/*
 Order:
 1.Is the function called by new? - newly created object would be this keyword
 2.is this function called by call() or apply()? then context object would be the value of this [Note: bind() effectively uses apply()]
 3.is the function called on a context object?  this is that object
 4.Default: global object (except strict mode.)
*/
var workshop = {
  teacher: "Kyle",
  ask: function ask(question) {
    console.log(this.teacher, question);
  },
}


new (workshop.ask.bind(workshop))("What does this do?");
// undefined What does this do?



// Lecture 6 - Arrow Functions & Lexical scope
/*
 - in example arrow function correctly pointing to workshop object as this. this this is called lexical this.
 - Arrow function does not define a this keyword at all. there is no this keyword inside of arrow function. It checks value of this in the scope.
 - An arrow function is this-bound (aka.bind()) to it's parent function.
*/

// Ex1
var workshop = {
  teacher: "Kyle",
  ask(question) {
    setTimeout(() => {
      console.log(this.teacher, question);
    })
  },
}


workshop.ask("Is this lexical 'this'?");
// Kyle Is this lexical 'this'?



// lecture 6: Resolving this in Arrow function
/*
 - this keyword is a context.
 - Only use => arrow function when you need lexical this.
*/
var workshop = {
  teacher: "Kyle",
  ask: (question) => {
    console.log(this.teacher, question);
  }
}

// this points to global scope
workshop.ask("What happened to 'this'?"):
// undefined What happened to 'this'?

// this still points to global scope
workshop.ask.call(workshop, "Still no 'this'?"):
// undefined Still no 'this'?


// Lecture 7: ex
/*
# `this`

In this exercise, you will refactor some code that manages student enrollment records for a workshop, from the module pattern to the namespace pattern using the `this` keyword.

## Instructions

1. Remove the `defineWorkshop()` module factory, and replace it with an object literal (named `deepJS`) that holds all the module's functions, as well as the `currentEnrollment` and `studentRecords` data arrays.

2. Change all internal function references and references to the data  arrays to use the `this` keyword prefix.

3. Make sure any place where a `this`-aware callback is passed is hard-bound with `bind(..)`. Don't `bind(..)` a function reference if it's not `this`-aware.

*/


// Lecture 8: Ex solution
var deepJS = {
	currentEnrollment: [],
	studentRecords: [],
	addStudent(id,name,paid) {
		this.studentRecords.push({ id, name, paid, });
	},
	enrollStudent(id) {
		if (!this.currentEnrollment.includes(id)) {
			this.currentEnrollment.push(id);
		}
	},
	printCurrentEnrollment() {
		this.printRecords(this.currentEnrollment);
	},
	enrollPaidStudents() {
		this.currentEnrollment = this.paidStudentsToEnroll();
		this.printCurrentEnrollment();
	},
	remindUnpaidStudents() {
		this.remindUnpaid(this.currentEnrollment);
	},
	getStudentFromId(studentId) {
		return this.studentRecords.find(matchId);

		// *************************

		function matchId(record) {
			return (record.id == studentId);
		}
	},
	printRecords(recordIds) {
		var records = recordIds.map(this.getStudentFromId.bind(this));

		records.sort(this.sortByNameAsc);

		records.forEach(this.printRecord);
	},
	sortByNameAsc(record1,record2){
		if (record1.name < record2.name) return -1;
		else if (record1.name > record2.name) return 1;
		else return 0;
	},
	printRecord(record) {
		console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`);
	},
	paidStudentsToEnroll() {
		var recordsToEnroll = this.studentRecords.filter(this.needToEnroll.bind(this));

		var idsToEnroll = recordsToEnroll.map(this.getStudentId);

		return [ ...this.currentEnrollment, ...idsToEnroll ];
	},
	needToEnroll(record) {
		return (record.paid && !this.currentEnrollment.includes(record.id));
	},
	getStudentId(record) {
		return record.id;
	},
	remindUnpaid(recordIds) {
		var unpaidIds = recordIds.filter(this.notYetPaid.bind(this));

		this.printRecords(unpaidIds);
	},
	notYetPaid(studentId) {
		var record = this.getStudentFromId(studentId);
		return !record.paid;
	}
};


// ********************************

deepJS.addStudent(311,"Frank",/*paid=*/true);
deepJS.addStudent(410,"Suzy",/*paid=*/true);
deepJS.addStudent(709,"Brian",/*paid=*/false);
deepJS.addStudent(105,"Henry",/*paid=*/false);
deepJS.addStudent(502,"Mary",/*paid=*/true);
deepJS.addStudent(664,"Bob",/*paid=*/false);
deepJS.addStudent(250,"Peter",/*paid=*/true);
deepJS.addStudent(375,"Sarah",/*paid=*/true);
deepJS.addStudent(867,"Greg",/*paid=*/false);

deepJS.enrollStudent(410);
deepJS.enrollStudent(105);
deepJS.enrollStudent(664);
deepJS.enrollStudent(375);

deepJS.printCurrentEnrollment();
console.log("----");
deepJS.enrollPaidStudents();
console.log("----");
deepJS.remindUnpaidStudents();

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

// modular pattern & namspace pattern



// Lecture 9 - ES6 class keyword
/*
 - class based on prototype system.
 - classes can be an expression too.
 - constructor() is optional.
*/


class Workshop {
  constructor() {
    this.teacher = teacher;
  }
  
  ask(question) {
    console.log(this.teacher, question);
  }
}


var deepJs = new Workshop("Kyle");
var reactJs = new Workshop("Suzy");

deepJs.ask("Is 'class' a class?");
// Kyle Is 'class' a class?
reactJs.ask("Is this class OK?");
// Suzy Is this class OK?



// Extend one class to another
// this child class every method 
class AnotherWorkshop extends Workshop {
  speakUp(ask) {
    this.ask(msg);
  }
}

var JSRecentParts = new AnotherWorkshop("Kyle");
JSRecentParts.speakUP("Are classes getting better?");
// Kyle Are classes getting better?

/* 
 - super keyword: Polyphormism
 - child class defines same named method as parent class : shadowing.
 - There was no way to do relative polymorphism in JS before ES6 in JS.
 
*/ 

class AnotherWorkshop extends Workshop {
  speakUp(ask) {
    super.ask(msg.toUpperCase());
  }
}

var JSRecentParts = new AnotherWorkshop("Kyle");
JSRecentParts.speakUP("Are classes getting better?");


// If we pass method of class to say setTimeout, it will lose it's this binding.
setTimeout(deepJs.ask, 100, "still losing 'this'?");
// undefined still losing 'this'?


/* 
  - People want hard bound this like this is in classical language.
  - downside:
     - all these methods are not on Prototype but on Object instance itself.
   class idea:
      - Method should be on prototype and not on the instance.
*/
class WorkshopHardBoundThis {
  this.teacher = teacher;
  this.ask = question => {
    console.log(this.teacher, question);
  };
}

var deepJSHardBoundThis = new WorkshopHardBoundThis("Kyle");
setTimeout(deepJSHardBoundThis.ask, 100, "still losing 'this'?");
// kyle still losing 'this'?



// Lecture 10 - Fixing this in Classes
/*
 Why can't we make this autobound?
 - How to have methods on prototype + Hard bound this.
 check slide: ES6 class: hacktashtrophy
*/


// Lecture 11 - class Exercise
// Namespace object to class syntax.
/*
 # `class`

In this exercise, you will refactor some code that manages student enrollment records for a workshop, from the namespace pattern to the `class` pattern.

## Instructions

1. Define a class called `Helpers` that includes the functions that are not `this`-aware.

2. Define a class called `Workshop` that extends `Helpers`, which includes all the other functions. Hint: `constructor()` and `super()`.

3. Instantiate the `Workshop` class as `deepJS`.

*/


// Lecture 12 - solution
class Helpers {
	sortByNameAsc(record1,record2) {
		if (record1.name < record2.name) return -1;
		else if (record1.name > record2.name) return 1;
		else return 0;
	}

	printRecord(record) {
		console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`);
	}
}

class Workshop extends Helpers {
	constructor() {
		super();
		this.currentEnrollment = [];
		this.studentRecords = [];
	}

	addStudent(id,name,paid) {
		this.studentRecords.push({ id, name, paid, });
	}

	enrollStudent(id) {
		if (!this.currentEnrollment.includes(id)) {
			this.currentEnrollment.push(id);
		}
	}

	printCurrentEnrollment() {
		this.printRecords(this.currentEnrollment);
	}

	enrollPaidStudents() {
		this.currentEnrollment = this.paidStudentsToEnroll();
		this.printCurrentEnrollment();
	}

	remindUnpaidStudents() {
		this.remindUnpaid(this.currentEnrollment);
	}

	getStudentFromId(studentId) {
		return this.studentRecords.find(matchId);

		// *************************

		function matchId(record) {
			return (record.id == studentId);
		}
	}

	printRecords(recordIds) {
		var records = recordIds.map(this.getStudentFromId.bind(this));

		records.sort(this.sortByNameAsc);

		records.forEach(this.printRecord);
	}

	paidStudentsToEnroll() {
		var recordsToEnroll = this.studentRecords.filter(this.needToEnroll.bind(this));

		var idsToEnroll = recordsToEnroll.map(this.getStudentId);

		return [ ...this.currentEnrollment, ...idsToEnroll ];
	}

	needToEnroll(record) {
		return (record.paid && !this.currentEnrollment.includes(record.id));
	}

	getStudentId(record) {
		return record.id;
	}

	remindUnpaid(recordIds) {
		var unpaidIds = recordIds.filter(this.notYetPaid.bind(this));

		this.printRecords(unpaidIds);
	}

	notYetPaid(studentId) {
		var record = this.getStudentFromId(studentId);
		return !record.paid;
	}
}


// ********************************

var deepJS = new Workshop();

deepJS.addStudent(311,"Frank",/*paid=*/true);
deepJS.addStudent(410,"Suzy",/*paid=*/true);
deepJS.addStudent(709,"Brian",/*paid=*/false);
deepJS.addStudent(105,"Henry",/*paid=*/false);
deepJS.addStudent(502,"Mary",/*paid=*/true);
deepJS.addStudent(664,"Bob",/*paid=*/false);
deepJS.addStudent(250,"Peter",/*paid=*/true);
deepJS.addStudent(375,"Sarah",/*paid=*/true);
deepJS.addStudent(867,"Greg",/*paid=*/false);

deepJS.enrollStudent(410);
deepJS.enrollStudent(105);
deepJS.enrollStudent(664);
deepJS.enrollStudent(375);

deepJS.printCurrentEnrollment();
console.log("----");
deepJS.enrollPaidStudents();
console.log("----");
deepJS.remindUnpaidStudents();

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


/*
 Question on class pattern:
 - you do need new keyword still to instantiate an object from class.
 
 Pattern we seen in this module :
 Modular Pattern
 Namespace pattern
 Class pattern
*/
