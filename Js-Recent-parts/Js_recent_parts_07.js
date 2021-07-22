// Section 7: Iterators and Generators

// Lecture 1: Iterators
/*
  Iterators:
  When we have a data source from which you want to consume
  data one at a time. This pattern is called Iterators.
  You create an object and do ,next() and it gives you
  next data value every time you call it.
  
  why it matters for JavaScript?
  - In es6, all basic data structure are made Iteratable.
    Data structure that can be iterated over.
  - Iterables: string, array , sets, map, typed array.
*/


// Built In Iterators: Symbol.iterator: finds meta location on string
// and produces an iterator from it.
// .next() gives a Iterator result, an object {value: something, done: false}

// Iterators does not produce an error.

var str = "Hello";
var world = ["w", "o", "r","l","d"];

var it1 = str[Symbol.iterator]();
var it2 = world[Symbol.iterator]();

it1.next(); // { value: 'H', done: false }
it1.next(); // { value: 'e', done: false }
it1.next(); // { value: 'l', done: false }
it1.next(); // { value: 'l', done: false }
it1.next(); // { value: 'o', done: false }
it1.next(); // { value: undefined, done: true }
it1.next(); // { value: undefined, done: true }


it2.next(); // { value: 'w', done: false }



// Lecture 2: Declarative Iterators

// We can now iterate over strings, one imperative approach would be this
// But it's not declarative
var str2 = "Hello Again";

for(
  let it = str2[Symbol.iterator](), v, result;
  (result = it.next()) && !result.done && (v = result.value || true);
) {
  console.log(v);
}

// 'H' 'e' 'l' 'l' 'o' ' ' 'A' 'g' 'a' 'i' 'n'

// For..of
// In Es6 they introduced for..of loop to consume an iterator
// for..of takes iteratbles and iterates over 

var str3 = "Hello";
var it3 = str[Symbol.iterator]();

for(let v of it3) {
   console.log(v);
}

// "H" "e" "l" "l" "o"


// Or you can directly iterate over iteratbles
for(let v of str3) {
   console.log(v);
}

// "H" "e" "l" "l" "o"


// Spread Operator: ... (consumes an iterables)
var letters = [...str3];
letters;

// [ 'H', 'e', 'l', 'l', 'o' ]

// Note: for..of and ... are syntactic support for Iterator Protocol.



// Lecture 3:  Data structure without iterators

// Not all data structure have iterators. eg: Object, It tries to find
// Symbol.iterator and does not find it and resolves in TypeError

var obj = {
  a:1,
  b:2,
  c:3
};


// for(let v of obj) {
//   console.log(v); 
// }

// TypeError!



// Lets make our own Iterator for object, we add [Symbol.iterator]
// function on it

var Obj2 = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]: function(){
    var keys = Object.keys(this);
    var index = 0;
    return {
      // Arrow function because we want to lexically get this
      next: () => 
      (index < keys.length) ? {done: false, value: this[keys[index++]]}:
      {done: true, value: undefined}
    };
  }
};

// Now we can use ... or for...of
[...Obj2]; // [ 1, 2, 3 ]



// Lecture 4: Generators
/*
  Generators:
  A function that generates an Iterator function.
  On invoking this, It produce an Iterator.
  And this iterator have .next on it.
  yield allows us to generate value every time we call next().
  
  return inside of Generator:
  It does not keep the last value. So always yield values.
  Never use return inside of Generator function.
*/


function *main() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}

var it4 = main();

it4.next(); // { value: 1, done: false }
it4.next(); // { value: 2, done: false }
it4.next(); // { value: 3, done: false }
it4.next(); // { value: 1, done: true }
it4.next(); // { value: undefined, done: true }


[...main()];
// [1, 2, 3] <- 4 is missed because of use of return.



// Define Iterator on Object (Declarative)
// Now we can iterate over keys and values.
// We can now combine them to create tuple (enteries)
var Obj3 =  {
  a: 1,
  b: 2,
  c: 3,
  *[Symbol.iterator](){
    for(let key of Object.keys(this)) {
      yield this[key];
    }
  }
};

[...Obj3];

// [ 1, 2, 3 ]


// Lecture 5/6: Iterator & Generator Exercise
// var numbers = {
//   // ...
// }


// should print 0..100 by 1s
// for(let num of numbers) {
//   console.log(num);
// }



// should print 6...30 by 4s
// console.log("My lucky numbers are: ____");

// Hint
//  [...numbers[Symbol.iterator](??)]


// My take/solution
var numbers = {
  *[Symbol.iterator](init = 0, step = 1, end = 100) {
     for(let i = init; init < end + 1; init = init + step)      {
        yield init;
     }
  }
}


// should print 0..100 by 1s
for(let num of numbers) {
  console.log(num);
}



// should print 6...30 by 4s
console.log(`My lucky numbers are: ${[...numbers[Symbol.iterator](6,4,30)]}`);


// Kyles Soln: Check from slides/notes




