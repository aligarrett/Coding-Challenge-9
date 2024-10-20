// Task 1: Create a Book Class

class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this._isAvailable = true; // Default is true so it shows the book as avaliable
    }

    getDetails() { // Returns the details of the book as a string
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}`;
    }

    get isAvailable() { // Getter for checking if the book is available
        return this._isAvailable;
    }

    set isAvailable(status) { // Setter to update the book's availability
        this._isAvailable = status;
    }
}

// Task 2: Create a Section Class

class Section {
    constructor(name) {
        this.name = name;
        this.books = []; // Array to hold books in this section
    }

    addBook(book) {
        this.books.push(book); // Adds a book to the section
    }

    getAvailableBooks() {
        return this.books.filter(book => book.isAvailable).length; // Filters and counts available books in the section
    }

    listBooks() {
        this.books.forEach(book => {
            console.log(`${book.title} - Available: ${book.isAvailable}`); // Lists all books in the section with their availability status
        });
    }

// Task 5: Handle Books Borrowing and Returning

    calculateTotalBooksAvailable() { // Uses getAvailableBooks() to calculate the number of available books
        return this.getAvailableBooks();
    }
}

// Task 3: Create a Patron Class

    class Patron {
        constructor(name) {
            this.name = name;
            this.borrowedBooks = []; // Array to store borrowed books
        }
    
        borrowBook(book) {
            if (book.isAvailable) { // Allows the patron to borrow a book if available
                this.borrowedBooks.push(book);
                book.isAvailable = false; // Updates book status to borrowed
                console.log(`${this.name} borrowed "${book.title}"`);
            } else {
                console.log(`"${book.title}" is not available for borrowing.`);
            }
        }
    
        returnBook(book) { // Allows the patron to return a borrowed book
            const index = this.borrowedBooks.indexOf(book);
            if (index > -1) {
                this.borrowedBooks.splice(index, 1); // Removes book from borrowed list
                book.isAvailable = true; // Updates book status to available
                console.log(`${this.name} returned "${book.title}"`);
            }
        }
    }

// Task 4: Create a VIPPatron Class that Inherits from Patron

class VIPPatron extends Patron {
    constructor(name) {
        super(name); // Inherits properties from the Patron class
        this.priority = true; // VIP patrons have priority for borrowing
    }

    borrowBook(book) {
        if (book.isAvailable) { // VIP patrons borrow books if available
            super.borrowBook(book); // Reuses the borrowBook() method from Patron
        } else {
            console.log(`"${book.title}" is currently unavailable for borrowing, but ${this.name} has VIP priority.`);
        }
    }
}

// Task 6: Create and Manage Sections and Patrons

// Create sections
const fictionSection = new Section("Fiction");
const fantasySection = new Section("Fantasy");

// Create books
const book1 = new Book("The Help", "Kathryn Stockett", "12345");
const book2 = new Book("Fahrenheit 451", "Ray Bradbury", "67890");
const book3 = new Book("The Golden Compass", "Philip Pullman", "11223");
const book4 = new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", "33445");

// Add books to sections
fictionSection.addBook(book1); // Add book to Ficiton Section
fictionSection.addBook(book2);
fantasySection.addBook(book3); // Add book to Fantasy Section
fantasySection.addBook(book4);

// Create patrons
const patron1 = new Patron("Mac"); // Regular Patron
const vipPatron = new VIPPatron("Cheese"); // VIP Patron

// Patrons borrow books
patron1.borrowBook(book1); // Mac borrows "The Help"
vipPatron.borrowBook(book3); // Cheese borrows "The Golden Compass"

// Calculate total available books
console.log(`Fiction Section Available Books: ${fictionSection.calculateTotalBooksAvailable()}`); // Shows avaliable books in section
console.log(`Fantasy Section Available Books: ${fantasySection.calculateTotalBooksAvailable()}`);

// Return a book
patron1.returnBook(book1); // Mac returns "The Help"
console.log(`Fiction Section Available Books after return: ${fictionSection.calculateTotalBooksAvailable()}`); // Updates availability in Fiction