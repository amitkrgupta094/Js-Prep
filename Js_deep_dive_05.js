// Section 5 - Equality

// Lecture 1 - Equality: == vs ===
/*
  Common Myth -
    - == checks value (loose)
    - === checks value and type (strict)
    - Above two things are not true.
    
 - You should think like JS to understand your code.
 - x == y (Double Equal)
   - Double / Triple equal first checks the type.
   - When types match then they do triple equals. (ex1)
   - What triple equal does?
     - It also checking type and if types are different return false
     - if types are same and Number
        - if x/y are NaN return false
        - if x and y are same return true
        - if x +0 and y is -0 return true
        - if x is -0 and y is +0 return true
    - if types are different return false.
    
    Conclusion:
    == allows coercion if types are different.
    === disallows coercion when types are same.
    
    Deck: 92-99
*/


// ex1
var studentName1 = "Frank";
var studentName2 =`${studentName1}`;

var workshopEnrollment1 = 16;
var workshopEnrollment2 = workshopEnrollment1 + 0;


studentName1 == studentName2; // true
studentName1 === studentName2; // true

workshopEnrollment1 == workshopEnrollment2; // true
workshopEnrollment1 === workshopEnrollment2; // true



// ex2

var workshop1 = {
  name: "Deep Js Foundations"
};


var workshop2 = {
  name: "Deep Js Foundations"
};


if(workshop1 == workshop2) {
  // Nope
}


if(workshop1 === workshop2) {
  // Nope
}



// Lecture 2- Coercive Equality
/*
 - If you know your types you should ask coercion is helpful or not?
 - Make your types obvious
 - Double Equals:
   - if type of x / y are null / undefined - return true
   
 - Kyle says he uses Elsint which is configurable.
   
  Deck: 100-103
   
*/



var workshop1 = {topic: null};
var workshop2 = {};



if((workshop1.topic === null || workshop2.topic === undefined) &&
  (workshop2.topic === null || workshop1.topic === undefined) ) {
  // ..
}



// better
if((workshop1.topic === null && workshop2.topic === null) ) {
  // ..
}





// Lecture 3 - Double Equals Algorithm
/*

 Note: Make your type obvious so you can use the coercion productively.
 Double Equals Algorithm:
 - if type x , y= number / string / Boolean then perform ToNumber on x/y.
 - if x is String, Number, Symbol and y is Object then do ToPrimitive on object.
 - Double equals always compares primitive, if object comes it turns them into primitive.
 
 Javascript does compares object types using Identity comparision.
 Deck: 104-106
*/

var workshop2Elem = {
  value:  "16"
}

var workshopEnrollment1 = 16;
var workshopEnrollment2 = workshop2Elem.value;



if(Number(workshopEnrollment1 ) === Number(workshopEnrollment2)) {
  // 
  console.log("ran ===");
}


// Coercion makes the other value to turn into a number so == is fine here
if(workshopEnrollment1 == workshopEnrollment2) {
  // 
  console.log("ran ===")
}








// Lecture 4 - Double Equals walkthrough
// Deck: 107-108

// Don't use == like that
var workshop1Count = 42;
var workshop2Count = [42];

if(workshop1Count == workshop2Count) {
  // Yep (hmmm....)
}

// workshop2Countis an array, ToPrimitive --> "42" --> 42




// Lecture 5 - Doube Equals Summary
// Deck: 109
/*
if types are the same use ===.
if null or undefined: return true
if non-primitives: use ToPtimitive
prefer: ToNumber


*/



// Lecture 6 - Corner Cases
/*
  // Deck: 110-112
*/


// Artificial Scenario
[] == ![]; // true


var workshop1Students = [];
var workshop2Students = [];

if(workshop1Students == !workshop2Students) {
  // Yep, Wat!?
}


if(workshop1Students !== workshop2Students) {
  // Yep, Wat!?
}





// Lecture 7: Double equal corner cases: Boolean
// Deck: 113-114


var workshopStudents = [];


// use it
if(workshopStudents) {
  // Yep
}


// don't use it
if(workshopStudents == true) {
  // Nope :(
}

// don't use it
if(workshopStudents == false) {
  // Yep :(
}


// Lecture 8: Coercion edge cases summary
/*
Avoid:
1. == with 0 or "" (or even " ")
2. == with non-primitive
3. == true or == false: allow ToBoolean or use ===

Deck: 115
*/



