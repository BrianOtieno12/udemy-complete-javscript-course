// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

// /**
//  * Value is the smallest unit of information that we have in js
//  * examples of values are jonas which is a string
//  * and 23 which is an integer
//  */
// console.log("BrianOtieno12");
// console.log(23);

// /**
//  * Variables are temporary storage locations of values in a
//  * computer memory that enable you to re-use them
//  * eg variable firstName stores value Brian
//  */

// //Variable declaration
// let firstName = "Brian";
// console.log(firstName);

// /**
//  * Variable naming conventions
//  * 1. use camelCase notation
//  * 2. variables names should not start with a number
//  * 3, variable names can only contain numbers, letters, underscores or dollarsigns
//  * 4. reserved keywords cannot be used as a variable name
//  * 5. avoid using variable called name
//  * 6. variable names should not start with an uppercase letter(it os a convention not rule)
//  * 7. ensure a variable name is descriptive
//  */
// let myFirstJob = "Coder";
// let myCurrentJob = "teacher";

// let job1 = "programmer";
// let job2 = "teacher";

// console.log(myFirstJob);

// /**
//  * 7 Primitive Data Types
//  * Number: Floating point numbers...used for decimals and integers
//  * String: Sequence of characters...used for text
//  * Boolean: Logical type that can only be true or false...used for taking decisions
//  * Undefined: value that is taken for a variable that in not yet defined('empty value')
//  * Null: Also means 'empty value'
//  * Symbol(ES2015): Value that is unique and cannot be changed
//  * BigInt(ES2020): Larger integers than the number can hold
//  * NB
//  * Dynamic Typing...variables datatype are assigned automatically depending with the value they are holding
//  */

// // Boolean
// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);

// //Typeof used to reveal datatype
// console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'BrianOtieno12');

// //Dynamic Typing by reassigning a value to javaScriptIsFun variable
// javaScriptIsFun = 'YES';
// console.log(typeof javaScriptIsFun);

// //undefined
// let year;
// console.log(year);
// console.log(typeof year);

// // let keyword is used in declaring variables which can be re-assigned(mutated) ex
// let age = 30;
// age = 31; //reassigning(mutating)
// let age; //success

// //const keyword is used to declare immutable variables ie variables that don't change ex
// const birthYear = 1991;
// birthYear = 1995; //error

// const birthYear; //error const variables must be initialized on creation

// //var same as let
// var birthYear = 1991;
// birthYear = 1995;
// var birthYear; //success

// /**
//  * Mathematical Operations
//  */
// //minus, multiplication, division, power and addition
// const now = 2037;
// const ageBrian = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageBrian, ageSarah);

// console.log(ageBrian * 2, ageBrian / 10, 2 ** 3);
// //2**3 means 2 to the power of 3 = 2*2*2*2

// const firstName = 'Brian';
// const lastName = 'Otieno12';
// console.log(firstName + ' ' + lastName);

// //typeof operator used above

// //assigment operator(=)
// let x = 10 + 5;
// console.log(x);

// x += 10; //x = x + 10;
// console.log(x);

// x *= 4;//x = x * 4
// console.log(x);

// x++;
// console.log(x);

// x--;
// console.log(x);

// //comparison operators (>, <, >=, <=)
// console.log(ageBrian > ageSarah);
// console.log(ageSarah >= 18);

// console.log(now - 1991 > now - 2018);

/**
 * Operator Precedence
 * Url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
 */

// // coding challenge
// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;

// const bmiMark = massMark / heightMark ** 2;
// const bmiJohn = massJohn / (heightJohn * heightJohn);

// const higherBmi = bmiMark > bmiJohn ? 'bmiMark' : 'bmiJohn';

// console.log(bmiMark);
// console.log(bmiJohn);
// console.log(higherBmi);

// /**
//  * Template literals and strings
//  */

// const firstName = 'Brian';
// const job = 'programmer';
// const birthyear = 1996;
// const year = 2037;

// //normal
// const Brian = "I'am " + firstName + ', a ' + (year - birthyear) + ' years old ' + job + '!';
// console.log(Brian);

// //using template literal es6
// const brianNew = `I'am ${firstName} a ${year - birthyear} years old ${job} !`;
// console.log(brianNew);

// //normal newline sentences
// console.log('String with \n\ multiple \n\ lines');

// //newline using template literals es6
// console.log(`String
// with
// newlines`);

/**
 * Decision making: if else statements known as control structures
 * windows + period sign to reveal emoji
 */

// const age = 15;

// //if block
// if (age >= 18) {
//     console.log('Sarah can start driving license ????');
// }

