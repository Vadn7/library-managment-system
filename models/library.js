/*

class Book {
    constructor(title, author, isbn, copies) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this.copies = copies;
    }
  
    getAvailability() {
      return this.copies > 0 ? "Available" : "Out of stock";
    }
  

    getTitle(){ return this.title;     }
 
    setTitle(value){ this._title=value;     }


    getAuthor(){ return this._author;     }

    setAuthor(value){ this._author=value  ;     }


    getIsbn(){  return this._isbn;     }

    setIsbn(value){  this._isbn=value;     }


    getCopies() { return  this._copies;  }

    setCopies(value) {  this._copies=value;  }


    getAvailable() {  return this._copies > 0 ? "Available" : "Out of stock" }

}


  class EBook extends Book {
    constructor(title, author, isbn, copies, fileSize) {
      super(title, author, isbn, copies);
      this.fileSize = fileSize; // Taille du fichier en MB
    }
  
    getFormat() {
      return `EBook (${this.fileSize} MB)`;
    }
  }
  
  class AudioBook extends Book {
    constructor(title, author, isbn, copies, duration) {
      super(title, author, isbn, copies);
      this.duration = duration; // Durée en heures
    }
  
    getFormat() {
      return `AudioBook (${this.duration} hours)`;
    }
  }
*/

class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);

      console.log("Book added");
  // console.log(this.books);
    }
  
    removeBook(isbn) {
      this.books = this.books.filter(book => book.isbn !== isbn);
    
      console.log("Book removed");
      console.log(this.books);
    
    }
  
    searchBook(isbn) {
      return this.books.find(book => book.isbn === isbn);
    }
  
    listBooks() {
      return this.books.map(book => `${book.title} by ${book.author} with ${book.copies} `);
    }

    length() { return this.books.length; }
  
    borrowBooks(isbn, copies){ 
     let book=  this.books.find(book => book.isbn === isbn);



     if(book!==undefined) {  book.copies= book.copies-copies; 
      
      return "Book borrowed";  }
 
 else {  return "Book not found"}
      
}



}
/*  
  let library = new Library();
  library.addBook(new Book("To Kill a Mockingbird", "Harper Lee", "9780061120084", 3));
  library.addBook(new EBook("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565", 2, 1.5));
  library.addBook(new AudioBook("Moby Dick", "Herman Melville", "9781503280786", 4, 24));
  
  console.log(library.listBooks());

  library.removeBook("9780061120084");
  console.log(library.listBooks());
  
  console.log(library.findBook("9780743273565"));

  library.borrowBooks("9780743273565");

  console.log(library.findBook("9780743273565"));*/

  module.exports=Library;