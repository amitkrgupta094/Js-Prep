// Section 4: Object Destructuring

// Lecture 1:  Object Destructuring
/*
 - source:target=value pattern.
 - in normal object:
 -  var o = {
    prop: value,
    (target: source)
   }
 - In destructuring
   var { 
   prop: value
   source: target
   } = o;
*/


// Case 1: Normal Object Destructuring
// ES5 way: Imperative
function data() {
  return {a: 1, b: 2, c: 3};
}


var tnp = data();
var first = tmp.a;
var second = tmp.b;
var third = tmp.c;


// OD way: Use object destructuring pattern ({}). Position does not matter
// so we need to tell source/property name with respective variable name.
// source: target
var {
  b: second,
  a: first,
  c: third
} = data();



// Case 2: When have don't have certain key say c

// ES5 way: Imperative : it returns undefined
function data() {
  return {a: 1, b: 2};
}


var tnp = data();
var first = tmp.a;
var second = tmp.b;
var third = tmp.c;


// OD way: it returns undefined
var {
  b: second,
  a: first,
  c: third
} = data();


// Case 3: When have extra stuff

// ES5 way: Imperative : extra stuff gets ignored
function data() {
  return {a: 1, b: 2, c: 3, d: 4};
}


var tnp = data();
var first = tmp.a;
var second = tmp.b;
var third = tmp.c;


// OD way: it gets ignored
var {
  b: second,
  a: first,
  c: third
} = data();




// Case 4: Collecting certain keys

// ES5 way: Imperative : it returns undefined
function data() {
  return {a: 1, b: 2, c:3, d:4};
}


var tnp = data();
// some imperative code here : loop and filter


// OD way: Use Object rest
var {
  b: second,
  a: first,
  ...third
} = data();



// Case 5: Default Value

// ES5 way: Imperative : use ternary to check and set a default value
function data() {
  return {a: 1, b: 2,c:3, d: 4};
}


var tnp = data();
var first = tmp.a !== undefined ? tmp.a : 42;
var second = tmp.b;
var third = tmp.c;


// OD way: set default value
var {
  b: second,
  a: first = 42,
  c: third
} = data();


// Lecture 2: Object Assignment Destructuring

// Case 1: declaration of vars not important to destructuring

// ES5 way: Imperative
function data() {
  return {a: 1, b: 2,c: 3};
}


var tmp = data();
var first, second, third;
first = tmp.a;
second = tmp.b;
third = tmp.c;


// OD way: Look at syntax here , use of {} makes js think it's a block.
// So we need wrap it inside of ()
 ({
  b: second,
  a: first,
  c: third
} = data());

// If we want to save this inside of a variable then we don't ()
tmp = {
  b: second,
  a: first,
  c: third
} = data();


// Lecture 3: Object Default Assignment

// Case 1: default value

// ES5 way: Imperative
function data() {
  // return {a: 1, b: 2,c: 3};
  return;
}


var tmp = data() || {};
var first, second, third;
first = tmp.a;
second = tmp.b;
third = tmp.c;


// OD way: use || {}
 var {
  b: second,
  a: first,
  c: third
} = data() || {};


// Case 2: What if we want to name source same as target

// ES5 way
function data() {
  // return {a: 1, b: 2,c: 3};
  return;
}

var tmp = data() || {};
var a = tmp.a ? tmp.a : 42;
var b = tmp.b;


// ES6 way + default value
var {
  a = 42, 
  b
} = data() || {};


// Lecture 4: Nested Object Destructuring
// What is object has sub-object to it


function data() {
  return {a: 1, b: {
    c: 3,
    d: 4
  }};
}


var tmp = data() || {};
var a = tmp.a;
var b = tmp.b || {};
var c = b.c;
var d = b.d;


// Es6 way

var {
  a,
  b: {
    c,
    d
  } = {}
} = data() || {};


// Lecture 5: Default Assignment QnA

var o = {
  a: {
    b: 2,
    c: 3
  }
};

var o2 = {
  a: {},
}

var o3 = {};


// destructure: default value object will not invoked.

var {
  a: {
    b 
    c 
  } = {
    b: 10,
    c: 20
  }
} = o1;


// Lecture 6: Parameter Objects
function data(tmp = {}) {
  var {
    a,
    b
  } = tmp;
}


// Destructuring way
function data({
  a,
  b
} = {}, x) {
  // ..
}

// invoking it
data({a: 1, b: 2}, 42);


// Lecture 7: Nested Objects & Array destructing

// With array destructing we use position to show source
// With object destructing we use key

var obj = {
  a: 1,
  b: {
    x: 2
  },
  c: 3
};

// In case of object we can capture value in different variables
// it is useful when we have different objects
var {
  a,
  b: b,
  b:{x: W} = {} ,
  c
} = obj;



