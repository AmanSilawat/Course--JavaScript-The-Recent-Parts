/*
SYNTAX DESTRUCTURING
var o = {
	prop: value,
	target: source
}
*/

// objcet Destructuring
function data1() {
	return {a: 1, b: 2, c: 3};
}

var {
	a: first,
	b: second,
	c: third
} = data1();
console.log(first, second, third);
// 1 2 3


// objcet Destructuring: swap a to b
function data2() {
	return {a: 1, b: 2, c: 3};
}

var {
	b: second,
	a: first,
	c: third
} = data2();
console.log(first, second, third);
// 1 2 3




// objcet Destructuring: return array is less
function data3() {
	return {a: 1, b: 2};
}

var {
	b: second,
	a: first,
	c: third
} = data3();
console.log(first, second, third);
// 1 2 undefined




// objcet Destructuring: use spread operator
function data4() {
	return {a: 1, b: 2, c: 3, d: 4};
}

var {
	b: second,
	a: first,
	...third
} = data4();
console.log(first, second, third);
// 1 2 {c: 3, d: 4}





// objcet Destructuring: default
function data5() {
	return {b: 2, c: 3, d: 4};
}

var {
	b: second,
	a: first = 40,
	...third
} = data5();
console.log(first, second, third);
// 40 2 {c: 3, d: 4}




// objcet Destructuring: variable overloading
function data6() {
	return {a: 1, b: 2, c: 3, d: 4};
}

var first, second;
// history overloding *********************************
// SYNTAX error because this is not valid syntax ******
// curlibrasas mean this is a block not a destructuring
({
	a: first,
	b: second
} = data6());

console.log(first, second);
// 40 2 {c: 3, d: 4}





// objcet Destructuring: variable overloading
function data7() {
	return {a: 1, b: 2, c: 3, d: 4};
}

var tmp;
var first, second;
tmp = {
	a: first,
	b: second
} = data7();

console.log(first, second, tmp);
// 1 2 {a: 1, b: 2, c: 3, d: 4}




// objcet Destructuring: default
function data8() {
	// return {a: 1, b: 2, c: 3, d: 4};
	return;
}

var {
	a: first,
	b: second
} = data8() || {};

console.log(first, second);
// undefined undefined




// objcet Destructuring: var and prop are same
function data9() {
	return {a: 1, b: 2, c: 3, d: 4};
}

var {
	a,	// same name variable and prop name use one
	b	// same name variable and prop name use one
} = data9() || {};

console.log(a, b);
// 1 2





// // objcet Destructuring: var and prop are same
function data10() {
	return {b: 2, c: 3, d: 4};
}

var {
	a = 10,
	b
} = data10() || {};

console.log(a, b);
// 10 2





// objcet Destructuring: Nested
function data11() {
	return {
		aa: 1,
		bb: {
			cc: 3,
			dd: 4
		}
	};
}

var {
	aa,
	bb: {
		cc,
		dd
	}
} = data11() || {};

// console.log(aa, bb, cc, dd); // bb is not defined
console.log(aa, cc, dd);
// 1 3 4




// // objcet Destructuring: Nested + default
function data12() {
	return {
		aa: 1
	};
}

var {
	aa,
	bb: {
		cc,
		dd
	} = {}
} = data12() || {};

// console.log(aa, bb, cc, dd); // bb is not defined
console.log(aa, cc, dd);
// undefined undefined


// ========================================


// // objcet Destructuring: parameter position
function data13({
	a,
	b
} = {}) {
	console.log(a, b); // 1, 2
}

data13({a: 1, b: 2});




// // objcet Destructuring: second argument not a obj.
function data14({
	a,
	b
} = {}, x) {
	console.log(a, b, x) // 1 2 50
}

data14({a: 1, b: 2}, 50);



// ========================================

// // objcet Destructuring: parameter destructuring
function data13({
	a,
	b
} = {}) {
	console.log(a, b); // 1, 2
}

data13({a: 1, b: 2});







// ===========================
// Named argument without destructuring
function lookupRecored1(store = "person-records", id = -1) {
	console.log(store, id); // {id: 42} -1
}
lookupRecored1({id: 42})




// Named argument with destructuring
function lookupRecored2({
	store = "person-records",
	id = -1
}) {
	console.log(store, id); // person-records 42
}
lookupRecored2({id: 42})