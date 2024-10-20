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

    