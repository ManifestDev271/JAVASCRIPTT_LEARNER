// 🌟 1. Variable Declaration Types 🌟

// (A) var -> function-scoped, can be redeclared & reassigned
var myVar = "Hello";
var myVar = "Reassigned"; // ✅ Allowed
console.log(myVar); // Output: "Reassigned"

// (B) let -> block-scoped, cannot be redeclared in the same scope, but can be reassigned
let myLet = 42;
// let myLet = 50; ❌ Error: Cannot redeclare 'myLet'
myLet = 50; // ✅ Allowed (Reassignment)
console.log(myLet); // Output: 50

// (C) const -> block-scoped, cannot be reassigned or redeclared
const myConst = true;
// myConst = false; ❌ Error: Cannot reassign 'const' variable
console.log(myConst); // Output: true

// ---------------------------------------------------------------------

// 🌟 2. Primitive Data Types (Stored directly in memory) 🌟
let str = "JavaScript";  // String
let num = 25;            // Number
let bigIntNum = 12345678901234567890n; // BigInt (use 'n' at the end)
let boolVal = false;     // Boolean
let undefinedVar;        // Undefined (not assigned)
let nullVar = null;      // Null (empty value)
let uniqueSymbol = Symbol("id"); // Symbol (unique identifier)

console.log(typeof str, str);            // string, "JavaScript"
console.log(typeof num, num);            // number, 25
console.log(typeof bigIntNum, bigIntNum); // bigint, 12345678901234567890n
console.log(typeof boolVal, boolVal);    // boolean, false
console.log(typeof undefinedVar);        // undefined
console.log(typeof nullVar);             // object (JavaScript bug)
console.log(typeof uniqueSymbol);        // symbol

// ---------------------------------------------------------------------

// 🌟 3. Reference Data Types (Objects, Arrays, Functions) 🌟
let obj = { name: "Pratik", age: 20 }; // Object
let arr = [1, 2, 3, "text"];           // Array
let func = function () { return "Hello"; }; // Function

console.log(typeof obj, obj);  // object, {name: "Pratik", age: 20}
console.log(typeof arr, arr);  // object, [1, 2, 3, "text"]
console.log(typeof func, func()); // function, "Hello"

// ---------------------------------------------------------------------

// 🌟 4. Variable Naming Conventions 🌟
let camelCaseVar = "Camel Case"; // ✅ Best Practice (Preferred)
let PascalCaseVar = "Pascal Case"; // ✅ Used for Class Names
let snake_case_var = "Snake Case"; // ✅ Less Common
let $dollarSign = "Valid";  // ✅ Allowed (Used in jQuery)
let _underscore = "Valid";  // ✅ Allowed (Private variable in some cases)

// ❌ Invalid variable names
// let 1stVar = "Invalid"; // ❌ Cannot start with a number
// let my-var = "Invalid"; // ❌ Cannot use hyphens (-)
// let let = "Invalid";    // ❌ Cannot use reserved keywords

console.log(camelCaseVar, PascalCaseVar, snake_case_var, $dollarSign, _underscore);

// ---------------------------------------------------------------------

// 🌟 5. Scope (Global vs Local) 🌟
var globalVar = "I am global"; // Global scope

function checkScope() {
    let localVar = "I am local"; // Block-scoped
    console.log(globalVar); // ✅ Accessible
    console.log(localVar);  // ✅ Accessible
}
checkScope();
// console.log(localVar); // ❌ Error: localVar is not defined

// ---------------------------------------------------------------------

// 🌟 6. Dynamic Typing 🌟
let dynamicVar = "Now I'm a string";
console.log(typeof dynamicVar); // string
dynamicVar = 100; // Changing type
console.log(typeof dynamicVar); // number

// ---------------------------------------------------------------------

// 🌟 7. Constants with Objects & Arrays 🌟
const person = { name: "Pratik", age: 20 };
person.age = 21; // ✅ Allowed (modifying properties)
console.log(person);

// person = { city: "Cuttack" }; ❌ Error (Cannot reassign the object)

const numbers = [1, 2, 3];
numbers.push(4); // ✅ Allowed (modifying array)
console.log(numbers);

// numbers = [5, 6, 7]; ❌ Error (Cannot reassign new array)

// ---------------------------------------------------------------------

// 🌟 8. Type Conversion 🌟
let numStr = "10";
console.log(typeof numStr, numStr); // string, "10"

let convertedNum = Number(numStr);
console.log(typeof convertedNum, convertedNum); // number, 10

let boolToNum = Number(true);  // ✅ true → 1, false → 0
console.log(boolToNum);

let numToStr = String(100); // ✅ Convert number to string
console.log(typeof numToStr, numToStr);

// ---------------------------------------------------------------------

// 🌟 9. Hoisting (var is hoisted, let & const are not) 🌟
console.log(hoistedVar); // ✅ Undefined (Hoisted)
// console.log(notHoistedVar); // ❌ ReferenceError

var hoistedVar = "I'm hoisted";
let notHoistedVar = "I'm not hoisted";

// ---------------------------------------------------------------------

// 🌟 10. Template Literals 🌟
let userName = "Pratik";
let greeting = `Hello, ${userName}! Welcome to JavaScript.`;
console.log(greeting);



// ---------------------------------------------------------------------

