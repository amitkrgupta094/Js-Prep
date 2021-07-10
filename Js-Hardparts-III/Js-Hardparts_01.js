// Section 2 - Objects

// Lecture 1 - Creating an Object
/*
 # Scenario I
   Lets suppose we're building a quiz game with users.
   Name: Phil
   Score: 4
   
   Name: Julia
   Score: 5
   
  # What would be the best way to store the data?
   - Use Object: Store functions with their associated data!
   - This is the principle of Encapsulation.

  # Quiz App user-stories & features:
   Quiz App can have more features
   - Ability to increase score
   - Ability to decrease score
   - Delete user
   - Log in user
   - Log out user
   - Add avatar
   - get user score
   - more...
  
  # Different Ways to create objects
  Method 1: Literal way of creating object
   -  Defining Object with Object+Functionality at once. (literal manner)
*/

// Example 1 : Literal Way
const user1 = {
  name: "Phil",
  score: 4,
  increment: function() {
    user1.score++;
  }
}

user1.increment(); // score --> 5


// Lecture 2: Object Dot Notation
/*
  # Method 2: Object Creation
    - start with an empty object.
    - use dot operator to add key & data/functionality.
*/



// Example 2: Dot Notation
const user2 = {};
user2.name = "Julia";
user2.score = 5;
user2.increment = function() {
  user2.score++;
}



// Lecture 3 : Object.create
/*
# Method 3: Object.create to create objects
   - It is a built in tool. Object.create(passedValue)
   - it gives a very fine grain control over what our object will have access to from passedValue.
   - All these methods of creating objects are not scalable and not following DRY
     principles.
*/


const user3 = Object.create(null);
user3.name = "Eva";
user3.score = 9;
user3.increment = function() {
  user3.score++;
}


// Lecture 4: Creating Objects with Functions
/*
# Method 4: Creating Objects with Functions.

  Use function to create Objects on fly.
   - Easy to reason about, more DRY but hard to add functionality.
   - But not performant in terms of memory. [As it adds functionality to every user Object.]
   
   Terrible approach ? unttainable ?
    - Copies of identical function on every object.
    - JavaScript have a great feature called "Prototype & Prototype inheritance".
    
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
