
// Section 2 - Getting started with Regular Expressions

// Lecture 1 - History of Regular Expression
/*
 Ex: 
 - Remove punctution marks from a sentence.
 - Certain criteria of a password.
 - How to find frequency of a word inside of sentence.
 - Extracting certain part of a URL.
 
 Regex are a tool to solve programming problems.
 History -
 - Developed by a Mathematician in 1950 named Stephen Keene.
 - It then got added to Unix text processing utilities.
 - Standard of Regex is maintained by POSIX.
 - First time Regex inside of Perl in 1908s.
 - In 1997 Philip Hael developer PCRE for use in many modern tools.
*/


// Lecture 2 - Getting started with Regex
/*
 - Regex is all about defining pattern using syntax of a language.
 
 JavaScript:
 - Regular Expressions are oBjects in Javascript.
 - There are two ways to create RegeEx Objects.
 - Once we have a regex object, we can then use it with one of the methods on Regex Constructor or the String Object wrapper.
*/

// Syntax 1 : Constructor way
let regex1 = new RegExp("hello");

// syntax 2 : Literal way
let regex2 = /world/;


// Example1: Regex in wild
let txt = "Programming courses always Starts with a hello world example. S "

// Using with methods on Regex constructor | String object wrapper

// test() method on Regex constructor
console.log(regex1.test(txt)); // true
console.log(regex2.test(txt)); // true



// Lecture 3 - Using Regular Expressions In JavaScript
/*
 Apart from test() method we have bunch of other methods available.
 
 Regular Expression Object - 2 Methods (optional toString())
 String Wrapper Object - 4 methods
 
 - Javascript developer prefer literal way of writing Regex pattern.
 
*/


// exec - returns an Array + extra information
// it returns an array of all matches of a string we pass in.
// It also provides what index the match occured.
let regex3 = /hello/;
console.log(regex3.exec(txt)); 
/*
["hello", index: 41, input: "Programming courses always starts with a hello world example hello.", groups: undefined]
*/


// Methods available on string
/*
- Js String have an Object wrapper to it which has methods to it.
*/

// match() - same as exec
console.log(txt.match(regex1));
/*
["hello", index: 41, input: "Programming courses always starts with a hello world example hello.", groups: undefined]
*/


// match() - It returns the index.
console.log(txt.search(regex1)); // 41


// replace() - Allows us to replace some text with another text.
// replace returns a new sring than changing original string.
console.log(txt.replace(regex1, "hi")); // 'Programming courses always starts with a hi world example.'


// split() - It creates an array
// delimiter passed to it gets eliminated from array items
// use case: taking a string and splitting on spaces.
console.log(txt.split(regex1)); // [ 'Programming courses always starts with a ', ' world example.' ]





// example on split()
let regex4 = /\s/;
console.log(txt.split(regex4)); /* [
  'Programming', 'courses',
  'always',      'starts',
  'with',        'a',
  'hello',       'world',
  'example.'
]*/

// toString() method also available on Regex Expression Object , not useful.


// Lecture 4 -  Regular Expressions Flags or Modifier
/*
 - These flags changes how a pattern would behave.
 - How to use it with literal regex
   /pattern/flags;
   
 - How to use it with constructor regex
 - new RegExp("pattern", "flags")
 
 Frequent flags:
 g - global: match more than one occurance.
 i - case insensitive match, case does not matter.
 m - multi-line match
 
 We can combine these flags together.
*/

// finding "s "
let regex5 = /s\s/g;
console.log(txt.match(regex5)); // [ 's ', 's ', 's ' ]


// finding "S "
let regex6 = /S\s/g;
console.log(txt.match(regex6)); // null


// finding "S " || "s "
let regex7 = /S\s/gi;
console.log(txt.match(regex7)); // [ 's ', 's ', 's ' ]

// exec method with global flags
// it can be piped on it to find different occurance of a matched text
let regex8 = /s\s/gi;
console.log(regex8.exec(txt));
/*
[
  's ',
  index: 18,
  input: 'Programming courses always Starts with a hello world example. S ',
  groups: undefined
]
*/
console.log(regex8.exec(txt));
/*
[
  's ',
  index: 25,
  input: 'Programming courses always Starts with a hello world example. S ',
  groups: undefined
]
*/


// Lecture 5 -  Regexpal
/*
Site to use for regex: https://www.regexpal.com/

*/

