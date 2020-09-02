// Destructuring

// decomposing a structure into its individual parts


/*Destructuring: imperative
var tmp = getSomeRecords();

var first = tmp[0];
var second = tmp[1];

var firstName = first.name;
var firstEmail = first.email !== undefined ?
	first.email :
	"nobody@none.tld";

var secondName = second.name;
var secondEmail = second.email !== undefined ?
	second.email :
	"nobody@none.tld";


//Destructuring: declarative
var [
	{
		name: firstName,
		email: firstEmail = "nobody@none.tld"
	},
	{
		name: secondName,
		email: secondEmail = "nobody@none.tld"
	}
] = getSomeRecords();
*/


//Destructuring: declarative
function data1() {
	return [1, 2, 3, 4, 5];
}

var [
	first,
	second = 10,
	third,
	...fourth
] = data1();

console.log(first, second, third, fourth);
// 1 2 3 [4, 5]



// switch
//Destructuring: add on objcet
function data2() {
	return [1, 2, 3, 4, 5];
}

var o = {};
[
	o.first,
	o.second = 10,
	o.third,
	...o.fourth
] = data2();

console.log(o);
// {first: 1, second: 2, third: 3, [4, 5]}




//Destructuring: add on array
function data3() {
	return [1, 2, 3, 4, 5];
}

var arr = [];
[
	arr[3],
	arr[5] = 10,
	arr[10],
	...arr[12]
] = data3();

console.log(arr);
// (13) [empty × 3, 1, empty, 2, empty × 4, 3, empty, Array(2)]




//Destructuring: skip one element
function data4() {
	return [1, 2, 3, 4, 5];
}

var [
	first,
	,
	third,
	...fourth
] = data4();

console.log(first, second, third, fourth);
// 1 3 [4, 5]




//Destructuring: not return a empty array
function data5() {
	return null;
}

var tmp = data5() || [];
var [
	first,
	,
	third,
	...fourth
] = tmp;

console.log(first, second, third, fourth);
// undefined undefined undefined []




//Destructuring: in function
function data6(tmp) {
	var [
		first,
		second,
		third,
	] = tmp;
}

//Destructuring: on parameter
function data6([
		first,
		second,
		third,
]) {
	// ..
}




//Destructuring: in function type 2
function data7(tmp = []) {
	var [
		first,
		second,
		third,
	] = tmp;
}

//Destructuring: on parameter type 2
function data8([
		first,
		second,
		third,
]) {
	// ..
	console.log(first, second, third)
	// 1 2 3
}
data8([1, 2, 3])





//Destructuring: on parameter default value
function data9([
		first,
		second,
		third,
] ) {
	// ..
	console.log(first, second, third)
	// 1 undefined undefined
}
data9([1])




//Destructuring: on parameter default value
// ??????????????????????????
function data10([
		first,
		second,
		third,
] = [] ) {  //default = []
	// ..
	console.log(first, second, third)
	// 1 undefined undefined
}
data10([1])




//Destructuring: nested array
function data11() {
	return [1, [2, 3], 4 ];
}

var [
	first,
	[
		second,
		third
	] = [], //default array
	fourth
] = data11();

console.log(first, second, third, fourth);
//1 2 3 4





//Destructuring: nested array
function data12() {
	return null;
}

var tmp;
var [
	first,
	[
		second,
		third
	] = [], //default array
	fourth
] = tmp = data12() || [];

console.log(first, second, third, fourth);
// undefined undefined undefined undefined
