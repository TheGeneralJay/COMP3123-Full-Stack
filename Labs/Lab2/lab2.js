// Exercise 1 
// Rewrite the following code block using ES6 syntax.
// Ex. const, let, arrow function, template literals, for..of

/* 

function gretter(myArray, counter) {
    var greetText = "Hello";

    for (var index = 0; index < myArray.length; index++) {
        console.log(greetText + myArray[index]);
    }
}

gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

*/

// Arrow function / let.
let greeter = (names, counter) => {
    // const.
    const greetText = "Hello";

    for (let wrestler in names) {
        // Template literals.
        console.log(`${greetText}, ${names[wrestler]}!`);
    } 
};

console.log("-------------------------------");
console.log("Exercise 1");
console.log("-------------------------------");
greeter(["Randy Savage", "Ric Flair", "Hulk Hogan"], 3);

// Exercise 2:
// Use destructuring assignment syntax and the spread operator.
// Write a function that capitalizes the first letter of a string.

let capitalize = givenString => {
    let [...names] = givenString;
    
    names[0] = names[0].toUpperCase();
    
    return names.join("");
}

console.log("-------------------------------");
console.log("Exercise 2");
console.log("-------------------------------");
console.log(capitalize("fooBar"));
console.log(capitalize("nodeJs"));

// Exercise 3:
// Using array.proto.map, create a function to use the capitalize method in Exercise 2
// to upper case the first character of each color in the following array.

const colors = ["red", "green", "blue"];

let capitalizedColors = () => colors.map(color => capitalize(color));

console.log("-------------------------------");
console.log("Exercise 3");
console.log("-------------------------------");
console.log(capitalizedColors());

// Exercise 4:
// Using array.proto.filter, create a function that will filter out all of the values
// in the array that are less than twenty.

var values = [1, 60, 34, 30, 20, 5];

let filterLessThan20 = () => values.filter(val => val < 20);

console.log("-------------------------------");
console.log("Exercise 4");
console.log("-------------------------------");
console.log(filterLessThan20());

// Exercise 5:
// Using array.proto.reduce, calculate the sum and product of a given array.

var array = [1, 2, 3, 4];

let calculateSum = () => array.reduce((total, num) => total + num);


let calculateProduct = () => array.reduce((total, num) => total * num);

console.log("-------------------------------");
console.log("Exercise 5");
console.log("-------------------------------");
console.log(calculateSum());
console.log(calculateProduct());

// Exercise 6:
// Using ES6 syntax for class and subclass using extends to create
// a Sedan subclass which derives from the Car class.
// Parameters for Car class is model and year.
// Parameters for subclass is model, year, and balance.
// Use the super keyword in the Sedan subclass to set the model and name in base Car constructor.

class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    details() {
        return `Model: ${this.model} Engine ${this.year}`;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }

    info() {
        return `${this.model} has a balance of $${this.balance.toFixed(2)}`
    }
}

console.log("-------------------------------");
console.log("Exercise 6");
console.log("-------------------------------");
const car2 = new Car("Pontiac Firebird", 1976);
console.log(car2.details());
// Subclass - extends Car super class.
const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());


