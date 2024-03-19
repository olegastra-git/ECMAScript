"use strict";

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    
    displayInfo() {
        console.log(`Book: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Number of pages: ${this.pages}`);
    }
}

const book1 = new Book("Harry Potter", "J.K. Rowling", 400);
const book2 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 250);

book1.displayInfo();
book2.displayInfo();