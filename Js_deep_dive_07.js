// Section 7: Scope 
/*
Scope System:
   - It is also called Lexical Scope in JavaScript.
   - Topics:
       - Nested Scopes
       - Hoisting
       - Closure
       - Modules
What is Scope?
  - Scope: Where to look for things.
  - With some questions
    - What we are looking for? identifiers/function identifiers.
  - Js is not an completely an interpreted language but a compiled/parsed language.
  - Some processing happens before the actual execution happens. eg: syntax error at some line.
  Compiler theory (has 4 stages):
    - Lexing 
    - Tokenisation
    - Parsing (streams of token conversion in AST)
    - Code generation (executable form same program)
    
  Marble Sorting Analogy -
   - Processing of scope and putting all identifiers into their correct bucket.
   - Buckets: Functions | blocks
   - Marbels: Identifiers.
   
  JavaScript Is 2 pass system -
   - Parsing
   - Execution
  
*/

// All variables is either getting assigned or value retrieved.
x = 42;
// console.log(y); // Reference Error





// Lecture 2: Complitation & Scope
/*
Compiler: 
  Compilation:
  
Scope Manager: (makes plan for bucket and marbel)
  Scope: 
  
  
In our processing phase, we have -
  - Scope Manager 
    - nope but I have saved this.
    - #same
    -....
  - Compiler 
      - Hey Red bucket manager, have you heard of teacher marbel?
      - Hey Red bucket manager, have you heard of otherClass marbel?
        - Compiler understands that function creates a scope, 
        It asks Scope manager to create a new scope (Blue Bucket).
        - Hey Blue bucket manager, have you have marbel called teacher?
      - same thing happens with ask function.
        
    - In Js compilation time - Scope and identifiers are first handled.
    - After compitation time - Code starts running

*/

// Red bucket - Global Scope

var teacher = "Kyle";

function otherClass() {
  var teacher = "Suzy";
  console.log("Welcome!");
}


function ask(){
  var question = "Why?";
  console.log(question);
}

otherClass(); // Welcome!
ask(); // Why?



// Lecture 3
/*
 L1
 - var teacher handled by Compilation process (LHS value, target position)
 - "kyle" is at RHS/ source position
 - Vistual Engine asks
   - Hey Scope manager, do you have target named "teacher" ?
   - We will take the value and assign it to "Teacher"
   
- L13
  - otherClass is in source poisition because we are not assigning something here.
  - Hey Global scope, I got a source position we have , we pull out function from it.
  - Execution moves to line 4 , hey scope of Otherclass, I have a target reference of teacher there? then we take the value "suzy" and assign it.
  - L5 we have console, hey scope of otherClass do we have console source ? No,
  Go one level, hey global scope do you have identifier called "Console" ?
 
*/


// Lecture 4 - Compilation and Scope Q&A
/*
 - Compiler makes plans for Scope but things do not exist yet.
 - When code executes then everything actually happens.
*/


// Lecture 5 - Code Execution: Finishing Up
/*
L14:
VM/Js Engine, Hey Red scope, I have a identifier called ask (yes)
Hey green bucket, we have target/recieving reference caslled "question"
Now we are assigning it "Why?"

Function parameter is target/recieving.

*/


// Lecture 5 - Lexical Scope Review

/*

Js Lexical scope has two pass -
 (i) Compilation & Scope Manager - Plan for scope and identifiers are made.
 (ii) Execution step - Js Engine + Scope Manager:
     Assignment happens here and things come into reality.
     
 Note:
 functions have a scope but theyre not a scope.
 Assignment happens to function parameter.
 
 
 
*/



// Lecture 6 - Compilation Review


var teacher = "Kyle";
function otherClass() {
  teacher = "Suzy";
  topic = "React";
  console.log("Welcome!");
}


otherClass(); // Welcome
teacher; // ??
topic; // ??



// Lecture 7 - Dynamic Global Variables
/*
 What is going to happen with topic variable?
 If global scope do we have target topic reference?
  Global scope says : yes (Auto Globals)
  It gets created on Run time.
Note: Do not create Auto create variables but defines them.
*/



// Lecture 8 - Strict Mode
/*
- 'use strict' mode can be used at top of your program or inside of your function.
- All stuff happens same as normal compilation phase but in execution process - when it seems the 'use strict', it says we didnt find the topic variable.
- Strict mode is always not on but we will have to add it.
- Inside of Es6 class / Es6 modules: "use strict" is enabled by default. for other parts we need to use 'use strict'.

*/

"use strict"
var teacher = "Kyle";
function otherClass() {
  teacher = "Suzy";
  topic = "React"; // ReferenceError
  console.log("Welcome!");
}


otherClass(); // Welcome
teacher; // ??
topic; // ??



// Lecture 9 - Nested Scopes
/*
 - Scopes inside of scopes.
*/



var teacher = "Kyle";

function otherClass() {
  var teacher = "Suzy";
  
  // question gets created in this scope of ask itself.
  // teacher - blue marvel
  // 
  function ask(question) {
    console.log(teacher, question);
  }
  
  ask("Why?");
}


otherClass(); // Suzy Why?
ask("?????"); // Reference Error




// Lecture 10 - undefined vs undeclared
/*
 undefined: a variable exists but no other value.
 undeclared: never formly declared in any scope (we do not have marbel for it.)
*/



// Lecture 11: Lexical Scope elevator
/*
Lexical scopes in Js.
- Imagine it as floors in a building.
*/
