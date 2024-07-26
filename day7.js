// Activity 1: Object Creation and Access
console.log('Activity 1: Object Creation and Access');

// Task 1
const Book = {
    title: '1984',
    author: 'george orwell',
    year: 1948,
};
console.log(Book);
// Task 2
console.log(Book.title);
console.log(Book['author']);

// Activity 2: Object Methods
console.log('\nActivity 2: Object Methods');
// Task 3
Book.getBookTitleAndAuthor = function () {
    return `${Book.title} by ${Book.author}`;
};
console.log(Book.getBookTitleAndAuthor());
// Task 4
Book.updateYear = function (year) {
    Book.year = year;
};
Book.updateYear(2024);
console.log(Book);

// Activity 3: Nested Objects
console.log('\nActivity 3: Nested Objects');
// Task 5
const Library = {
    name: 'Central Library',
    books: [
        {
            title: '1984',
            author: 'George Orwell',
            year: 1948,
        },
        {
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            year: 1960,
        },
        {
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            year: 1925,
        },
    ],
};
console.log(Library);
// Task 6
// const alltitle = Library.books.map(element => element.title);
// console.log(alltitle);
for (let i = 0; i < Library.books.length; i++) {
    console.log(Library.books[i].title);
}

// Activity 4: The this Keyword
console.log('\nActivity 4: The this Keyword');
// Task 7
Book.getBookTitleAndAuthorUsingthis = function () {
    return `${this.title} by ${this.year}`;
};
console.log(Book.getBookTitleAndAuthorUsingthis());

// Activity 5: Object Iteration
console.log('\nActivity 5: Object Iteration');
// Task 8
const BookAnother = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
};
for (let item in BookAnother) {
    console.log(`${item}: ${BookAnother[item]}`);
}
// Task 9
console.log(Object.keys(BookAnother));
console.log(Object.values(BookAnother));
