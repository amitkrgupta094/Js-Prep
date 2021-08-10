// Section 1: Start
/*
 Questions to ask?
 - What is even regular expression is and how you'd use it?
 - How would you use Regex inside of JavaScript?
 - How you would test Regular Expressions?
 - Topics:
   - Defining Patterns 
   - Metacharacters
   - Character Sets
   - Repetition
   - Groupings
   - Anchrored Expressions
   - Lookahead Assertions
   - Using Unicode
   - Useful Regular Expressions
*/


// Lecture 2: Regular Expressions and short history
/*
 Problems Regular Expressions solves:
 - Anything related to detecting a pattern.
 - Concept was first developed in 1950 by Stephen Keene.
 - Its one of the implementations inside of Unix Text processing utilities.
 - Regular Expressions was first standarised by POSIX standard.
 - A version of regular expressions was used in PERL in the 1980s.
 - In 1997 Philip Hazel developed PCRE for use in many modern tools.
 - Regular Expression syntax is almost same for all languages.
*/





// Lecture 3: Getting Started
/*
 - Regular expression is a way to define a pattern.
 - We learn synax to define a regular expressions.
 
 JavaScript:
 - In JavaScript Regular Expressions are objects.
 - Ways to create Regular Expressions:
   1 - Literal Syntax
   2 - RegExp() Constructor
   
 - Once we defined your Regex:
   - You can use it with one of the methods available on RegExp Constructor
   - String Object wrapper
*/


let regex1 = new RegExp("hello");
let regex2 = /world/;
let regex3 = /worlds/;

let txt = "Programming course always starts with a hello world S ";

// returns if pattern has matched

// "hello" is part of string txt
console.log(regex1.test(txt)); // true

// "world" is part of string txt
console.log(regex2.test(txt)); // true

// "worlds" is not part of string txt
console.log(regex3.test(txt)); // false


// Lecture 4: Regular Expression Methods
/*
 How to use Regular Expression?
 Regex Object has 2 methods to be used on textual data.
 - test()
 - exec()
 - toString() is also a method available on RegExp Object
   returns string of regular expression syntax. not useful.
 String wrapper has 4 mthods to be used on textual data.
 - match()
 - search()
 - replace()
 - split()
*/

let regex4 = /hello/;
let regex5 = /world/;

// test() method

// exec() method : returns an array of all matches + additional properties
console.log(regex4.exec(txt)); // Array[]


// When strings are created in JS they have String object wrapper
// Which makes many methods available to even literal strings.


// match() method : returns an array of all matches + additional properties
// same as exec() method
console.log(txt.match(regex4)); // Array[]

// search() method: returns an index of a match
console.log(txt.search(regex4)); // 40


// replace(reg, text) method : purpose is to allow us to replace to matched string with some other text. It returns a new string.
// 'Programming course always starts with a hi world'
console.log(txt.replace(regex4, "hi"))


// split(reg | str) method: to turn strings into an array
console.log(txt.split(regex4)); // [ 'Programming course always starts with a ', ' world' ]



// Lecture 5: Regular Expression Flags
/*
 How we use Flags with literal and constructor regex?
 - /pattern/flags;
 - new RegExp("pattern", "flags");
 
 Most common used flags:
 g - global match more than one occurance.
 i - case insensitive match, case does not matter
 m - multiline match
 
 flags can be combined together. eg: /gi or /ig or /mgi or /igm
*/


let regex6 = /s\s/;
console.log(txt.match(regex6)); // 's ' + details

let regexGlobalFlag = /s\s/g;
console.log(txt.match(regexGlobalFlag)); // [ 's ', 's ' ]

let regexGlobalCaseFlags = /s\s/gi;
console.log(txt.match(regexGlobalCaseFlags)); // [ 's ', 's ', 'S ' ]


// exec() method with global flag, It gives first match
// You can call again and it gives next match and so on
// ((behaves like a iterator object))

let regexGlobalFlagWithExec = /s\s/g;
console.log(regexGlobalFlagWithExec.exec(txt)); // 's '
console.log(regexGlobalFlagWithExec.exec(txt)); // 's '
console.log(regexGlobalFlagWithExec.exec(txt)); // null

let regexGlobalCaseFlagsWithExec = /s\s/gi;
console.log(regexGlobalCaseFlagsWithExec.exec(txt)); // 's '
console.log(regexGlobalCaseFlagsWithExec.exec(txt)); // 's '
console.log(regexGlobalCaseFlagsWithExec.exec(txt)); // 'S '
console.log(regexGlobalCaseFlagsWithExec.exec(txt)); // null 



// Lecture 6: Regex Pal: tool to practice and test regex




// Section 2: MetaCharacters

// Lecture 1: Introduction
/*
 Characters:
 - Patterns are build using characters,Engine checks charcater by character.
 - if global flag is set, it looks for more word.
 - Meta Characters:
   Regular expressions are made of meta characters.
   eg: ^$.*+?=!:|\/()[]{}
*/




// Lecture 2: Wildcard  (The .)
/*
 The .:
 - It is a period.
 - It reperesents a single character, It reperesents almost all character except non printable charctare \n,etc.
 - \t (tab key) matches.
*/


let regexWildCard = /h.t/g;
let txt2 = "how it that so hot? h t hoot h  t"

console.log(txt2.match(regexWildCard )); // [ 'hat', 'hot', 'h t' ]




// Lecture 3: Escaping Metacharacters
/*
MetaCharacters: ^$.*+?=!:|\/()[]{}
What to do when we want to have literal character and not metacharacter?
- backslash character + charcater

What if we are looking for a backslash ?
\\
*/

let regexEscape = /d\./g;
let txt3 = "This could be the first word.";
console.log(txt3.match(regexEscape)); // ['d.']


// Lecture 4: Matching Control Characters
/*
 What if we want to match literal value of tab?
 use control characters.
 Control Characters:
 \t - tab
 \v - vertical tab
 \r - carriage return
 \n - newline
*/

// finds if tab is there between h and g
let tabRegex = /h\tt/g; 
let newLineRegex = /h\nt/g;

let txt4 = "hpt h  t hit h";
console.log(txt4.match(tabRegex)); // null
console.log(txt4.match(newLineRegex)); // null

// https://stackoverflow.com/questions/3091524/what-are-carriage-return-linefeed-and-form-feed

// Lecture 5: Exercise
/*
Using the provided array, create a second array that only includes the numbers with the 801 area code. (The area code is the first 3 numbers.)
*/

let phoneNums = ["801-766-9754", "801-545-5454", "435-666-1212", "801-796-8010", "435-555-9801", "801-009-0909", "435-222-8013", "801-777-6655"];

let areacodeRegex = /801/;
let phoneNumsWith801 = phoneNums.filter(el => !el.search(areacodeRegex));

phoneNumsWith801 ; // [ '801-766-9754', '801-545-5454', '801-796-8010', '801-009-0909', '801-777-6655' ]
// Note: If 801 comes in middle, it will also pick it up. Current solution does not consider that case
