const Library = require('../models/library')

const Ebook = require('../models/ebook')

const AudioBook = require('../models/audiobook');

const Book = require('../models/book');

let ebook = new Ebook("1984", "George Orwell", "123456789", 5, 2);
let audiobook = new AudioBook("1984", "George Orwell", "123456789", 3, 15);

let library = new Library;

test('Borrowing a book', () => {

    library.addBook(audiobook)

    expect(library.borrowBooks("123456789", 3)).toBe("Book borrowed");

    console.log(library.listBooks());

    expect(library.borrowBooks("111111111", 3)).toBe("Book not found");


});