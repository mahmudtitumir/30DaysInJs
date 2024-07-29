// Activity 1: Template Literals
// Task 1
let personName = 'arabi',
    personAge = 30;
console.log(`Name: ${personName} age: ${personAge}`);

// Task 2
console.log(
    `My name is ${personName}.
    And age is ${personAge}.`
);

// Activity 2: Destructuring
// Task 3
const arr = [1, 2];
const [first, second] = arr;
console.log(first, second);

// Task 4
const obj = { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' };
const { title: one, author: two } = obj;
console.log(one, two);

// Activity 3: Spread and Rest Operetors
// Task 5
const arrNew = [...arr, 3, 4];
console.log(arrNew);

// Task 6
function sum(...args) {
    return args.reduce((a, c) => a + c, 0);
}
console.log(sum(...arrNew));

// Activity 4: Default Parameters
// Task 7
function product(a, b = 1) {
    return a * b;
}
console.log(product(5));

// Activity 5: Enhanced Object Literals
// Task 8
const name = 'arabi';
const age = 30;
const person = {
    name,
    age,
};
console.log(person);

// Task 9
const city = 'New York';
const country = 'USA';

const location = {
    [city]: country,
};
