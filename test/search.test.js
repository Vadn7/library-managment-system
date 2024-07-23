const Library = require('../models/library')

const Ebook = require('../models/ebook')

const AudioBook = require('../models/audiobook');

const Book = require('../models/book');

let ebook = new Ebook("1984", "George Orwell", "123456789", 5, 2);
let audiobook = new AudioBook("1984", "George Orwell", "123456789", 3, 15);

let library = new Library;

test('searching a book', () => {

    library.addBook(ebook)

    expect(library.searchBook("123456789")).toBe(ebook);

    library.removeBook("123456789")

    expect(library.searchBook("123456789")).toBe(undefined);

});

