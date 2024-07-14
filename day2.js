// Activity 1: Arithmetic Operations
let num1 = 30,
    num2 = 10;
console.log("Activity 1: Arithmetic Operations");
console.log(num1 + num2);
console.log(num2 - num1);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

// Activity 2: Assignment Operations
console.log("\nActivity 2: Assignment Operations");
num1 += num1;
num2 -= num2;
console.log(num1);
console.log(num2);

// Activity 3: Comparison Operations
console.log("\nActivity 3: Comparison Operations");
num1 = 5;
num2 = 15;
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

num2 = "5";
console.log(num1 == num2);
console.log(num1 === num2);

// Activity 4: Logical Operations
console.log("\nActivity 4: Logical Operations");
let age = 17;
let govId = false;
const openBankAccount = age > 18 && govId;
console.log(openBankAccount);

const openPassport = age || govId;
console.log(openPassport);

console.log(!true);
// Activity 5: Ternary Operations

console.log("\nActivity 5: Ternary Operation");
let num = 5;
const isPositiveorNegative = num > 0 ? "Positive!" : "Negative!";
console.log(isPositiveorNegative);
