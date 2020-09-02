// Iterators + Generators

var str = "Hello";
var word = ["w","o","r","l","d"];

var it1 = str[Symbol.iterator]();
var it2 = word[Symbol.iterator]();

it1.next(); // {value: "H", done: false}
it1.next(); // {value: "e", done: false}
it1.next(); // {value: "l", done: false}
it1.next(); // {value: "l", done: false}
it1.next(); // {value: "o", done: false}
it1.next(); // {value: undefined, done: true}

it2.next(); // {value: 'W, done: true}



// ---------
// string, array, set, map, typeArray is iterable
var str = "Hello";
var it = str[Symbol.iterator]();

for ( let v of it) {
	console.log(v); // "H" "e" "l" "l" "o" 
}

for ( let v of str) {
	console.log(v); // "H" "e" "l" "l" "o" 
}

var letters = [...str] // "H","e","l","l","o" 
// [...] synthatic support for first class build-in citizen in js



// data Structure WITOUT iterator -----
var obj = {
	a: 1,
	b: 2,
	c: 3
};

for (let v of obj) {
	console.log(v);
}
// TypeError: obj is not iterable


// MAKE A OBJECT ITERABLE -----
var obj = {
	a: 1,
	b: 2,
	c: 3,
	[Symbol.iterator]: function() {
		var keys = Object.keys(this);
		var index = 0;
		return {
			next: () =>
			(index < keys.length) ?
				{done: false, value: this[keys[index++]] } :
				{done: true, value: undefined }
		};
	}
};
[...obj];




// Generators ================================
function *main() {
	yield 1;
	yield 2;
	yield 3;
	return 4;
}

var it = main();

it.next();  // { value: 1, done: false }
it.next();  // { value: 2, done: false }
it.next();  // { value: 3, done: false }
it.next();  // { value: 4, done: true }

[...main()];

// this yield keyword to allows a generator to produce additional values every time it's iterated over.



// Generators on object  -----
var obj = {
	a: 1,
	b: 2,
	c: 3,
	*[Symbol.iterator]() {
		for (let key of Object.keys(this)){
			yield this[key];
		}
	}
};
[...obj];

// Object.entries() - which gives us an array of all those tuples.