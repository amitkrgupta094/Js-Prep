// Section IV: Philosophy of Coercion


// Lecture 1
/*
Tips:
- Make your types and value in the types plain and obvious.
- A quality JS program embraces coercion, make types very clear so corner cases gets resolved.


Deck: 78-82
*/


// Lecture 2 - Culture of Learning
/*
How Jr devs learn?
Deck: 83
*/


// Lecture 3 - Code Communication Q&A

/*
 Communicated Ideas in code -
 - Code Comments, Comments should answer "WHY/HOW but not What"
 
 Deck: Nothing
*/


// Lecture 4 - Implicit Coercion

/*
- Developers think that Implicit Coercion is magic/bad.
- We should think implicit coercion as Abstract.
- It hides unnecessary details and making reader focused.
- Not all implicit coercion is not bad.
- < does alphanumeric comparision, if one of these are number then it would coerce other as number too. 
- Be a critical analytical thinker, be an engineer and not a code monkey.

Deck: 84-88
*/



// Lecture 5 - Understanding Features
/*
 Useful features of JS:
 - Useful: when the reader is focused on whats important.
 - Dangerous: when the reader can't tell what will happen.
 - Better: when the reader understands the code.
 
*/




// Lecture 6 - Exercise: Coercion Exercise


// string validator (wrong)
function isValidName(name) {
  // must be a string
  // must be non empty
  // must contain non-whitespace of at least 3 chars
  
  
  let typeOfName = typeof name === "string";
  let checkEmptiness = name.length > 0 ;
  let checkLength = name.split(" ").join("").length > 0;
  
  return typeOfName && checkEmptiness && checkLength;
}





// string validator

function isValidName(name) {
  if(typeof name == "string" && name.trim().length > 3) {
    return true;
  }
  
  return false;
}


function hoursAttended(attended, length) {
  if(typeof attended == "string" && attended.trim() != "") {
    attended = Number(attended);
  }
  
  if(typeof length == "string" && length.trim() != "") {
    length = Number(length);
  }
  
  if(attended == "number" && typeof length == "number" && attended >= 0 && length >= 0 && Number.isInteger(attended) && Number.isInteger(length) && attended <= length) {
    return true;
  }
  
  return false;
}

// tests:
console.log(isValidName("Frank") === true);
console.log(hoursAttended(6,10) === true);
console.log(hoursAttended(6,"10") === true);
console.log(hoursAttended("6",10) === true);
console.log(hoursAttended("6","10") === true);

console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);
console.log(hoursAttended("",6) === false);
console.log(hoursAttended(6,"") === false);
console.log(hoursAttended("","") === false);
console.log(hoursAttended("foo",6) === false);
console.log(hoursAttended(6,"foo") === false);
console.log(hoursAttended("foo","bar") === false);
console.log(hoursAttended(null,null) === false);
console.log(hoursAttended(null,undefined) === false);
console.log(hoursAttended(undefined,null) === false);
console.log(hoursAttended(undefined,undefined) === false);
console.log(hoursAttended(false,false) === false);
console.log(hoursAttended(false,true) === false);
console.log(hoursAttended(true,false) === false);
console.log(hoursAttended(true,true) === false);
console.log(hoursAttended(10,6) === false);
console.log(hoursAttended(10,"6") === false);
console.log(hoursAttended("10",6) === false);
console.log(hoursAttended("10","6") === false);
console.log(hoursAttended(6,10.1) === false);
console.log(hoursAttended(6.1,10) === false);
console.log(hoursAttended(6,"10.1") === false);
console.log(hoursAttended("6.1",10) === false);
console.log(hoursAttended("6.1","10.1") === false);
