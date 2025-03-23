// 🌟 1. for Loop 🌟
console.log("Using for loop:");
for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i); // Runs 5 times
}

// ---------------------------------------------------------------------

// 🌟 2. while Loop 🌟
console.log("\nUsing while loop:");
let count = 1;
while (count <= 5) {
    console.log("Iteration:", count);
    count++;
}

// ---------------------------------------------------------------------

// 🌟 3. do...while Loop 🌟
console.log("\nUsing do...while loop:");
let num = 1;
do {
    console.log("Iteration:", num);
    num++;
} while (num <= 5);

// ---------------------------------------------------------------------

// 🌟 4. for...in Loop (Used for Objects) 🌟
console.log("\nUsing for...in loop:");
let person = { name: "John", age: 25, city: "New York" };
for (let key in person) {
    console.log(key + ":", person[key]); // Iterates over object keys
}

// ---------------------------------------------------------------------

// 🌟 5. for...of Loop (Used for Arrays, Strings) 🌟
console.log("\nUsing for...of loop:");
let fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
    console.log(fruit); // Iterates over array values
}

// ---------------------------------------------------------------------

// 🌟 6. Loop with break Statement 🌟
console.log("\nLoop with break:");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Breaking at:", i);
        break; // Stops the loop when i = 5
    }
    console.log("Iteration:", i);
}

// ---------------------------------------------------------------------

// 🌟 7. Loop with continue Statement 🌟
console.log("\nLoop with continue:");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Skipping:", i);
        continue; // Skips iteration when i = 3
    }
    console.log("Iteration:", i);
}

// ---------------------------------------------------------------------

// 🌟 8. Nested Loops 🌟
console.log("\nUsing nested loops:");
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i=${i}, j=${j}`); // Nested loop output
    }
}

// ---------------------------------------------------------------------

// 🌟 9. Looping through a String 🌟
console.log("\nLooping through a string:");
let text = "Hello";
for (let char of text) {
    console.log(char);
}

// ---------------------------------------------------------------------

// 🌟 10. Using map() for looping an array 🌟
console.log("\nUsing map() method:");
let numbers = [1, 2, 3, 4, 5];
numbers.map(num => console.log(num * 2)); // Doubles each number




// ---------------------------------------------------------------------


console.log("🔹 1. for Loop (Fixed Iterations)");
for (let i = 1; i <= 5; i++) {
    console.log(`Iteration: ${i}`);
}

// ---------------------------------------------------------------------

console.log("\n🔹 2. while Loop (Condition-Based)");
let count5 = 1;
while (count <= 5) {
    console.log(`Iteration: ${count5}`);
    count5++;
}

// ---------------------------------------------------------------------

console.log("\n🔹 3. do...while Loop (Runs at Least Once)");
let num5 = 1;
do {
    console.log(`Iteration: ${num5}`);
    num5++;
} while (num <= 5);

// ---------------------------------------------------------------------

console.log("\n🔹 4. for...in Loop (Looping Through Object Properties)");
let person1 = { name: "John", age: 25, city: "New York" };
for (let key in person1) {
    console.log(`${key}: ${person1[key]}`);
}

// ---------------------------------------------------------------------

console.log("\n🔹 5. for...of Loop (Looping Through Arrays & Strings)");
let fruits1 = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits1) {
    console.log(fruit);
}

// ---------------------------------------------------------------------

console.log("\n🔹 6. Looping Through a String");
let text4 = "Hello";
for (let char of text4) {
    console.log(char);
}

// ---------------------------------------------------------------------

console.log("\n🔹 7. Loop with break Statement (Stops Immediately)");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log(`Breaking at: ${i}`);
        break;
    }
    console.log(`Iteration: ${i}`);
}

// ---------------------------------------------------------------------

console.log("\n🔹 8. Loop with continue Statement (Skips Iteration)");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log(`Skipping: ${i}`);
        continue;
    }
    console.log(`Iteration: ${i}`);
}

// ---------------------------------------------------------------------

console.log("\n🔹 9. Nested Loops (Loop Inside Loop)");
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i=${i}, j=${j}`);
    }
}

// ---------------------------------------------------------------------

console.log("\n🔹 10. Using map() for Looping an Array");
let numbers4 = [1, 2, 3, 4, 5];
numbers.map(num => console.log(num * 2)); // Doubles each number
