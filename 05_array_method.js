var arr = [10, 30, NaN, 30, 40, 50];
arr.indexOf(30) != -1; // true
~arr.indexOf(20); // -2 (truthy)
~arr.indexOf(NaN); // -0  (falsy)

arr.includes( 20 ); // true
arr.includes( 20 ); // true
arr.includes( 20, 3 ); // false
arr.includes( 10, -2 ); // false
arr.includes( 30, 40 ); // false
arr.includes( NaN ); // true

var nestedValues = [1, [2, 3], [[]], [4, [5]], 6];
nestedValues.flat(0); // [1, [2, 3], [[]], [4, [5]], 6]
nestedValues.flat(/*default 1*/)
nestedValues.flat(2) //[1, 2, 3, 4, 5, 6]


[1, 2, 3].map(function tuples(v) {
	return [ v * 2,  String(v * 2)];
});
// [[2, "2"], [4, "4"], [6, "6"]]


[1, 2, 3].map(function tuples(v) {
	return [ v * 2,  String(v * 2)];
}).flat();
// [2, "2", 4, "4", 6, "6"]


[1, 2, 3].flatMap(function tuples(v) {
	return [ v * 2,  String(v * 2)];
});
// [2, "2", 4, "4", 6, "6"]


[1, 2, 3, 4, 5, 6].flatMap(function dooubleEvens(v) {
	if (v % 2 == 0) {
		return [v, v*2];
	}
	else {
		return [];
	}
});
// [2, 4, 4, 8, 6, 12]


[1, 2, 3, 4, 5, 6].map(function dooubleEvens(v) {
	if (v % 2 == 0) {
		return [v, v*2];
	}
	else {
		return [];
	}
});
/* [], [2, 4], [], [4, 8], [], [6, 12] */