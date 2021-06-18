


// Type Systems: Types

// Lecture 1 - Primitive types
/* 
- In JavaScript, everything is an Object - false.
- Always follow spec. Spec says JavaScript have primitive types.

Primitive Types
  - undefined (have only one value undefined)
  - string (primitive string)
  - number
  - boolean (true/false)
  - object
  - symbol 
  - bigint
  - null
  
Things behave like types 
  - undeclared
  - function (subtype of object type aka callable object)
  - array
  
- Variable does not have a type, value does.

*/


// Lecture 2 - typeof operator (finding type of a value in a varible), it returns a string.
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

typeof doesntExist; // "undefined"

var v = null;
typeof v; // "object"

v = function(){};
typeof v; // "function"

v = [1,2,3];
typeof v; // "object"



// Lecture 3 - BigInt
// Theyre not IEEE numbers and different than normal numbers.

var v = 42n;
typeof v;



// Lecture 4 - undefined vs undeclared
/*
 - They are not same.
 - undefined: there is a def a variable and at the moment it does not have a value.
 - undeclared: It never been created in any scope we have access to.
 - typeof a operator is only operator that can act on variables thatre not even defined.
 
 TDZ (unitialized)
 - Certain variables don't get initialized as undefined.
 
 Deck: 22-24
*/


// Lecture 5 - special values
/*
- NaN ("not a number") - IEEE 754 spec
  - Special sentiel value that refers to an invalid number.
  - Number 0 should not be used as refer to absense of a numeric value.
  - IEEE defined a special bit pattern and called it NaN.
  - IEEE said NaNs are not equal to itself. (it does not have identity property)
  - To determine if value is NaN
    - isNaN(): but it has corner cases. isNaN coerces values to a number before it checks for NaN.
    - Number.isNaN() - It does not do any type of coercion.
  - type of NaN is a "number". Write testing for it.
  - Deck: 25-26
*/


var myAge = Number("0o46"); // 38
var myNextAge = Number("39"); // 39
var myCatsAge = Number('n/a'); // NaN
myAge - "my son's age"; // NaN

myCatsAge === myCatsAge; // false

// isNaN() utility to check for NaN
isNaN(myAge); // false
isNaN(myCatsAge); // true
isNaN("my son's age"); // true - Ooops! should not have happened. isNaN coerces stuffs before evaluating this.


// Number.isNaN() utility to check for a number
Number.isNaN(myCatsAge); // true
Number.isNaN("my son's age"); // false





// Lecture 6: Negative Zero 
/*
 Special value:
 - Exists in IEE-754, It requires to have a language to have this. 0 with sign bit on.
 - In Early version of JS, Spec tried to hide it thinking it won't need this value.
 - -0 can be used in places where we need extra bit to determine up/down or ahead/behind.
 - utility to check for -0
   - Object.is() : Always works.
   - Math.sign(): but its buggy, use fixed version
 - Usecase:
   - We use -0 in games, trading etc.
   - Deck: 27-30
 
*/


var trendRate = -0;
trendRate === -0; // true

trendRate.toString(); // "0" OOPS!
trendRate === 0 ; // true OOPS!
trendRate < 0; // false
trendRate > 0; // false


// Es6 Object.is() utitlity to check for -0
Object.is(trendRate, -0); // true
Object.is(trendRate, 0); // false


// Math.sign utility but it fails at -0/0
// it returns -0 or 0

Math.sign(-3); // -1
Math.sign(3); // 1
Math.sign(-0); // -0
Math.sign(0); // 0

// Fix for Math.sign()
function sign(v){
  return v !== 0 ? Math.sign(v) : Object.is(v, -0) ? -1 : 1;
}


sign(-3); // -1
sign(3); // 1
sign(-0); // -1
sign(0); // 1


// Use case
function formatTrend(trendRate) {
  var direction = (trendRate < 0 || Object.is(trendRate, -0) ? "Down" : "Up");
  return `${direction} ${Math.abs(trendRate)}`;
}

formatTrend(-3); // 'Down 3'
formatTrend(3); // 'Up 3'
formatTrend(-0); // 'Down 0'
formatTrend(0); // 'Up 0'


// Lecture 7 - Exercise
/*
# Polyfill for `Object.is(..)`

In this exercise, you will define a polyfill for `Object.is(..)`. No cheating and looking it up online!

## Instructions

1. `Object.is(..)` should take two parameters.

2. It should return `true` if the passed in parameters are exactly the same value (not just `===` -- see below!), or `false` otherwise.

3. For `NaN` testing, you can use `Number.isNaN(..)`, but first see if you can find a way to test without usage of any utility?

4. For `-0` testing, no built-in utility exists, but here's a hint: `-Infinity`.

5. If the parameters are any other values, just test them for strict equality.

6. You cannot use the built-in `Object.is(..)` -- that's cheating!

## Polyfill Pattern

**NOTE:** Since your JS environment probably already has `Object.is(..)`, to test your polyfill you'll have to first unconditionally define it (no `if` guard), and then add the `if` guard when you're done.

To define a polyfill, it looks like this:

```js
if (!Object.is) {
	Object.is = function ObjectIs(..) { .. };
}
```
*/

// My solution fails at 0,-0 & -0, 0
// if(!Object.is || true) {
//   Object.is = function ObjectIs(v, y) {
//     if(v !== v && y !== y) {
//       return true
//     }
    
//     if((Math.sign(1/v) === -1) && (Math.sign(1/y) === -1)) {
//       return true;
//     }
    
//     return v === y;
//   }
// }


// TODO: define polyfill for `Object.is(..)`



// tests:
console.log(Object.is(42,42) === true);
console.log(Object.is("foo","foo") === true);
console.log(Object.is(false,false) === true);
console.log(Object.is(null,null) === true);
console.log(Object.is(undefined,undefined) === true);
console.log(Object.is(NaN,NaN) === true);
console.log(Object.is(-0,-0) === true);
console.log(Object.is(0,0) === true);

console.log(Object.is(-0,0) === false);
console.log(Object.is(0,-0) === false);
console.log(Object.is(0,NaN) === false);
console.log(Object.is(NaN,0) === false);
console.log(Object.is(42,"42") === false);
console.log(Object.is("42",42) === false);
console.log(Object.is("foo","bar") === false);
console.log(Object.is(false,true) === false);
console.log(Object.is(null,undefined) === false);
console.log(Object.is(undefined,null) === false);


// Lecture 8 - Type Check Solution
// Kyles solution

if(!Object.is || true) {
  Object.is = function ObjectIs(x, y) {
    var xNegZero = isItNegZero(x);
    var yNegZero = isItNegZero(y);
    
    if(xNegZero || yNegZero) {
      return xNegZero && yNegZero;
    }
    else if(isItNaN(x) && isItNaN(y)) {
      return true
    }
    else {
      return x === y;
    }
  
    // **************
    function isItNegZero(v) {
      return v === 0  && (1 / v) === -Infinity;
    }
    
    function isItNaN(v) {
      return v != v;
    }
  }
}


// Lecture 9 - Fundamental Objects (Built-In Objects or Native Functions)

/*
Object version of primitive types.
  - Are they types? No
  - Use new:
     - Object()
     - Array()
     - Function()
     - Date()
     - RegExp()
     - Error()
     
  - Don't use new:
    - String()
    - Number()
    - Boolean()
    
  - Deck: 31-33
*/

var yesterday = new Date("March 6, 2019");
yesterday.toUTCString(); // 'Tue, 05 Mar 2019 18:30:00 GMT'

var myGPA = String(3.54);
myGPA; // "3.54"
