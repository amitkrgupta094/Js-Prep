// Section: Callbacks

/*

 Ex1:
 setTimeout takes in a callback and runs after some time.
 This program has 2 parts -
 - 1st half. (Now)
 - 2nd half. (Later)
 
 Callbacks is contiuation.
 
 Ex2: callback hell
 - People think idea of nesting but it is not really callback hell.
 - Kyle says: 
*/


// Example 1
setTimeout(function(){
  console.log("callback")
}, 1000);


// Example 2
setTimeout(function(){
  console.log("one");
  setTimeout(function(){
    console.log("two");
    setTimeout(function(){
      console.log("three");
    }, 1000)
  }, 1000)
}, 1000);


// Examples 3
// Where is nesting now? Kyle says "callback hell" is not about
// identation or nesting.
// This pattern is called Continuation passing pattern
function one(cb){
  console.log("one");
  setTimeout(cb, 1000);
}

function two(cb){
  console.log("two");
  setTimeout(cb, 1000);
}

function three(cb){
  console.log("three");
  setTimeout(cb, 1000);
}

one(function(){
  two(three);
});


// Lecture 2 - Exercises 1
/*
# Instructions

1. This exercise calls for you to write some async flow-control code. To start off with, you'll use callbacks only.

2. Expected behavior:
	- Request all 3 files at the same time (in "parallel").
	- Render them ASAP (don't just blindly wait for all to finish loading)
	- BUT, render them in proper (obvious) order: "file1", "file2", "file3".
	- After all 3 are done, output "Complete!".
  
  
  UI equivalent:
  We face this kind of problem in our UIs.
  Request 3 files and print/render them progressivly so for an end
  user it comes gracefully/sane way.
*/


function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function(){
		cb(fake_responses[url]);
	},randomDelay);
}

function output(text) {
	console.log(text);
}

// **************************************
// The old-n-busted callback way

function getFile(file) {
	fakeAjax(file,function(text){
		// what do we do here?
	});
}

// request all files at once in "parallel"
getFile("file1");
getFile("file2");
getFile("file3");

