// Coercion

// Lecture 1 - Abstract Operations
/*
 - These operation performs the task of Type Conversion aka Type Coercion. These are not function but algorithms that determines how coercion would happen. Anytime when we need to convert a non primitive into a primitive, we use these conceptual constructs to decide the whole process,
 
 Abstract Operations: 
 (1) ToPrimitive(hint) -
   - It takes an optional type-hint (Tell me what kind of type you like it to be.). This hint depends on operation, if it is numeric operation, hint would be a number, if it is a string based operation , hint would be a string. So hint can be anyone of these 2 - (i) number (ii) string. These algorithms are recursive in nature, It gets keep invoked until it resolved into an primitive.
   - Working on ToPrimitive()
     - hint: "number"
        - valueOf()
        - toString()
        
     - hint: "string"
        - toString()
        - valueOf()
        
    Note: valueOf() and toString() are mostly available on all non-primitive values.
    
    Note: It first tries anyone of these and checks if it evaluates into a primitive, if not then it gets passed to next function, if it is not able to generate a final primitive - it ends up as an error.

Deck: 35 - 36

   
*/





// Lecture 2 - toString
/*
 ToString: Abstract operation , It takes any value and gives representation of that in string form.
 
 
 toString operation example -
 null --> "null"
 undefined --> "undefined"
 true --> "true"
 false --> "false"
 3.14159 --> "3.14159"
 0 --> "0"
 -0 --> "0"
 
 ToString on an Object -
 It invokes ToPrimitve with hint of string.
 aka: toString() / valueOf()
 
 
 // On Array
 [] --> ""
 [1,2,3] --> "1,2,3"
 [null, undefined] --> ","
 [[],[],[],[]] --> ",,,"
 [,,,,] --> ",,,"
 
 
 Note: nulls and undefined gets left out inside of array when used with toString().
 
 
 // on Object
 {} --> "[object Object]"
 {a:2} --> "[object Object]"
 {toString(){return "X"}} --> "X"
 
 Note: you can override toString on object with you implemetation, meta programming.
 
 Use case:
 You can override your Objects toString so it gives you a stringify version of Object when you would like to see the content inside of it.
*/


// Lecture 3 - ToNumber
/*
 ToNumber abstract operation:
 Anytime we need to do numeric operation, we do this op.
 
 
 // String
 "" --> 0
 "0" --> 0
 "-0" --> -0
 " 009 " --> 9 (strips off space)
 "3.14159" --> 3.14159
 "0." --> 0
 ".0" --> 0
 "." --> NaN
 "." --> 175
 "0xaf" --> 175
 
 // Boolean
 false --> 0
 true --> 1
 null --> 0
 undefined --> NaN 
 
 
 // ToNumber on non primitive, it invokes with number hint
 
 
 - for any []/{} by default, valueOf() gets ignored and toString gets triggered.
 
 [""] --> 0
 ["0"] --> 0
 ["-0"] --> -0
 [null] --> 0
 [undefined] --> 0
 [1,2,3] --> NaN
 [[[[]]]] --> 0
 
 
 {..} --> NaN
 // We can override the toString to return something else
 
 Deck: 37-41
*/


// Lecture 4 - ToBoolean
/*
ToBoolean - Anytime when a value is not a boolean but we have a boolean operation, this happens.

It is more like lookup.


Falsy             Truthy 
""
0,-0               Anything not on falsy list
null
NaN
false
undefined

Deck: 42-48
*/



// Lecture 5 - Case of Coercion

/*
- Abstract operations are foundations of Coercion.
- Use cases (why Coercion is not bad):
  - Template string uses implicit coercion.
- How we can explicit about coercion:
  - .join() converts [Kyle says don't do this]
  - .toString() method turns value into string.
  - use String() to coerce a number to a string (Kyle uses it)
  - + operator invokes ToNumber abstract operation.
  - use Number() to make number out of something.
  - - operator is only defined for numbers, this gonna do ToNumber abstract operation.
  - !! or Boolean to covert things to a boolean.
  
Deck: 51 - 69
*/


// Lecture 6 - Boxing
/*
 - How primitive values are able to access the Object methods?
 it is called Boxing and it uses implicit coercion.
 it creats object version of an primitive value so methods get available on this.
 
 - Conversion (coercion) is important part of any language.
 
 Deck: 70 - 74
*/



// Lecture 7 - Corner Cases of Coercion
/*
 - All strings with/without space gets coverted into 0.
 Deck: 75-77
*/
