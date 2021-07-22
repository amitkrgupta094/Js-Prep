
// Section 9: Async-Await

// Lecture 1: Async Functions
/*
 A-A:
 - Promises chaning is not nice.
 - Async- Function replaces promise. Generator function
   can pause itself based on yield keyword.
  
 - runner is library utility that enables generator
   to run and pause.
   
 - Asycn-await = runner + yield, shipped in ES2017
 
 Deck to check: 58, 59 (Sync-Async Pattern but it used to have runner like utility)
*/


// Lecture 2/3: Async Await Exercise + Async Iteration
/*
 We are requesting 3 files and requesting them
 concurrently and printing them sequentially.
 We do want to print them as soon as they come back.
*/


function getFile(file) {
  return new Promise(function(resolve) {
    fakeAjax(file, resolve)
  });
}


async function loadFiles(files) {
  // request all files concurrently
  // var promise1 = getFile(files[0]);
  // var promise2 = getFile(files[1]);
  // var promise3 = getFile(files[2]);
  
  // map is better
  var prs = files.map(getFile)
  
  // for(let pr of prs) {
  //   console.log(await pr);
  // }
  
  // forEach does not work, await keyword can't show up
  // inside of regular function. await keyword
  // should be used inside of async function.
  prs.forEach(function output(pr) {
    console.log(await pr);
  })
  
  // print in order, sequentially
}



loadFiles("file1", "file2", "file3");

// **************************************


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


// Lecture 6: Async Function Problems
/*
 - Kyle talks about problem in Lecture 5, That we can not nest promise in deeply nested function. Kyle suggest to use Fasy library.
 - Other Problems with Async functions:
   - await only works with Promises but there are other
    repersentation of future value like Custom Promise that does not have then function on it,
    Thunk: A fn repersentation of a future value.
   - Scheduling (Starvation):
     - Micro Task queue , Promise queue in micro task.
       It can make promises to keep added to MTQ, leading
       other function to not run. It is called Starvation.
   - Async Function can't be cancelled. [External Cancelation] 
 
 Kyle says he uses Generators when hitting these blocks.
 It is based on cancelation token.fetch have this token too.
 Kyles Lib: CAF
*/



// Lecture 7: Async Generators with yield 

/*
 - Await operation is a pulling operation.
   Generator can push things.
 - In Es2019 they created async generators.
   It is a new function type - It is a async function and 
   generator
   Yield - for Pushing
   await - pulling
   
   deck: 68, 69, 70, 71
*/



// Lecture 8: Async Generator Iteration
/*
 - async generator when get called, it gives back a special
   iterator.
 - Iterator seems to be create Promise with no done property. for..of loop won't work. They introduced for await loop to solve it.
 deck: check rest of the deck files.
*/



// Section 10: Wrap Up
/*
 - If you're feeling overwhelemed with section 7/9 then it's fine.
 "Hang on tight and enjoy the ride!"
*/
