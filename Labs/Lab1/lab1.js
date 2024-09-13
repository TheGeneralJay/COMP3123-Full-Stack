// Exercise 1:
// Write a JS program to capitalize the first letter
// of each word of a given string.

let wordCapitalizer = function(string) {
    let newString = "";
    let currentChar = "";
    for (i = 0; i < string.length; i++) {
        if (i == 0) {
            currentChar = string[i].toUpperCase();
        } else {
            currentChar = string[i];
        }
        
        if (string[i - 1] == " ") {
            currentChar = string[i].toUpperCase();
        }

        newString += currentChar;
    }
    console.log(newString);    
}

console.log("------------------");
console.log("EXERCISE 1: ")
wordCapitalizer("the quick brown fox");

// Exercise 2:
// Find the largest of three given integers.

let largestNum = function(num1, num2, num3) {
    console.log(Math.max(num1, num2, num3));
}

console.log("------------------");
console.log("EXERCISE 2: ");

largestNum(1, 0, 1);
largestNum(0, -10, -20);
largestNum(1000, 510, 440);

// Exercise 3:
// Move last three characters to the start of a given string.
// String length must be >= 3.

let scrambleWord = function(string) {
    let stringLen = string.length;
    let movedLetters = "";
    let returnedString = "";
    if (stringLen >= 3) {
        movedLetters += string[stringLen - 3];
        movedLetters += string[stringLen - 2];
        movedLetters += string[stringLen - 1];
        
        returnedString = movedLetters;

        for (i = 0; i < stringLen - 3; i++) {
            returnedString += string[i];
        }

        console.log(returnedString);
    } else {
        console.log(string);
    }    
}

console.log("------------------");
console.log("EXERCISE 3: ");
scrambleWord("Python");
scrambleWord("JavaScript");
scrambleWord("Hi");

// Exercise 4:
// Find the types of a given angle.
// Angles:
// Acute = 0-90 degrees.
// Right = 90 degrees.
// Obtuse = 90-180 degrees.
// Straight = 180 degrees.

let findAngle = function(degrees) {
    if (degrees >= 0 && degrees < 90) {
        console.log("Acute Angle");
    } else if (degrees == 90) {
        console.log("Right Angle");
    } else if (degrees >= 91 && degrees < 180) {
        console.log("Obtuse Angle");
    } else if (degrees == 180) {
        console.log("Straight Angle");
    }
}

console.log("------------------");
console.log("EXERCISE 4: ");
findAngle(47);
findAngle(90);
findAngle(145);
findAngle(180);

// Exercise 5:
// Write a JS program to find the maximum possible sum
// of some of its k consecutive numbers given
// an array of positive integers.

let maxSum = function(numbers, amt) {
    let res = 0;
    let sum = 0;

    for (i = 0; i < amt - 1; i++) {
        sum += numbers[i];
    }

    for (i = amt - 1; i < numbers.length; i++) {
        sum += numbers[i];

        if (sum > res) {
            res = sum;
        }

        sum -= numbers[i - amt + 1];
    }

    console.log(res);
}

console.log("------------------");
console.log("EXERCISE 5: ");
maxSum([1, 2, 3, 14, 5], 2);
maxSum([2, 3, 5, 1, 6], 3);
maxSum([9, 3, 5, 1, 7], 2);
