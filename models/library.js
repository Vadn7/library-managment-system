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

  module.exports=Library;