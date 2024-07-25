// Activity 1: Array Creation and Access
console.log('Activity 1: Array Creation and Access');
// Task 1
const arr = [1, 2, 3, 4, 5];
console.log(arr);

// Task 2
const arr1st = arr[0];
const arrLast = arr[arr.length - 1];
console.log(arr1st, arrLast);

// Activity 2: Array Methods (Basic)
console.log('Activity 2: Array Methods (Basic)');
// Task 3
arr.push(55);
console.log(arr);

// Task 4
arr.pop();
console.log(arr);

// Task 5
arr.shift();
console.log(arr);

// Task 6
arr.unshift(33);
console.log(arr);

// Activity 3: Array Methods (Intermediate)
console.log('Activity 3: Array Methods (Intermediate)');
// Task 7
const doubleArr = arr.map(i => i * i);
console.log(doubleArr);

// Task 8
const isEven = arr.filter(i => {
    if (i % 2 == 0) return i;
});
console.log(isEven);
// Task 9
const sum = arr.reduce((a, c) => a + c, 0);
console.log(sum);

// Activity 4: Array Iteration
console.log('Activity 4: Array Iteration');
// Task 10
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// Task 11
arr.forEach(i => console.log(i));

// Activity 5: Multi-dimensional Arrays
console.log('Activity 5: Multi-dimensional Arrays');
// Task 12
let matrix = [
    [2, 8],
    [4, 9],
];
console.log(matrix);
// Task 13
console.log(matrix[1][0]);
