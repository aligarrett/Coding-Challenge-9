// Task 1: Create a Book Class

class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this._isAvailable = true; // Default is true so it shows the book as avaliable
    }

    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}`;
    }

    get isAvailable() {
        return this._isAvailable;
    }

    set isAvailable(status) {
        this._isAvailable = status;
    }
}

// Task 2: Create a Section Class

class Section {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    getAvailableBooks() {
        return this.books.filter(book => book.isAvailable).length;
    }

    listBooks() {
        this.books.forEach(book => {
            console.log(`${book.title} - Available: ${book.isAvailable}`);
        });
    }

// Task 5:  Handle Books Borrowing and Returning

    calculateTotalBooksAvailable() {
        return this.getAvailableBooks();
    }
}

// Task 3: Create a Patron Class

    class Patron {
        constructor(name) {
            this.name = name;
            this.borrowedBooks = [];
        }
    
        borrowBook(book) {
            if (book.isAvailable) {
                this.borrowedBooks.push(book);
                book.isAvailable = false;
                console.log(`${this.name} borrowed "${book.title}"`);
            } else {
                console.log(`"${book.title}" is not available for borrowing.`);
            }
        }
    
        returnBook(book) {
            const index = this.borrowedBooks.indexOf(book);
            if (index > -1) {
                this.borrowedBooks.splice(index, 1);
                book.isAvailable = true;
                console.log(`${this.name} returned "${book.title}"`);
            }
        }
    }

// Task 4: Create a VIPPatron Class that Inherits from Patron

    class VIPPatron extends Patron {
        constructor(name) {
            super(name);
            this.priority = true;
        }
    
        borrowBook(book) {
            if (book.isAvailable) {
                super.borrowBook(book);
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
fictionSection.addBook(book1);
fictionSection.addBook(book2);
fantasySection.addBook(book3);
fantasySection.addBook(book4);

// Create patrons
const patron1 = new Patron("Mac");
const vipPatron = new VIPPatron("Cheese");

// Patrons borrow books
patron1.borrowBook(book1);
vipPatron.borrowBook(book3);

// Calculate total available books
console.log(`Fiction Section Available Books: ${fictionSection.calculateTotalBooksAvailable()}`);
console.log(`Fantasy Section Available Books: ${fantasySection.calculateTotalBooksAvailable()}`);

// Return a book
patron1.returnBook(book1);
console.log(`Fiction Section Available Books after return: ${fictionSection.calculateTotalBooksAvailable()}`);
    