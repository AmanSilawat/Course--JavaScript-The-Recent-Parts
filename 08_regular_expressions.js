var msg = "Hello World";

msg.match(/(l.)/g);
// ["ll", "ld"]

msg.match(/(l.)$/g);
// ["ld"]

msg.match(/(l.)(?=o)/g);
// ["ll"]

msg.match(/(?<=e)(l.)/g);
// ["ll"]

msg.match(/(?<!e)(l.)/g);
// ["lo", "ld"]

msg.match(/.(l.)/g);
// ["ell", "ll"]

msg.match(/([jkl])o Wor\1/);
// ["lo Worl", "l"]

msg.match(/(?<cap>l.)/).groups;
// {cap: "ll"}

//more...




// regex excercise ===================================

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