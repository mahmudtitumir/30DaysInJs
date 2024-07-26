let personName = 'arabi',
    personAge = 30;
console.log(`Name: ${personName} age: ${personAge}`);

console.log(`My name is ${personName}.
And age is ${personAge}.`);

const arr = [1, 2];
const [first, second] = arr;
console.log(first, second);

const obj = { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' };
const { title: one, author: two } = obj;
console.log(one, two);
