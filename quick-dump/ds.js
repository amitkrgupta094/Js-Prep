
// Concepts: JavaScript Constructor Function, Prototype Object, this , new keyword, Instances, Sharing properties and methods, dunder proto

/*
Concepts To Know:
JavaScript Constructor Function
- A function that creates an Object class
  and allows us to create an instance (object)
  really fast.
- Created objects/instances will have same properties
  and functionality as theyre created from same class/constructor function.
- Constructor functions are capatilized, It is a convention.
*/


// Example: Creating an User Constructor function
function User(firstName, lastName, age, gender) {
  // notice "this" keyword
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}


// Create instance/object
// notice the new keyword
var user1 = new User('John', 'Smith', 26, 'Male');
var user200 = new User('Jill', 'Robinson', 25, 'Female')
user1;
user200;


// this keyword: Refers to object that gets created by constructor function.


/*
Concept:
Prototype Object:
An Object that multiple other objects can refer to
get any information and functionalities they need.

Every Object has a property called dunder proto.
dunder proto and prototype Object are not same.

If an Object/Instance is not able to find any property
on itself it checks for __proto__.

If we want a property or functionality to available to
all instance/objects created by that constructor, put those on Prototype Object of Constructor function.
*/


// Put them on the ProtoObject
// Instances itself will be light and cleaner
User.prototype.emailDomain = '@facebook.com';
User.prototype.getEmailAddress = function() {
  return this.firstName + this.emailDomain;
}


user1.getEmailAddress(); // 'John@facebook.com'
user200.getEmailAddress(); // 'Jill@facebook.com'


 


