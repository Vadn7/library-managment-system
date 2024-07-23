import Library from './library2.js'

let library=new Library();

import Book from './book.mjs'
import EBook from './ebook.js';
import AudioBook from'./audiobook.js';

library.addBook(new Book("To Kill a Mockingbird", "Harper Lee", "9780061120084", 3));
library.addBook(new EBook("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565", 2, 1.5));
library.addBook(new AudioBook("Moby Dick", "Herman Melville", "9781503280786", 4, 24));

console.log(library.listBooks()); 

library.borrowBooks("9780061120084",2);

console.log(library.findBook("9780743273565"))

console.log(library.listBooks()); 

library.removeBook("9780743273565")

console.log(library.listBooks()); 