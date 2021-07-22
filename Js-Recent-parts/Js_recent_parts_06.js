// Section 6: Array Methods

// Lecture 1: find, findIndex, & includes
/*
 Array.find(..) [ES6]
 - If we have an Array that holds value and looking up
   is not easy, use it. It returns a value.
 Array.includes(..) [ES2016]
 - 
*/


var arr = [{a: 1}, {a: 2}];

arr.find(function match(v){
  return v && v.a > 1
})

// { a: 2 }


// If items is not there, It returns undefined.
// but what if we have undefined inside of array?
// use findIndex
arr.find(function match(v) {
  return v && v.a > 10;
})

// undefined


// findIndex: returns -1 if value is not there
arr.findIndex(function(v) {
  return v && v.a > 10;
})

// -1


// includes: return true or false if thing exists
// includes uses value algorithm 
// indexOf does not use value algorithmic
// includes is more argonmic
var arr2 = [10, 20, NaN, 30, 40, 50];


arr2.includes(20);


// Lecture 2: flat & flatMap
/*
 Array.flat(levelOfFlatting) :
  Flat an array
 Array.flatMap(..):
  Flat an array and map it
 
 * smooshgate
 
 Check Deck: 35-
*/

var nestedtValues = [1, [2,3], [[]], [4, [5]], 6];
nestedtValues.flat(0); // [ 1, [ 2, 3 ], [ [] ], [ 4, [ 5 ] ], 6 ]

nestedtValues.flat(); // [1,  2, 3,[], 4, [ 5 ], 6]

nestedtValues.flat(2); //  [ 1, 2, 3, 4, 5, 6 ]


// Flatten and Mapping (common in Fn programming)

[1,2,3].map(function tuples(v) {
  return [v * 2, String(v*2)]
});

// [ [ 2, '2' ], [ 4, '4' ], [ 6, '6' ] ]


[1,2,3].map(function tuples(v) {
  return [v * 2, String(v*2)]
}).flat();

// [ [ 2, '2' ], [ 4, '4' ], [ 6, '6' ] ]



// using flatMap: flatMap is always have one level flatten
// if need more level of flatten use flat()
[1,2,3].flatMap(function tuples(v) {
  return [v * 2, String(v*2)]
});

// [ 2, '2', 4, '4', 6, '6' ]


// flatMap used to add & remove the []: Deck: 38





