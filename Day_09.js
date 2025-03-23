// function saymyname(name){
//     console.log(name);
// }

// saymyname("John Doe");

saymyname("John Doe");

function saymyname(name){
    console.log(name);
}


// function hoisting example.... 

// The function declaration is hoisted to the top of the scope, so you can call the function before it is declared in the code.

// The function expression is not hoisted, so you cannot call the function before it is declared in the code.


console.log(age);
var age = 25;
// only the declaration of the variable is hoisted to the top of the scope, not the value assignment.but let and const are not hoisted.

let age = 25;

console.log(age);
// The variable age is not hoisted to the top of the scope, so you cannot access it before it is declared in the code.

// The variable age is hoisted to the top of the scope, but the value is not assigned until the line where it is declared.

var age = 25;
console.log(age);


meet()
let meet = function(){
    console.log("Hello World");
}


const objcet1 = new Person();
class Person {
    

}

// The class declaration is not hoisted, so you cannot access it before it is declared in the code.

// only two things are hoisted in javascript, function declaration and variable declaration.




