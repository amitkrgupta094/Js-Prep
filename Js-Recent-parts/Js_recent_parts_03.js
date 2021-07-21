// Destructing : Arrays

// Lecture 1: Destructing
/*
  # Destructing:
  - Decomposing a structure into its individual parts.
  
*/


// Imagine you requested to a REST API (eg: Twitters ) and you got
// a huge Response object back, How would you extract the data from it


// ES5 way : Imperative, less readable and takes significan amount
// brain power to process this code + It also needs documentation for data
var tmp = getSomeRecords();

var first = tmp[0];
var second = tmp[1];

var firstName = first.name;
var firstEmail = first.email !== undefined ? first.email : "nobody@none.tld";

var secondName = second.name;
var secondEmail = second.email !== undefined ? second.email : "nobody@none.tld";


// Es6 Way via destructuring : Declarative
// Left hand side expression is a pattern and not an array
// Pattern describes what kind of value we are getting. pattern only account 
// data we need
// This code is self documented, it describes what value we will be getting.
var [
  {
    name: firstName,
    // Default value expression
    email: firstEmail = "nobody@none.tld"
  },
  {
    name: secondName,
    // Default value expression
    email: secondEmail = "nobody@none.tld"
  }
] = getSomeRecords();


// Lecture 2/3/4: Refactoring code using Destructuring

// Case 1: General Case
// ES5 Way: Imperative way
function data() {
  return [1, 2, 3];
}

var tmp = data();

var first = tmp[0];
var second = tmp[1];
var third = tmp[2];




// ES6 Way: Declarative
function data() {
  return [1, 2, 3];
}


// No Temporary variable needed. square bracket is pattern here
var [
     first,
     second,
     third
   ] = data();

// Case 2: If array has only 2 items
// ES5 Way: Imperative way
function data() {
  return [1, 2];
}

var tmp = data();

var first = tmp[0];
var second = tmp[1];
var third = tmp[2];




// ES6 Way: Declarative
// Destructuring pattern automatically assigns third undefined.
var [
     first,
     second,
     third
   ] = data();


// Case 3: What is array has more than 3 items
function data() {
  return [1, 2, 3, 4];
}

var tmp = data();

var first = tmp[0];
var second = tmp[1];
var third = tmp[2];




// ES6 Way: Declarative
// Destructuring pattern ignores the 4th item
var [
     first,
     second,
     third
   ] = data();



// Case 4: what if one of the position comes as undefined
function data() {
  return [1,, 3, 4];
}

var tmp = data();

var first = tmp[0];
var second = tmp[1];
var third = tmp[2];




// ES6 Way: Declarative
// Destructuring pattern assigns second variable undefined.
var [
     first,
     second,
     third
   ] = data();


// Case 5: What is we want one of the variable to have a default value


function data() {
  return [1, , 3, 4];
}

// Es5 way
var tmp = data();
var first = tmp[0];
// Using ternary here
var second = tmp[1] !== undefined ? tmp[1] : 10;
var third = tmp[2];




// ES6 Way: Declarative
// Destructuring pattern allows us to use Default value expression
var [
     first,
     second = 10,
     third
   ] = data();




// Case 6: What if one of the item is null
function data() {
  return [1, null, 3, 4];
}

var tmp = data();

var first = tmp[0];
var second = tmp[1];
var third = tmp[2];




// ES6 Way: Declarative
// Destructuring pattern only picks up when value is undefined.
// It is strict equality check for undefined.
var [
     first,
     second,
     third
   ] = data();


// Case 6: What if array has so many values which we didn't know
// and we wanted to capture it 
function data() {
  return [1, 2, 3, 4, 5, 6];
}

var tmp = data();

var first = tmp[0];
var second = tmp[1];
var third = tmp[2];
// Using slice her
var four = tmp.slice(3);




// ES6 Way: Declarative
// Destructuring pattern : Use gather/rest syntax to gather everything inside of an array
var [
     first,
     second = 10,
     third,
     ...four
     
   ] = data();


// Case 7: What if array does not have many items
function data() {
  return [1, 2, 3,];
}

var tmp = data();

var first = tmp[0];
var second = tmp[1];
var third = tmp[2];
// Using slice here but it would be an empty array
var four = tmp.slice(3);




// ES6 Way: Declarative
// Destructuring pattern :  Gather operator returns back an [] array
// Gather pattern should be used at end of the patterm
var [
     first,
     second = 10,
     third,
     ...four
     
   ] = data();


// Case 8: If you want to have reference source data
function data() {
  return [1, 2, 3,];
}

var tmp = data();

var first = tmp[0];
var second = tmp[1];
var third = tmp[2];
// Using slice here but it would be an empty array
var four = tmp.slice(3);




