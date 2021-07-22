// Section 8: Regex

// Lecture 1: Look Ahead & Behind

/*
 RegExp Improvements: [ES2018]
 - Look Behind
*/


// Look Ahead (Assertion : when I match a thing, I also want that immediate thing also matches.)
// Beg. and end of string should be anchors

var msg = "Hello World";

msg.match(/(l.)/g); // [ 'll', 'ld' ]


msg.match(/(l.)$/g); // [ 'ld' ]

// Look ahead (?=val) [positive Look ahead]
msg.match(/(l.)(?=o)/g); // [ 'll' ]

// Look ahead (?!val) [negative Look ahead]
msg.match(/(l.)(?!o)/g); // [ 'lo', 'ld' ]


// Look Behind + (?<=) & - (?<!)

// procedeed by e and no e
msg.match(/(?<=e)(l.)/g) // [ 'll' ]
msg.match(/(?<!e)(l.)/g) // [ 'lo', 'ld' ]


// Lecture 2: Named Capture Groups (Rewatch it after done with regex basics)


// Understand Capture group first
// () are capturing operator in regex.
// We can have name for capture groups.


// Lecture 3: dotall Mode: a new flag s, it turns on dotall mode so search can happen across the line.
// another new flag added called u make your regex to be aware of other unicoded strings.

var msg = `
The quick brown fox
jumps over the 
lazy dog.
`;


msg.match(/brown.*over/); // null

msg.match(/brown.*over/s); 
// ['brown fox\njumps over']




// Lecture 4/5: Exercises and Solution

// The Power of a Smile
// by Tupac Shakur
var poem = `
The power of a gun can kill
and the power of fire can burn
the power of wind can chill
and the power of a mind can learn
the power of anger can rage
inside until it tears u apart
but the power of a smile
especially yours can heal a frozen heart`;

for (let power of powers(poem)) {
	console.log(power);
}
// a gun: kill
// fire: burn
// wind: chill
// a mind: learn
// anger: rage
// smile: heal


function *powers(poem) {
	var re = /(?<=power of )(?<thing>(a )?\w+).*?(?<=can )(?<verb>\w+)/gs;
	var match;
	while (match = re.exec(poem)) {
		let { groups: { thing, verb } } = match;
		yield `${thing}: ${verb}`;
	}
}







