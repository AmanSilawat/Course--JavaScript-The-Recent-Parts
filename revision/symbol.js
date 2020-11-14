// 1. make a class iterable using Symbole.iterator
class Sequence {
    constructor(start = 0, end = Infinity, interval = 1) {
        this.start = start;
        this.end = end;
        this.interval = interval;
    }
    [Symbol.iterator]() {
        let nextIndex = this.start;
        return {
            next: () => {
                if (nextIndex <= this.end) {
                    let result = { value: nextIndex, done: false }
                    nextIndex += this.interval;
                    return result;
                }
                return { value: undefined, done: true };
            }
        }
    }
};

let evenNumbers = new Sequence(2, 10, 2);

for (const num of evenNumbers) {
    console.log(num);
}

// output: 
// 2
// 4
// 6
// 8
// 10

// 2. --------------
let evenNumbers2 = new Sequence(2, 10, 2);
let iterator = evenNumbers2[Symbol.iterator]();

let result = iterator.next();

while( !result.done ) {
    console.log(result.value);
    result = iterator.next();
}

// same output: 
// 2
// 4
// 6
// 8
// 10