let js = 'amazing';
console.log(40 + 8 + 23 - 10);

/**
 * Value is the smallest unit of information that we have in js
 * examples of values are jonas which is a string
 * and 23 which is an integer
 */
console.log("BrianOtieno12");
console.log(23);

/**
 * Variables are temporary storage locations of values in a 
 * computer memory that enable you to re-use them 
 * eg variable firstName stores value Brian
 */

//Variable declaration
let firstName = "Brian";
console.log(firstName);

/**
 * Variable naming conventions
 * 1. use camelCase notation
 * 2. variables names should not start with a number
 * 3, variable names can only contain numbers, letters, underscores or dollarsigns
 * 4. reserved keywords cannot be used as a variable name
 * 5. avoid using variable called name
 * 6. variable names should not start with an uppercase letter(it os a convention not rule)
 * 7. ensure a variable name is descriptive
 */
let myFirstJob = "Coder";
let myCurrentJob = "teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

/**
 * 7 Primitive Data Types
 * Number: Floating point numbers...used for decimals and integers
 * String: Sequence of characters...used for text
 * Boolean: Logical type that can only be true or false...used for taking decisions
 * Undefined: value that is taken for a variable that in not yet defined('empty value')
 * Null: Also means 'empty value'
 * Symbol(ES2015): Value that is unique and cannot be changed
 * BigInt(ES2020): Larger integers than the number can hold
 * NB 
 * Dynamic Typing...variables datatype are assigned automatically depending with the value they are holding
 */

// Boolean
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

//Typeof used to reveal datatype
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'BrianOtieno12');

//Dynamic Typing by reassigning a value to javaScriptIsFun variable
javaScriptIsFun = 'YES';
console.log(typeof javaScriptIsFun);

//undefined
let year;
console.log(year);
console.log(typeof year);