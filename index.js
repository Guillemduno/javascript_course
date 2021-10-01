// /**
//  * SECTION 1
//  * 
//  * Arithmetic Operators
//  */

// let a, b;
// a = 1;          
// b = 2;

// // Math with numbers
// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// console.log(a - b);

// a = "abc";
// b = 5;

// // Math with non-numbers
// console.log(a + b); // abc5
// console.log(a * b); NaN 
// console.log(a / b); NaN
// console.log(a - b); NaN

// a = "Hello";
// b = "World";

// // String concatenation
// console.log(a + " " + b );

// let c;
// c = "1";
// // Unary plus
// console.log(+c); // Plus operator prefix convert string to number.
// console.log(Number(c)); // Number fuction converts string to number
// c = undefined;
// console.log(+c); // NaN.

// // Unary minus
// c = "5";
// console.log(-c); // Minus operator prefix convert string to number.
// c = "abc";
// console.log(-c); // NaN.

// // ++ operator

// let d = 5;
// ++d; // Same as d = d + 1; // 6
// console.log(d);// 6
// d++;
// console.log(d); // 7
// // Build-in "++" function FIRST
// // increment value of the operand and 
// // SECOND return value of the operand.
// console.log(++d); // 8
// // Build-in "++" function 
// // FIRST return value of the operand
// // SECOND increment value of the operand and .
// console.log(d++); // 8
// console.log(d); // 9

// // -- operaton
// console.log(d--) // 9
// console.log(d) // 8
// console.log(--d) // 7 // Same as d = d - 1; // 




/**
 * SECTION 2
 * 
 * Comparison operators
 */
// Number comparison
// let a, b, c;
// a = 5;
// b = 7;
// c = 5;

// console.log(a < b); // rue
// console.log(a > b); // false

// console.log(a <= c); // true
// console.log(a >= c); // true
// console.log("_________");

// // Strings comparison
// let myStr1, myStr2;

// myStr1 = "abc";
// myStr2 = "bcd";
// myStr3 = "Bcd";
// // Sorted strings "Bcd", "abc", "bcd"

// console.log(myStr1 > myStr2); // false
// console.log(myStr1 < myStr2); // true

// console.log(myStr1 > myStr3); // true

// console.log("_________");


// // Equality operators
// // NEVER USE "==" and "!=" operators
// // instead use "===" and "!=="

// let myString = "0";
// let myNumber = 0;
// let myBoolean = false;

// // Types of the values may be different
// console.log(myString == myNumber); // true
// console.log(myString == myBoolean); // true
// console.log(myNumber == myBoolean); // true

// // Type and Value are compared
// console.log(myString === myNumber);   // false
// console.log(myString === myBoolean); // false
// console.log(myNumber === myBoolean); // false

// // How you should compare variable of diferent types
// console.log(Number(myString) === myNumber);   // true
// console.log(+myString === myNumber);   // true


// console.log(myString != myNumber);   // false
// console.log(myString !== myNumber);   // true

// console.log("_________");

// console.log(null === undefined);// false
// console.log(null == undefined);// true

// console.log("_________");
// console.log(0 === "" === null === undefined === false); // true



/**
 *  SECTION 3
 * 
 * Logical operators
 * 
 */
// // OR operator ||
// console.log(true || false); // true
// console.log(false || true); // true

// console.log("abc" || ""); // abc
// console.log("" || "abc"); // abc
// console.log("" || ""); // ""
// // Falsy values
// console.log("" || 0 || null || undefined || NaN || false); // false 

//  let city; // undefined
//  const defaultCity = "New York";
//  console.log(defaultCity || city); // New York;
 
//  let myCity = city || defaultCity;
//  console.log(myCity || defaultCity); // New York;

//  console.log("_________");
//  myCity = city || console.log("Fill in city please") || defaultCity;
//  console.log(myCity);
//  console.log("_________");
 
//  city = "Los Angeles"; // Los Angeles
//  myCity = city || defaultCity;
//  console.log(myCity); //  Los Angeles
 
//  console.log("_________");
 
//  // AND operator &&
//  console.log(true && false); // false
//  console.log(false && true ); // false
 
//  // AND returns value of the first "falsy" operand
//  console.log("abc" && 10 && false && "" && "abcd" ); // false
//  console.log("abc" && 10 && NaN && "" && "abcd" ); // NaN
//  console.log("abc" && 10 && "" && "abcd" ); // empty string
 
//  // All operands are "truthy"
//  console.log("abc" && 10 && true && 123 && "Hello World" ); // "Hello World"
 
//  console.log("_________");

//  // NOT operator

//  console.log(!"abc"); // false
//  console.log(!""); // true
//  console.log(!0); // true
 
//  let myVariable;
//  myVariable = undefined;
//  console.log(!myVariable); // true
//  myVariable = "Bogdan";
//  console.log(!myVariable); // false
 
//  // Quick truthly / falsy check
//  myVariable = null;
//  console.log(!!myVariable); // false
//  myVariable = 10;
//  console.log(!!myVariable); // true


 /**
  * SECTION 4
  * 
  * Operators Precedents 
  */

//  console.log(2 + 4 * 10); // 42 - // First call "*" - Second "+"
//  console.log((2 + 4) * 10); // 60 - // First call "+" - Second "*"
 
//  let a;
//  a = 1;
 
//  a = a + 5; // First call "+" - Second "="
//  console.log(a); // 6

//  /**
//   * SECTION 5
//   * 
//   * Operators Associativity
//   */

//  let a, b;
//  b = 3;
//  a = b = 5; // first evaluate b = 5, and then a = b
//  console.log(a, b); // // 5 5 right to left

//  console.log(4 + 5 + 6); // 15 left to right
 
//  console.log(6 + 4 + 5); // 15 left to right

//  console.log(5 * 10 / 2); // 25 let to right
//  console.log(5 * 10 / 2 /5); // 5 let to right



 /**
  * TASK 1
  */
//  let myVariable11, myVariable22;

//  myVariable11 = "10";
//  myVariable22 = 200;

//  console.log(+myVariable11 <= +myVariable22 );

 /**
  * TASK 2
  */

//  let myNumber1 = 10; // 10 = 3 + 3 + 3 + 1 
//  let myNumber2 = 3;
//  console.log(myNumber1 % myNumber2); // 1 (Modulus / Remainder) left to right
 
//  console.log( 25 % 5); // 0 (Modulus / Remainder) left to right
//  console.log( 14 % 8); // 6 (Modulus / Remainder) left to right
//  console.log( 100 % 30 % 3); // 1 (Modulus / Remainder) left to right

/**
 * TASK 3
 * 
 * What will be logged to the console?
 */
// console.log(3 || true && null || false); // 3
// STEP 1: true && null     -> null
// STEP 2:    3 || null     -> 3
// STEP 3:    3 || false    -> 3

/**
 * TASK 4
 * 
 * Find alternatives;
 */

// let a = 10;

// // a = a + 1; 
// // ++a;
// a += 1;
// console.log(a);

// // a = a * 2; 
// a *= 2;
// console.log(a);

// // a = a - 5;
// a -= 5;
// console.log(a);

// // a = a / 2; 
// a /=2;
// console.log(a);

