// Activity 1: If-Else Statements
// Task 1
let number = 4;
if (number > 0) {
    console.log("The Number is Positive.");
} else if (number < 0) {
    console.log("The Number is Negative.");
} else {
    console.log("The Number is Zero.");
}

// Task 2
let age = 19;
if (age >= 18) {
    console.log("Eligible to vote.");
} else {
    console.log("Not Eligible to vote.");
}

// Activity 2: Nested If-Else Statements
// Task 3
let num1 = 8,
    num2 = 15,
    num3 = 9;
if (num1 > num2) {
    if (num1 > num3) {
        console.log(num1, " is large");
    }
} else {
    if (num2 > num3) {
        console.log(num2, " is large");
    } else {
        console.log(num3, " is large");
    }
}

// Activity 3: Switch Case
// Task 4
let day = 2;
switch (day) {
    case 1:
        console.log("Day is Sat");
        break;
    case 2:
        console.log("Day is Sun");
        break;
    case 3:
        console.log("Day is Mon");
        break;
    case 4:
        console.log("Day is Tue");
        break;
    case 5:
        console.log("Day is Wed");
        break;
    case 6:
        console.log("Day is Fri");
        break;
    case 7:
        console.log("Day is Sat");
        break;

    default:
        console.log("Invalid!");
        break;
}

// Task 5
let grade = "B";
switch (grade) {
    case "A":
        console.log("score: 80-100");
        break;
    case "B":
        console.log("score: 70-79");
        break;
    case "C":
        console.log("score: 50-69");
        break;
    case "D":
        console.log("score: 40-49");
        break;
    case "F":
        console.log("score: 0-39");
        break;

    default:
        console.log("Invalid Grade");
        break;
}

// Activity 4: Conditional (Ternary) Operator
// Task 6
let num = 5;
if (num % 2 == 0) console.log("Number is Even.");
else console.log("Number is Odd.");

// Activity 5: Combining Conditions
// Task 7
let year = 1900;
if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0)
    console.log(year, "is leap year");
else console.log(year, "is not leap year");