// //if..else block
// if (age >= 18) {
//     console.log('Sarah can start driving license ????');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. wait another ${yearsLeft} years ????`);
// }

// //example
// const birthYear = 2012;
// let century;

// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);

// /**
//  * Type Conversion = converting value type manually;]
//  */

// const inputYear = '1991';
// //convert string inputYear to a number and compare with string inputYear
// console.log(Number(inputYear), inputYear);
// //adding string inputYear with int 18 leads to concatenation
// console.log(inputYear + 18);
// //manually convertring string inputYear to number then adding it to int 18 passes
// console.log(Number(inputYear) + 18);

// //Converting a string literal to a number results to Nan(not a number);
// console.log(Number('Brian'));
// //Nan is a number but invalid
// console.log(typeof Nan);

// console.log(String(23), 23);

// /**
//  * Type Coercion: converting value types automatically by javascript
//  * + sign concatenates a string
//  */
// console.log('I am ' + 23 + ' years old');
// console.log('23' - 10 - 3);
// console.log('23' + '10' + 3);
// console.log('23' / 2);

// let n = '1' + 1;
// n = n - 1;
// console.log(n);

// console.log(2 + 3 + 4 + '5');

// console.log('10' - '4' - '3' - 2 + '5');

// /**
//  * Falsy and truthful values
//  * falsy values are 5: 0, '', undefined, null, Nan
//  * truthful values are those which are not falsy values
//  */

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 0;
// if (money) {
//     console.log("Don't spend it all");
// } else {
//     console.log('You should get a job');
// }

// //NB money is type coerced into  a boolean by Javascript which returns a false since 0 is a falsy value

// let height;
// if (height) {
//     console.log('YAY! Height is defined');
// } else {
//     console.log('Height is UNDEFINED');
// }

// //NB height is typed coerced into a bollean by javascript which returns a  false since undefined is a falsy value

// /**
//  * Boolean Logic
//  */

// 1) And Operator = true only if A and B are true
// 2) OR operator = false only if A and B are false
// 3) Not operator(!) = negates a true or false value

// /**
//  * Logic operators
//  */
// const hasDriverLicence = true;
// const hasGoodVision = true;

// console.log(hasDriverLicence && hasGoodVision);
// console.log(hasDriverLicence || hasGoodVision);
// console.log(hasDriverLicence);

// if (hasDriverLicence && hasGoodVision) {
//     console.log("Sarah is able to drive");
// } else {
//     console.log("Someone else should drive");
// }

// const isTired = false;

// console.log(hasDriverLicence && hasGoodVision && !isTired);

// if (hasDriverLicence && hasGoodVision && !isTired) {
//     console.log("Sarah is able to drive");
// } else {
//     console.log("Someone else should drive");
// }

// /**
//  * Switch statements
//  */

// const day = 'sundayz';

// switch (day) {
//     case 'monday':
//         console.log('Plan course structure');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend');
//         break;
//     default:
//         console.log('Not a valid day');
//         break;
// }

// /**
//  * Equality Operators
//  * There are two types:
//  * 1) loose equality operator(==, !=)
//  * 2) Strict equality opearator(===, !==)
//  */
// const age = 18;

// if (age == '18') {
//     console.log('You are of age (loose)'); // will be printed since loose equality operaator performs typecoercion
// }

// if (age === '18') {
//     console.log('you are of age (strict)')// won't be printed since strict equality operator does not perform type coercion
// }

// if (age === 18) {
//     console.log('you are of age (strict 2)'); //will be printed
// }

// if (age === Number('18')) {
//     console.log('You are of age (strict 3)'); // will be printed since we have converted string 18 into an integer
// }


// /**
//  * Expressions vs statements
//  * Expresiions = produce a value
//  * statements = do not produce a value but are comprised of expresiions see below if statement example
//  * 23 > 1 => is an expresion since it produces a boolean value
//  * ${me} => me is an expression because it produces a value
//  */

// const me = 'BrianOtieno12';

// if (23 > 1) {
//     console.log(`My name is ${me} yeah!`)
// }

/**
 * Conditional (ternary) operator
 * contains 3 sections :
 * section one => condition
 * section two => if statement
 * sectione three => else statement
 */

const age = 23;
age > 18 ? console.log('drink wine ????') : console.log('drink water ????'); //ternary operator

//Take note operators produces a value thus can be used with a string literal
console.log(`I like to drink ${age > 18 ? 'wine ????' : 'water ????'}`);


//let is used with variables that are dimmed to change their values otherwisw always default...
//...to declaring values using const to avoid errors