// ES6 Way: Declarative
// We can save source data inside of variable
// tmp get assigned to data() & this array gets destructured.
var tmp;
var [
     first,
     second = 10,
     third,
     ...four
     
   ] = tmp = data();


// Case 9: Decalaration of variable is not associated with destructring.
// It is about assignment.
function data() {
  return [1, 2, 3,];
}

var tmp = data();
var first, second, third, four;
first = tmp[0];
second = tmp[1];
third = tmp[2];
// Using slice here but it would be an empty array
four = tmp.slice(3);




// ES6 Way: Declarative
// Destructuring pattern :  Gather operator returns back an [] array
// Gather pattern should be used at end of the patterm
var tmp;
var first, second, third, four;

[
     first,
     second = 10,
     third,
     ...four
     
   ] = data();



// Case 10: Valid left side assignment is valid in destructuring aka
// we can add these values on object/array while destructuring
function data() {
  return [1, 2, 3,];
}

var tmp = data();
var o = {};
o.first = tmp[0];
o.second = tmp[1];
o.third = tmp[2];
// Using slice here but it would be an empty array
o.four = tmp.slice(3);




// ES6 Way: Declarative
// Destructuring pattern :  Same thing valid here
var tmp;
var o = {};

[
     o.first,
     o.second = 10,
     o.third,
     ...o.four
     
   ] = data();


// Array destructuring is all about assignment part.
// Case 10: tmp here have value of all the data from data()
var tmp;
var o = {};

tmp = [
     o.first,
     o.second = 10,
     
   ] = data();



// Lecture 5: Comma Separation
// Case 1: What if we want to skip certain item from an array
function data() {
  return [1, 2, 3];
}

var tmp = data();
var first = tmp[0];
// var second = tmp[1];
var third = tmp[2];
var four = tmp.slice(3);




// ES6 Way: Declarative
// Destructuring pattern : Use empty position to do the same

var tmp;

var [
     first,
     ,
     third,
     four  
   ] = tmp = data();


// Case 2: Swapping values
// One way: use block scoping with let keyword
var x = 10;
var y = 20;

{
  let tmp = x;
  x = y;
  y = tmp;
}


// Second way: destructing way
[y, x] = [x, y]


// Lecture 6: Parameter Arrays
// Case 1: Destructuring on parameter

// One way: Doing destructring inside of fn body
function data(tmp) {
  var [
    first,
    second,
    third
  ] = tmp;
}

// Second way: Doing destructring inside of fn body
function data([
  first,
  second,
third
]) {
  // ... do something
}


// Case 2: What would happen if we didn't return array, say returns a null or does not return anything.
// Es5: Type error will happen
function data() {
  return null;
}

var tmp = data();
var first = tmp[0];
var second = tmp[1];
var third = tmp[2];
var four = tmp.slice(3);




// ES6 Way: Declarative
// Destructuring pattern :We will get Type Error

var tmp;

var [
     first,
     ,
     third,
     four  
   ] = tmp = data();

// Case 3: Fix it
// Es5: Use an empty array (a fallback default)
function data() {
  return null;
}

var tmp = data() || [];
var first = tmp[0];
var second = tmp[1];
var third = tmp[2];
var four = tmp.slice(3);




// ES6 Way: Declarative
// Destructuring pattern : same way used here

var tmp;

var [
     first,
     ,
     third,
     four  
   ] = tmp = data() || [];



// Case 4: If parameter is getting passed and we want to have a fallback
// Use an empty value
function data(tmp = []) {
  var [
    first,
    second,
    third
  ] = tmp;
}

// Second way: Doing destructring inside of fn body
function data([
  first,
  second,
third
] = []) {
  // ... do something
}

// Note: Always have fallback in your code while destructuring to avoid a Type Error

// Lecture 7: Nested Array Destructuring
// Case 1: Nested array
// Es5 way
function data() {
  return [1, [2,3], 4];
}

var tmp = data() || [];
var first = tmp[0];
var tmp2 = tmp[1];
var second = tmp2[0];
var third = tmp2[1];
var fourth = tmp[2]




// ES6 Way: Declarative
// Destructuring pattern : use the same principles

var tmp;

var [
     first,
     [
       second,
       third
     ],
     four  
   ] = tmp = data() || [];

// Case 2: What if we have an undefined in our array: use a default value

// Es5 way
function data() {
  return [1, undefined, 4];
}

var tmp = data() || [];
var first = tmp[0];
var tmp2 = tmp[1] || [];
var second = tmp2[0];
var third = tmp2[1];
var fourth = tmp[2]




// ES6 Way: Declarative
// Destructuring pattern : use the same principles

var tmp;

var [
     first,
     [
       second,
       third
     ] = [],
     four  
   ] = tmp = data() || [];
