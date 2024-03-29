/* 
Title: main.js
Description: The main file of my JavaScript Notes file 
Purpose: Let me practice concepts and typey type things out so I learn them better
Author: tbizzle
Date: January 19, 2023
*/

/* 
This is a comment! 
*/

// this is also a comment. more casual tho

// best practice is to use this for single line comments
// can use the multi-line comment to comment something out in the /*middle*/ of the line too

/* Console 
This section is me practicing console.log! 
console.log() is how to print something in JavaScript
*/

console.log(24); // Priting my age
console.log("I am " + 24 + " years old"); // Printing my age, but better

/* Data Types
What's a data type you may ask? great question. a data type is how we classify or describe the various types of data used to program.
Usually using the word in its own definition is frowned upon, but here we are.

In JavaScript, there are 7 Fundamental Data Types (<- memorize that, Teresa)

1) Number
    this is any number. including those with decimals
    4, 9, 1,000,000, .0000000012

2) String
    fancy word for a string of text. any string of text contained within single or double quotes
    we JavaScript people tend to prefer single quotes '...' over double quotes "..."
    numbers, spaces, letters, characters, etc. are all permissable
    'my name is Terry', '5, 4, 3, 2, 1...', '!', ":("

3) Boolean
    true or false. no quotes. short and sweet. like a light switch. takes me right back to the Kresch days...
    learningJavaScript = true, wantsToPlayCallOfDuty = false (a lie, shh)

4) Null
    null keyword. the *intentional* absence of a value. not nothing, not zero.../null/
    thoughts = null;

5) Undefined
    undefined keyword. also represents the absence of a value, although not to be confused with null. 
    undefined means a value does not exist.
    I like to think of undefined as agnostic, and null as a no-thoughts-zen-state

6) Sybmbol
    a new feature to JavaScript. first impression, not good
    symbols are unique identifiers, useful in complex coding. more of this later...

7) Object
    saving the best for last, objects are collections of data

All of these ^ data types besides objects are Primitive Data Types. They are the most basic data types of the language. 
They are Uggs and pumpkin spice lattes and strolling through Target in said Uggs with that latte in hand. 

Objects are more complex, angsty - they listen to Fall Out Boy and scroll through Tumblr. 

*/

/**
 * Arithmetic Operators
 * an operator is a character that performs a task in the code
 * 
 * JavaScript has built-in arithmetic operators:
 * Add +
 * Subtract - 
 * Divide /
 * Multiply *
 * Remainder % (sometimes called modulo cause why not)
 */

console.log(1 + 1);
console.log(12 - 9);
console.log(3 * 4);
console.log(5 / 10);
console.log(9 % 3);

/**
 * String Concatenation
 * you know this. you've done this. it's just two strings combined with a + 
 * "easy peasy," + " lemon squeezy"
 */

console.log('these are ' + 'concatenated ' + 'strings'); // note here cause i already forgot that JavaScript prefers '' single quotes for strings

/**
 * Template Literals
 * i like to think of these as S tier string concatenation
 * because why use ' ' + var when you can do ` ${var}`
 */

let myFaveDrink = 'dirty iced chai'
console.log(`My go-to drink from Starbucks is a ${myFaveDrink}`);

/**
 * To run a JavaScript file from the command line:
 * node fileName.js
 */

/**
 * Properties & Methonds
 * all data types have access to specific properties and methods
 * these properties are accessed by the dot . operator
 */

// i.e. all strings have the length property:
console.log(myFaveDrink.length);

// and some methods:
console.log(myFaveDrink.toUpperCase());         // self explanatory
console.log(myFaveDrink.startsWith('A'));       // boolean checker 
console.log(myFaveDrink.startsWith('d'));
console.log("   weeeee  ");
console.log("   weeeee  ".trim());              // removes whitespace before and after word(s)
console.log("   weeeee  woooo  ");
console.log("   weeeee  woooo  ".trim());       // note it doesn't remove *all* whitespace

/**
 * Math!
 * not just a subject, but an object! built-in!
 * build-in objects in JS also come with build-in methods
 */

// Math.random()
console.log(Math.random());         // prints a random number between 0 (exclusive) and 1 (inclusive)

// to change the range of .random(), multiply it
// i.e. let's say i want a random number between 0 and 30, i'd do
console.log(Math.random() * 30);

// but i'm looking to pick a random age, or a song index in a playlist, so no decimals
console.log(Math.floor((Math.random() *30)));       // :)