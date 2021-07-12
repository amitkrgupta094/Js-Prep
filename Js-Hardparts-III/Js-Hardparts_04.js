// Section 5: Default Prototype Chain

// Lecture 1: Objects default __proto__
/*
  # __proto__:
  - Where hidden property by default links to? Object.prototype.
  - Object is a function-object combo. We do not assign / declare it.
    Js defines it in memory. It gets called and when it gets called with
    new Keyword creates an object. this function have this property
    called prototype and it has property called "hasOwnProperty".
  - __proto__ links to Object.prototype.
*/
const obj = {
  num: 3
};

obj.num; // 3
obj.hasOwnProperty("num"); // true

Object.prototype;



// Lecture 2: Function.prototype and Array.prototype


/*
 # Array & Function
 - When JavaScript runs, It also defines Function which is function +
   object combo, It has a prototype property and it has many functions in it.
   {toString: fn, call: fn, apply: fn, bind: fn}
 - when we do multiplyBy2.toString(); , Js checks if it is available
 as a property inside of multiplyBy2 function, It does not find it.
 Then it looks at __proto__ property of Fn object which links to
 Function object , It checks its prototype property, It does find it and uses it.
 - in case of multiplyBy2.hasOwnProperty, Look up happens like this
  check in multiplyBy2 properties? Could not find it
  check in multiplyBy2.__proto__ aka Function.prototype? could not find it
  check in Function.__proto__ aka Object.prototype? found it.
  
  This look up process of finding a value of property/method is called
  Prototype inheritance in JavaScript.
  
  
  Note:
  - We can override this __proto__ property.
  - Inheritance does not happen in JavaScript but Prototype Inheritance or
    look-up property check.
  - Change: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto
  - One last thing on the prototype chain: it only works in one direction. So although all arrays have access to methods of the Object prototype, objects do not have access to methods of the Array prototype.
 
*/

function multiplyBy2(num) {
  return num*2;
}

multiplyBy2.toString();

Function.prototype; // {toString: fn, call: fn, apply: fn, bind: fn}
multiplyBy2.hasOwnProperty("score"); // false
Function.prototype.__proto__; 


// Lecture 3: Pair Programming OOJS [DONE]
/*
  Unit6: csx.codesmith.io
  practice: csbin.io/OOP
*/

// Check these Articles:
/*
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
*/

