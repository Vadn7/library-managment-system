/*class Book {  


    constructor(title, author, isbn, copies)
    {

        this.title=title;

        this.author=author;
        this.isbn=isbn;
        this.copies=copies;

    }


  }*/


/*    function name(books) {
    
        return books.title
        
        }
*/
/*
export default class Book {  


       constructor(title, author, isbn, copies)
        {
            this.title=title;
    
            this.author=author;
            this.isbn=isbn;
            this.copies=copies;

        }


        getTitle(){ return this.title;     }
    
        setTitle(Title){ this.title=Title;     }
    

        getAuthor(){ return this.author;     }

        setAuthor(Author){ this.author=Author  ;     }


        getIsbn(){  return this.isbn;     }

        setIsbn(Isbn){  this.isbn=Isbn;     }


        getCopies() { return  this.copies;  }

        setCopies(Copies) {  this.copies=Copies;  }


        getAvailable() {  return this.copies > 0 ? "Available" : "Out of stock" }

   }


*/




//let ebook = new Ebook("1984", "George Orwell", "123456789", 5, 2);
//let audiobook = new AudioBook("1984", "George Orwell", "123456789", 3, 15);

//console.log(ebook.getFormat());

//console.log(ebook.getAvailable());


//console.log(audiobook.getFormat());









class Book {  


    constructor(title, author, isbn, copies)
     {
         this.title=title;
 
         this.author=author;
         this.isbn=isbn;
         this.copies=copies;

     }


     getTitle(){ return this._title;     }
 
     setTitle(Title){ this._title=Title;     }
 

     getAuthor(){ return this._author;     }

     setAuthor(Author){ this._author=Author  ;     }


     getIsbn(){  return this._isbn;     }

     setIsbn(Isbn){  this._isbn=Isbn;     }


     getCopies() { return  this._copies;  }

     setCopies(Copies) {  this._copies=Copies;  }


     getAvailable() {  return this._copies > 0 ? "Available" : "Out of stock" }

}

module.exports=Book;