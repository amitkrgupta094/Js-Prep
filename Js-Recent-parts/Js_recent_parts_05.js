// Section 5: More Destructuring

// Lecture 1: Named Arguments

/*
 - Practice Array and Object destructuring.
 - If I write a function with more than 2 param
   use Named Argument. (check more about it.)
*/


// Pattern: Named Argument (In JS we don't have it but we can accompolish this)


// Example 1
function lookupRecord(store = "person-records", id= -1) {
  // ..
}


function lookupRecord({
  store = "person-records",
  id = -1
}) {
  // ...
}


lookupRecord({id: 42});


// Lecture 2: Destructuring & Restructuring
/*
 - You have an object which have some defaults.
   like an ajax call. we can define settings separately
   and combine all objects using an utility. (Deck 26)

 - Deck 26 is very imperative. Kyle introduces Destructuring
   and Restructuring. (Deck: 27, 28)
   
 - Deck: 26-
*/


// Lecture 3 & 4: Ex and Solutions

var defaults = {
	topic: "JavaScript",
	format: "Live",
	slides: {
		start: 0,
		end: 100
	}
};

fakeAjax("http://get-the-workshop.tld",handleResponse);


// *******************************************************


function handleResponse({
  topic = "JavaScript",
  format = "Live",
  slides = {
    start = 0,
    end: 100
  }
  ...otherProps
} = {}) {

	TestCase({
		topic, format
    slides: {
    start, end
  },
  ...otherProps
	});

}

function TestCase(data) {
	console.log(
		data.topic == "JS Recent Parts" &&
		data.format == "Live" &&
		data.slides.start === 0 &&
		data.slides.end == 77
	);
}


// *******************************************************


function fakeAjax(url,cb) {
	// fake ajax response:
	cb({
		topic: "JS Recent Parts",
		slides: {
			end: 77
		}
	});
}


