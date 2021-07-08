// Section 2 - Objects

// Lecture 1 - Creating an Object
/*
 Lets suppose we're building a quiz game with users.
 What would be the best way to store the data?
 - store functions with their associated data!
 - this is principle of encapsulation.
 
 Quiz App can have more features:
 - Ability to increase score
 - Ability to decrease score
 - Delete user
 - Log in user
 - Log out user
 - Add avatar
 - get user score
 - more...
*/

// Example 1 : Object literal way to create objects
const user1 = {
  name: "Phil",
  score: 4,
  increment: function() {
    user1.score++;
  }
}


user1.increment(); // score --> 5


// Lecture 2: Object dot notation to create objects


const user2 = {};
user2.name = "Julia";
user2.score = 5;
user2.increment = function() {
  user2.score++;
}



// Lecture 3 : Object.create to create objects
/*
 - it gives a very fine grain control over what our object will have access to.
 - All these methods of creating objects on scale is not DRY.
*/


const user3 = Object.create(null);
user3.name = "Eva";
user3.score = 9;
user3.increment = function() {
  user3.score++;
}


// Lecture 4: Creating Objects with Functions
/*
 - Use function to create Object on fly.
 - Easy to reason about, more DRY.
 - But not performant in terms of memory. [As it adds functionality to every user Object.]
 - Terrible approach ? unttainable ?
  - Copies of identical function on every object.
  - JavaScript have a great feature called "Prototype & Prototype inheritance"
 Object terms:
 - Property: value attached on it
 - Method: function attached on it.
*/

function userCreator(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function() {
    newUser.score++;
  }
  
  return newUser;
}

const user4 = userCreator('Amit', 23);
const user5 = userCreator('Rohit', 21);
user4.increment();



