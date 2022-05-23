//enable strict mode
'use strict';

// /**
//  * Strict mode
//  * if you disable strict mode by commenting line 5...
//  * ...the error on line 13 will not be shown and js will fail silently.
//  * Strict mode is also used to throw an error when you use a variable name...
//  * ..that js has reserved for future use
//  */
// let hasDriversLicense = false;
// const passed = true;

// if (passed) hasDriverLicense = true;
// if (hasDriversLicense) console.log('I can drive 🚗');

// //future use reserved key word example
// const interface = 'hello world';

/**
 * Functions: these are reusable codes grouped together that can be....
 * ..called many times in the program
 */

// /**
//  * function declaration
//  * we use key word function followed by function name plus brackets
//  */
// function logger() {
//     console.log('Hello world');
// }

// //function call
// logger();
// logger();
// logger();

// /**
//  *
//  * @param {int} apples
//  * @param {int} oranges
//  * @returns String
//  * function contains parameter apples and oranges
//  */
// function juiceProcessor(apples, oranges) {
//     const juice = `Juice composed of ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// //function call contains arguments that are passed to function juiceProcessor
// //returned vString from function juiceProcessor is assigned to order1, order2, order3...
// const order1 = juiceProcessor(5, 0);
// console.log(order1);

// const order2 = juiceProcessor(5, 1);
// console.log(order2);

// const order3 = juiceProcessor(5, 2);
// console.log(order3);

// /**
//  * function declarations and expressions
//  * NB: in function declarations a function call can be made...
//  * ..before we declare the function whereas in function expression...
//  * ...it will be an error
//  */

// //function declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// //function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1992);
// console.log(age2);

// /**
//  * Arrow functions
//  * @param (int) birthYear
//  */

// //example  1
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1993);
// console.log(age3);

// //example2
// const retirementTime = birthYear => {
//     const age = 2037 - birthYear;
//     const retirementAge = 65 - age;
//     return retirementAge;
// }

// const age4 = retirementTime(1995);
// console.log(age4);

// //example3
// const retirementPeriod = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirementAge = 65 - age;
//     return `${firstName} retires after ${retirementAge} years`;
// }

// console.log(retirementPeriod(1996, 'BrianOtieno12'))

// /**
//  * calling function inside another function
//  */
// const cutIntoPieces = function (fruit) {
//     return fruit * 4;
// }

// const fruitProcessor = function (apples, oranges) {

//     const cutApples = cutIntoPieces(apples);
//     const cutOranges = cutIntoPieces(oranges);

//     return `Juice contains ${cutApples} pieces of apples and ${cutOranges} pieces of oranges`;
// }

// console.log(fruitProcessor(2, 4));

// /**
//  * Arrays
//  */

// //array declaration
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1992, 1993, 1994);
// console.log(years);

// //fetch first element
// console.log(friends[0]);

// //fetch last element
// console.log(friends[2]);

// //determine length of an array
// console.log(friends.length);
// console.log(friends[friends.length - 1]); //returns last element in an array

// //change value of an element in an array
// friends[2] = 'jay';
// console.log(friends);

// //arrays can include different types
// const firstName = 'BrianOtieno12';
// const person = [firstName, 20137 - 1991, 'teacher', friends];

// console.log(person);


// /**
//  * Basic array operations
//  */

// //add elements to the end of an array
// const friends = ['Michael', 'Steven', 'Peter'];
// let newLength = friends.push('Jay');//push retunrs new length
// console.log(friends);
// console.log(newLength);

// //add elements at the beginning of an array
// newLength = friends.unshift('John');
// console.log(friends);
// console.log(newLength);

// //remove last element in the array
// let poppedValue = friends.pop();//returns removed value
// console.log(friends);
// console.log(poppedValue);

// //remove first elemeent in the array
// poppedValue = friends.shift(); //returns removed value
// console.log(friends);
// console.log(poppedValue);

// //return position of an element in an array
// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// //check if a value exists in an array using es6
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));

/**
 * Object/
 */

const object1 = {
    firstName: 'Brian',
    lastName: 'Otieno12',
    age: 2037 - 1972,
    job: 'teacher',
    friends: ['teacher1', 'teacher2', 'teacher3']
};

console.log(object1);

//accessing object property values using dot notation
console.log(object1.firstName);

//accessing object property value using bracket notation
console.log(object1['lastName']);

//using an expression when accessing a property value
const nameKey = 'Name';
console.log(object1['first' + nameKey]);

const intrestedIn = prompt('What do you want to know about Brian ? Choose between firstName, lastName, age, job, and firends');

if (object1[intrestedIn]) {
    console.log(object1[intrestedIn]);
} else {
    console.log('Wrong Answer');
}

//adding properties to an object
object1.location = 'Africa';
object1['twitter'] = '@brianOtieno12';

console.log(object1);