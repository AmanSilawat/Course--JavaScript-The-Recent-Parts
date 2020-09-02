// Tamplate Literals ----------

// Condition

`\`` === '`' // --> true



// Tagged Tamplets

let person = 'Aman';
let age = 26;

function myTag(strings, personExp, ageExp) {
	strings; // ["That ", " is a ", "", raw: Array(3)]
	personExp; // Aman
	ageExp; // 26

	return `${strings[0]}${personExp}${strings[1]}${ageExp}`;
}

let output = myTag`That ${ person } is a ${ age }`;
output; // That Aman is a 26



// Tagged Tamplets

function formatCurrency(strings, ...values) {
	var str = '';

	for (var i = 0; i < strings.length; i++) {
		if (i>0) {
			if (typeof values[i-1] == 'number') {
				str += `$${values[i-1].toFixed(2)}`
			}
			else{
				str += values[i-1];
			}
		}
		str += strings[i];
	}
	return str;
}

var amount = 12.3;
var strData = '20';
var msg = formatCurrency`The total for your order is ${amount} ${strData}`;
console.log(msg) //The total for your order is $12.30 20



// Tamplets Exercise

function upper(strings, ...values) {
	let str = '';

	for (var i = 0; i < strings.length; i++) {
		if (i > 0) {
			str += String(values[i-1]).toUpperCase();
		}
		str += strings[i]
	}
	return str;
}

var name = "kyle",
	twitter = "getify",
	topic = "JS Recent Parts";

var res = upper`Hello ${name} (@${twitter}), welcome to ${topic}!`



console.log( res === "Hello KYLE (@GETIFY), welcome to JS RECENT PARTS!"); // true



// String Padding / String Trimming

var str = "hello";

str.padStart(5);			//'hello'
str.padStart(8);			//'   hello'
str.padStart(8, "*"); 		//'***hello'
str.padStart(8, "12345"); 	//'123hello'
str.padStart(8, "ab"); 		//'abahello'

str.padEnd(5);				//'hello'
str.padEnd(8);				//'hello   '
str.padEnd(8, "*"); 		//'hello***'
str.padEnd(8, "12345"); 	//'hello123'
str.padEnd(8, "ab"); 		//'helloaba'



// Trim

var str = "   some stuff   \t\t";

str.trim();			// "some stuff"
str.trimStart();	// "some stuff   "
str.trimEnd();		// "   some stuff"




//  ----------