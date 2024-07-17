// Activity 1: For Loop
// Task 1
console.log("Activity 1: For Loop");
for (let i = 1; i <= 10; i++) console.log(i);

// Task 2
for (let i = 1, j = 5; i <= 10; i++) {
    console.log(i + " * " + j + " = " + i * j);
}

// Activity 2: While Loop
// Task 3
console.log("\nActivity 1: While Loop");
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// Task 4
i = 1;
let j = 5;
while (i <= 10) {
    console.log(i + " * " + j + " = " + i * j);
    i++;
}

// Activity 3: Do...While Loop
// Task 5
console.log("\nActivity 3: Do...While Loop");
i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);

// Task 6
let num = 5;
let fact = 1;
do {
    fact *= num;
    num--;
} while (num != 0);
console.log("Factorial Number: " + fact);

// Activity 4: Nested Loop
// Task 7
console.log("\nActivity 4: Nested Loop");
let n = 5;
let pattern = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    pattern += "\n";
}
console.log(pattern);

// Activity 5: Loop Control Statements
// Task 8
console.log("\nActivity 5: Loop Control Statements");
for (let i = 1; i <= 10; i++) {
    if (i == 5) continue;
    console.log(i);
}

// Task 8
for (let i = 1; i <= 10; i++) {
    if (i == 7) break;
    console.log(i);
}
