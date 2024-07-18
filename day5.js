// Activity 1: Function Declaration
console.log("Activity 1: Function Declaration");
// Task 1
function isEvenOrOdd(num) {
    if (num % 2 == 0) {
        console.log("The Number is Even");
    } else {
        console.log("The Number is Odd");
    }
}
isEvenOrOdd(47);
isEvenOrOdd(12);

// Task 2
function sqNumber(num) {
    return num * num;
}
sqNumber(3);
sqNumber(8);

// Activity 2: Function Expression
console.log("\nActivity 2: Function Expression");
// Task 3
const isMaximum = function (num1, num2) {
    if (num1 > num2) console.log(num1, " is Maximum");
    else console.log(num2, "is Maximum");
};
isMaximum(46, 83);

// Task 4
const strConcate = function (str1, str2) {
    return str1 + " " + str2;
};
console.log(strConcate("hello", "world"));

// Activity 3: Arrow Function
console.log("\nActivity 3: Arrow Function");
// Task 5
const sum = (num1, num2) => num1 + num2;
console.log(sum(54, 88));

// Task 6
const containSpecialChar = (str, char) => str.includes(char);
console.log(containSpecialChar("str$", "$"));

// Activity 4: Function Parameters and Default Values
console.log("\nActivity 4: Function Parameters and Default Values");
// Task 7
function product(num1, num2) {
    return num1 * num2;
}
console.log(product(6, 4));

// Task 8
const greeting = (name, age = 35) => {
    return "Hello " + name;
};
console.log(greeting("arabi"));

// Activity 5: Higher-Order Functions
console.log("\nActivity 5: Higher-Order Functions");
// Task 9
function higherOrder(callback, num) {
    for (let i = 1; i <= num; i++) callback();
}
function greet() {
    console.log("hello world");
}
higherOrder(greet, 2);

// Task 10
function nestFn(fn1, fn2, value) {
    const result = fn1(value);
    return fn2(result);
}
function square(num) {
    return num * 2;
}
function double(num) {
    return num * num;
}
console.log(nestFn(square, double, 5));
console.log(nestFn(double, square, 5));