// 🌟 1. Arithmetic Operators 🌟
let a = 10, b = 3;
console.log("Addition:", a + b);       // 13
console.log("Subtraction:", a - b);    // 7
console.log("Multiplication:", a * b); // 30
console.log("Division:", a / b);       // 3.333
console.log("Modulus:", a % b);        // 1 (Remainder)
console.log("Exponentiation:", a ** b); // 1000 (10^3)

let x = 5;
console.log("Pre-Increment:", ++x); // 6
console.log("Post-Increment:", x++); // 6 (returns old value)
console.log("Current x:", x); // 7

// ---------------------------------------------------------------------

// 🌟 2. Assignment Operators 🌟
let num1 = 10;
num += 5;  // num = num + 5 → 15
num -= 3;  // num = num - 3 → 12
num *= 2;  // num = num * 2 → 24
num /= 4;  // num = num / 4 → 6
num %= 5;  // num = num % 5 → 1
num **= 2; // num = num ** 2 → 1
console.log("Final num value:", num1);

// ---------------------------------------------------------------------

// 🌟 3. Comparison Operators 🌟
console.log("Equal:", 5 == "5");       // true (checks value only)
console.log("Strict Equal:", 5 === "5"); // false (checks value & type)
console.log("Not Equal:", 10 != "10");  // false
console.log("Strict Not Equal:", 10 !== "10"); // true
console.log("Greater Than:", 10 > 5);   // true
console.log("Less Than:", 5 < 10);      // true
console.log("Greater or Equal:", 10 >= 10); // true
console.log("Less or Equal:", 5 <= 4);  // false

// ---------------------------------------------------------------------

// 🌟 4. Logical Operators 🌟
let bool1 = true, bool2 = false;
console.log("AND:", bool1 && bool2); // false (Both must be true)
console.log("OR:", bool1 || bool2);  // true (At least one must be true)
console.log("NOT:", !bool1);         // false (Negation)

// ---------------------------------------------------------------------

// 🌟 5. Bitwise Operators 🌟
console.log("Bitwise AND:", 5 & 1); // 1  (0101 & 0001 = 0001)
console.log("Bitwise OR:", 5 | 1);  // 5  (0101 | 0001 = 0101)
console.log("Bitwise XOR:", 5 ^ 1); // 4  (0101 ^ 0001 = 0100)
console.log("Bitwise NOT:", ~5);    // -6 (Inverts bits)
console.log("Left Shift:", 5 << 1); // 10 (5 * 2^1)
console.log("Right Shift:", 5 >> 1);// 2  (5 / 2^1)

// ---------------------------------------------------------------------

// 🌟 6. Ternary Operator 🌟
let age = 18;
let status = (age >= 18) ? "Adult" : "Minor";
console.log("Ternary Result:", status); // Adult

// ---------------------------------------------------------------------

// 🌟 7. Typeof Operator 🌟
console.log("Type of 5:", typeof 5); // number
console.log("Type of 'Hello':", typeof "Hello"); // string
console.log("Type of true:", typeof true); // boolean
console.log("Type of undefined:", typeof undefined); // undefined
console.log("Type of null:", typeof null); // object (JavaScript bug)
console.log("Type of function:", typeof function(){}); // function

// ---------------------------------------------------------------------

// 🌟 8. Spread and Rest Operators 🌟
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // Spread operator
console.log("Spread Operator:", arr2); // [1,2,3,4,5]

function sum(...numbers) { // Rest operator
    return numbers.reduce((acc, val) => acc + val, 0);
}
console.log("Rest Operator Sum:", sum(1, 2, 3, 4)); // 10


// ---------------------------------------------------------------------


// conditional statements



// 🌟 1. if Statement 🌟
let num2 = 10;
if (num > 0) {
    console.log("The number is positive."); // ✅ Executes
}

// ---------------------------------------------------------------------

// 🌟 2. if...else Statement 🌟
let age1 = 18;
if (age >= 18) {
    console.log("You are an adult."); // ✅ Executes
} else {
    console.log("You are a minor.");
}

// ---------------------------------------------------------------------

// 🌟 3. if...else if...else Statement 🌟
let marks = 75;
if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B");
} else if (marks >= 70) {
    console.log("Grade: C"); // ✅ Executes
} else {
    console.log("Grade: F");
}

// ---------------------------------------------------------------------

// 🌟 4. Nested if Statement 🌟
let temperature = 30;
if (temperature > 20) {
    console.log("It's warm outside.");
    if (temperature > 35) {
        console.log("It's very hot! Stay hydrated.");
    }
}

// ---------------------------------------------------------------------

// 🌟 5. switch Statement (Alternative to Multiple if-else) 🌟
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday"); // ✅ Executes
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Weekend or Invalid day");
}

// ---------------------------------------------------------------------

// 🌟 6. Ternary Operator (Shorter if-else) 🌟
let isMember = true;
let discount = isMember ? "10% Discount" : "No Discount";
console.log("Discount:", discount); // ✅ "10% Discount"

// ---------------------------------------------------------------------

// 🌟 7. Nullish Coalescing Operator (??) 🌟
let userName1 = null;
let defaultName = "Guest";
console.log("Hello,", userName1 ?? defaultName); // ✅ "Hello, Guest"

// ---------------------------------------------------------------------

// 🌟 8. Logical AND (&&) as a Conditional Shortcut 🌟
let loggedIn = true;
loggedIn && console.log("Welcome back!"); // ✅ Executes only if true

// ---------------------------------------------------------------------

// 🌟 9. Logical OR (||) as a Fallback 🌟
let input = "";
let result = input || "Default Value";
console.log("Result:", result); // ✅ "Default Value"
