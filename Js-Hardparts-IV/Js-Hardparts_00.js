// Section 1: Introduction

// Lecture 1: Introduction
/*
 Will Sentance: Runs Codesmith, NY.
 
 Agenda:
 - Basics of Functional Programming.
 - Imagine a QuiZ App:
   - There are a tons of data.
   - Functionalities getting applied to it.
   
 - Problem?
   - One Fn1 can change data and can end up changing
     it in way to affect other parts of code. (Talking at scale)
     
 - Probable Solution?
   - Compartmentalise your code using functions by having these
    big chunk of code to be written in these miny code packets.
    
   - Problem?
    - Yup, even your function can end up changing other parts of 
      code. (By changing global variables)
      
   - Solution? 
     - We need a style of coding which avoids above problems.
     - Write tiny functions which have no consequence except
       on that line it's running.It won't affect other parts of code.
      
    So tool: Functional Programming
*/



// Lecture 2: Functional Programming Benifits & Concepts
/*
 Benefits:
 - Very readable code.
 - Easier to debug.
 - Easier to add features.
 
 
 How do we do it? [Techniques]
 - rejoin these 'lines' code into fully sized tasks.
 - make it easy to reuse these functions all over the place.
 - ensure that the tiny functions truly self-contained.
 
 Techniques:
  - Higher Order Function
  - Function Composition
  - Pure Functions, immutability of state
  - Closure
  - Function Decoration
  - Partial Application
  - Currying
  
  Note: Read the deck again.
*/

// Beautiful Functional Code (It's like to-do list of an App.)
/*
 Just looking at below code,
 1 - Get player name
 2 - Get first name
 3 - Proper case it
 4 - add User label on it
 5 - Create a template (html) using it
 6 - Render it inside of DOM.
*/
pipe(
  getPlayerName,
  getFirstName,
  properCase,
  addUserLabel,
  createUserTemplate
)([{name: 'will', score: 3}])

// And render it to the web page
