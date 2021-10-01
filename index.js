/**
 *  EXPRESSION VS STATEMENTS
 */

// 10
// "abc"
// 5 + 3

// ;(function(a){
//   console.log(a);
// }) // Function expression embedded into the "()"

// // Immediately Invoked Function
// ;(function (){
//   console.log("Hello from IIFE");
// })() // Function call is expression

// let a;
// a = 10 // Assignment expression

// // 5 = true // Uncaught SyntaxError: invalid assignment left-hand side 

// 4 <= 10 <= 20 || 5 // true - logical expression


/**
 * STATEMENTS
 *
 */

// let a;

// a = 3;

// function myFunction(b){
//   // Quick check that "retun" is a
//   // statement (not expression)
//   // console.log(return b); // Uncaught SyntaxError: expected expression, got keyword 'return
//   return b;
// }

// myFunction(a)

// if(true){
//   console.log("Hello from 'if' statement!")
// } // if statement


// Quick check that "if" is a
// statement (not expression)
// console.log(if(true){
//   console.log("Hello from 'if' statement!")
// } );// Uncaught SyntaxError: expected expression, got keyword 'if'


/**
 * EXPRESSION STATEMENTS
 */

console.log(4 + 3); // EXPRESSION STATEMENT

// console.log(console.log(4 + 3);); // Uncaught SyntaxError: missing ) after argument list
console.log(console.log(4 + 3)); // 7 7 EXPRESSION STATEMENT

let a; // EXPRESSION STATEMENT
a = 5; // EXPRESSION STATEMENT

true;// EXPRESSION STATEMENT

// console.log(true;); // Uncaught SyntaxError: missing ) after argument list

/**
 * TASK 1 
 * 
 * Is it expression or statement?
 */
const myObject = {
  x: 10,
  y: true
};

delete myObject.x // This is a expression because return a value "true"
                    // The semicolon is added for readybility porpuses

console.log(delete myObject.x); // Expression Statement

/**
 * TASK 2
 * 
 * What will be logged to the console?
 */

function fn(){
  console.log("Greeting from the 'fn' function");
  return function(a){
    console.log(a);
  };
}

fn() // Greeting from the 'fn' function
(true) // "true" because this line will be interpreted
      // as function call with argument "true"

// The console log will return:
    // Greeting from the 'fn' function
    // true

console.log("_________________________________");


/**
 * TASK 3
 * 
 * Explain why semicolon is added?
 * 
 */
function firstFunction(a, b){
  return a + b;
} // Function declaration

const secondFunciton = function(a, b){
  return a + b;
}; // Statement