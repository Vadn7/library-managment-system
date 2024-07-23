import Book from "./book.js";

class Ebook extends Book {


    constructor(title,author,isbn,copies,fileSize)
    
    {
    super(title,author,isbn,copies);
this.fileSize=fileSize;
}

getFormat () {  return "Ebook " + this.fileSize+ " MB" }


    }

    module.exports=Ebook;
