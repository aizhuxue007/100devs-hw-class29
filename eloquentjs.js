/** Exercises */

class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(vector) {
        return new Vec(this.x + vector.x, this.y + vector.y);
    }

    minus(vector) {
        return new Vec(this.x - vector.x, this.y - vector.y);
    }

    get length() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
}


// console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// // → Vec{x: 3, y: 5}
// console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// // → Vec{x: -1, y: -1}
// console.log(new Vec(3, 4).length);
// // → 5

class Group {
    // Your code here.
    constructor() {
        this.items = [];
    }

    add(value) {
        if(!this.items.includes(value)) this.items.push(value);
    }

    delete(value) {
        this.items = this.items.filter(item => !(item === value));
    }

    has(value) {
        return this.items.includes(value);
    }

    static from(iterable) {
        const group = new Group();

        for (const item of iterable) {
            group.add(item);
        }
        
        return group;
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}

class GroupIterator {
    constructor(group) {
        this.currentPosition = 0;
        this.group = group;
    }

    next() {

        if (this.currentPosition >= this.group.items.length) return {done: true};

        
        let value = {
            value: this.group.items[this.currentPosition]
        }
        
        this.currentPosition++;
        return {value, done: false}
    }
}

// let group = Group.from([10, 20]);
// console.log(group.has(10));
// // → true
// console.log(group.has(30));
// // → false
// group.add(10);
// group.delete(10);
// console.log(group.has(10));
// // → false

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }

let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call
console.log(map['hasOwnProperty']);
// → true