// Lecture 9: The case of preferring
/*
 Deck: 116 - 130.
 - Make your type obvious, uncertain types lead to bugs.
 - Never use == when you do not know the types.
 - == is about comparisons with known types, optionally where conversions are helpful.
 - if you know types
   - types are identical, then === happens so doing === is waste.
   - if types are same === will always fail.
*/




// Lecture 9: Exercise
/*
# Wrangling Equality

In this exercise, you will define a `findAll(..)` function that searches an array and returns an array with all coercive matches.

## Instructions

1. The `findAll(..)` function takes a value and an array. It returns an array.

2. The coercive matching that is allowed:

	- exact matches (`Object.is(..)`)
	- strings (except "" or whitespace-only) can match numbers
	- numbers (except `NaN` and `+/- Infinity`) can match strings (hint: watch out for `-0`!)
	- `null` can match `undefined`, and vice versa
	- booleans can only match booleans
	- objects only match the exact same object

*/

// My solution: not complete
// function findAll(Arr, El) {
//   let CoerciveArr = [];
  
  
//   function CoerciveMather(x) {
//     if (Object.is(El, x)) return x;
    
//   }
// }



// Bigger Picture: Coercion can be safe if you elimintated the corner cases.
function findAll(match,arr) {
  var ret = [];
  for (let v of arr) {
    if (Object.is(match,v)) {
      ret.push(v);
    }
    else if (match == null && v == null) {
      ret.push(v);
    }
    else if (typeof match == "boolean") {
      if (match === v) {
        ret.push(v);
      }
    }
    else if (typeof match == "string" && match.trim() != "" && typeof v == "number" && !Object.is(-0,v)) {
      if (match == v) {
        ret.push(v);
      }
    }
    else if (typeof match == "number" && !Object.is(match,-0) && !Object.is(match,NaN) && !Object.is(match,Infinity) && !Object.is(match,-Infinity) && typeof v == "string" && v.trim() != "") {
      if (match == v) {
        ret.push(v);
      }
    }
  }
	return ret;
}

// tests:
var myObj = { a: 2 };

var values = [
	null, undefined, -0, 0, 13, 42, NaN, -Infinity, Infinity,
	"", "0", "42", "42hello", "true", "NaN", true, false, myObj
];

console.log(setsMatch(findAll(null,values),[null,undefined]) === true);
console.log(setsMatch(findAll(undefined,values),[null,undefined]) === true);
console.log(setsMatch(findAll(0,values),[0,"0"]) === true);
console.log(setsMatch(findAll(-0,values),[-0]) === true);
console.log(setsMatch(findAll(13,values),[13]) === true);
console.log(setsMatch(findAll(42,values),[42,"42"]) === true);
console.log(setsMatch(findAll(NaN,values),[NaN]) === true);
console.log(setsMatch(findAll(-Infinity,values),[-Infinity]) === true);
console.log(setsMatch(findAll(Infinity,values),[Infinity]) === true);
console.log(setsMatch(findAll("",values),[""]) === true);
console.log(setsMatch(findAll("0",values),[0,"0"]) === true);
console.log(setsMatch(findAll("42",values),[42,"42"]) === true);
console.log(setsMatch(findAll("42hello",values),["42hello"]) === true);
console.log(setsMatch(findAll("true",values),["true"]) === true);
console.log(setsMatch(findAll(true,values),[true]) === true);
console.log(setsMatch(findAll(false,values),[false]) === true);
console.log(setsMatch(findAll(myObj,values),[myObj]) === true);

console.log(setsMatch(findAll(null,values),[null,0]) === false);
console.log(setsMatch(findAll(undefined,values),[NaN,0]) === false);
console.log(setsMatch(findAll(0,values),[0,-0]) === false);
console.log(setsMatch(findAll(42,values),[42,"42hello"]) === false);
console.log(setsMatch(findAll(25,values),[25]) === false);
console.log(setsMatch(findAll(Infinity,values),[Infinity,-Infinity]) === false);
console.log(setsMatch(findAll("",values),["",0]) === false);
console.log(setsMatch(findAll("false",values),[false]) === false);
console.log(setsMatch(findAll(true,values),[true,"true"]) === false);
console.log(setsMatch(findAll(true,values),[true,1]) === false);
console.log(setsMatch(findAll(false,values),[false,0]) === false);

// ***************************

function setsMatch(arr1,arr2) {
	if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length == arr2.length) {
		for (let v of arr1) {
			if (!arr2.includes(v)) return false;
		}
		return true;
	}
	return false;
}
