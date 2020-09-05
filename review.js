// Tab Tamplate literal
function yourAge(strings, ...val) {
	console.log(strings)
	console.log(val)
}
yourAge`String number: ${ 1 }, strings : ${ 10}`;

// indexOf Boolean Hacking
var arr = [1, 2, 3, 4];
arr.indexOf( 3 ); // 2
arr.indexOf( 10 ); // -1
~arr.indexOf( 10 ); // 0

arr.includes( 3, -2 ); // true


// iterators: build in iterators
var str = "Hello";
var it = str[Symbol.iterator]();
var it2 = str[Symbol.iterator]();

console.log( it.next() ); // {value: "H", done: false}
console.log( it.next() ); // {value: "e", done: false}
console.log( it.next() ); // {value: "l", done: false}
console.log( it.next() ); // {value: "l", done: false}
console.log( it.next() ); // {value: "o", done: false}
console.log( it.next() ); // {value: "undefined", done: true}

for (let v of it2) {
	v;
}
//output: 
//H
//e
//l
//l
//o



// MAKE A OBJECT ITERABLE -----
var obj1 = {
	a: 1,
	b: 2,
	c: 3,
	[Symbol.iterator]: function() {
		var keys = Object.keys(this);
		console.log(keys)
		var index = 0;
		return {
			next: () =>
			(index < keys.length) ?
				{done: false, value: this[keys[index++]] } :
				{done: true, value: undefined }
		};
	}
};
console.log( [...obj1] );