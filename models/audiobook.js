
import Book from "./book.js";

class AudioBook extends Book {

    constructor(title,author,isbn,copies,fileDuration)
    
    {
    super(title,author,isbn,copies)
    
    this.fileDuration=fileDuration;
        
    }
    
    getFormat () {  return `audioBook (${this.fileDuration} hours)` }
    
    
    }

    module.exports=AudioBook;
    