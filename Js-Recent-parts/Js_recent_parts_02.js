// Section 2: Strings

// Lecture 1 - Template Strings (interpolated Literals) aka Interpoliterals

/*
 ES6/ES2015: Template Strings
 
 Problems Template String solves:
  - Concatenation involving variables.
    - String starts with backtick and ends with backtick.
    - Now we can drop an expression inside of ${}.
    - It creates an primitive string.
    - It does not depend on string continuation. these automatically
    allows you to break your strings.
    - Template literal is decalrative.
    
 Approaches:
 Imperative Approach:
  You define every part of your code and it is prone to more bugs.
  You do have more control though.
  
 Declarative Approach:
 You do not care about noise and define your code more. Less buggy.
*/



// Example 1
var name = "Kyle Simpson";
var email = "getify@gmail.com";
var title = "Teacher";

// Imperative approach
var msg = "Welcome to this class! Your " + title + " is "
+ name + ", contact: " + email + ".";

msg; // Welcome to this class! Your Teacher is Kyle Simpson, contact: getify@gmail.com.

// declarative approach
var msgnew = `Welcome to this class! Your ${title} is ${name}, contact: ${email}.` // Welcome to this class! Your Teacher is Kyle Simpson, contact: getify@gmail.com.


// Lecture 2 - Tagged Templates
/*
 - Tag function takes in string, process it and returns a new string.
   It is called tagged template string.
 - Use cases
  - Used in various internationalisation/localisation
  - User input processing
  - Various string processing we can use in.
    - Avoid cross site scripting.
  - There are 100s of tagged function out there and use it.
  
  - Helper function breaks the main string into two arrays
   - String arrays
   - Value arrays 
   - string arrays will always have an extra item in it.
*/
let formatCurrency = function(strings, ...values){
  // ...
  console.log(strings, values);
  var str = "";
  for(let i = 0; i < strings.length; i++) {
    if(i > 0) {
      if(typeof values[i-1] == "number") {
        str += `$${values[i-1].toFixed(2)}`;
      }
      else {
        str += values[i-1];
      }
    }
    
    str += strings[i];
  }
  return str;
}

var amount = 12.3;
var msg = 
    formatCurrency
`The total for your
order is ${amount}`;

// The total for your order is $12.30
msg;


// Lecture 3 - Applying Tagged Templates
/*
 Kyle made a small Tag function to do -
  - To see whats inside of an object
  - To see error object stack trace object.
 People have gone too far using these tag function -
   - Regular expression with massive size: Regex tag function
   - Programming language in Tagged function.
      - JSX ---> returns actual DOM string.
Deck: 13-14
*/


// Example 1: Advanced exmaple
// Example 2: Error message: use of Example 1


// Lecture 4 & 5 - Tagged Template Exercise
// Define upper tag function and drop in strings, process it.

// My Solution
// Exaplanation:
/*
 You get two arrays - String arrays, Value array
 Loop over string array and add string to str variable
 Value array: while looping over it, as it will always have one less item than String array
 check if i > 0 and then add it to str variable + logic you want to apply on values data & concatanate on it.
 return final string.
*/
function upper(strings,...values) {
  var str = "";
  for(let i = 0; i < strings.length; i++) {
    if(i > 0) {
      // str += values[i-1].toUpperCase();
      // Kyles expansion
      str += String(values[i-1]).toUpperCase();

    }
    
    str += strings[i];
  }
  
  return str;
}

var name = "kyle",
	twitter = "getify",
	topic = "JS Recent Parts";

console.log(
	upper`Hello ${name} (@${twitter}), welcome to ${topic}!` ===
	"Hello KYLE (@GETIFY), welcome to JS RECENT PARTS!"
); // true


// Lecture 6 -  Padding & Trimming
/*
 JS have two methods on String prototype:
 String Padding  (ES2017)
 String Trimming (ES2019)
 
 Question to ask:
 Are we doing on both side or one side?
 
 str.padStart(HowManyCharactersYouWant, str )
  - HowManyCharactersYouWant [Required]: What length you want to pad to.
  - str [Optional]: By default it uses Ascii 32 character space. we can override it though.
  
 str.padEnd(HowManyCharactersYouWant, str )
  - Same
  
  str.trim(); // Old method
  str.trimStart() // New
  str.trimEnd(); // New
  
 - Pads start/end of the string. always pulls.
 - trimStart() & trimEnd() only trims whitespaces (space, tab, newline)
 
*/


var str = "Hello";
str.padStart(5); // "Hello"
str.padStart(8); // "   Hello"
str.padStart(8, "*"); // "***Hello"
str.padStart(8, "12345"); // "123Hello"
str.padStart(8, "ab"); // "abaHello";

str.padEnd(5); // "Hello"
str.padEnd(8); // "Hello   "
str.padEnd(8, "*"); // "Hello***"
str.padEnd(8, "12345"); // "Hello123"
str.padEnd(8, "ab"); // "Helloaba";





