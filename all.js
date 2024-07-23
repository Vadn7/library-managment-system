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



class Ebook extends Book {


    constructor(title,author,isbn,copies,fileSize)
    
    {
    super(title,author,isbn,copies);
this.fileSize=fileSize;
}

getFormat () {  return "Ebook " + this.fileSize+ " MB" }


    }


    class AudioBook extends Book {

        constructor(title,author,isbn,copies,fileDuration)
        
        {
        super(title,author,isbn,copies)
        
        this.fileDuration=fileDuration;
            
        }
        
        getFormat () {  return `audioBook (${this.fileDuration} hours)` }
        
        
        }

//console.log(ebook.getFormat());

//console.log(ebook.getAvailable());


//console.log(audiobook.getFormat());



class Library {  

    constructor ()
    {
 
 
 this.books=[]   
    
 }
 
 adding(book) {
 
this.books.push(book);
 
 /*
 const list=this.books.map(    function name(books) {
     
     return books.title
     
     })*/
 
     console.log(this.books) 
 console.log(" Book successfully added")
 
 
 }
 
 /*
 remove(Isbn) {
 /*
 let tp=this.books;
 
    for (let i=0;i<tp.length;i++)
     {
 
 if(tp[i]===book)
 {   this.books.splice(i,1)  }
 
     }
 
     console.log(this.books)
 
 
     return "Book successfully removed"
 */
 
 
 
//tp= this.books.filter(el=> el.isbn!==isbn) 


//this.books.splice(this.books.findIndex(v => v.isbn === isbn), 1);
/*
let index=this.books.findIndex(obj => obj.isbn === Isbn);

console.log(index);

this.books.splice(index,1);
 }*/

remove(Isbn) {
//    this.books = this.books.filter(book => book.isbn !== Isbn);
 
let index=this.books.findIndex(obj => obj.isbn === Isbn);

console.log(index)

}

removeBook(isbn) {
    this.books = this.books.filter(book => book.isbn !== isbn);
  }

search(Isbn) {
    return this.books.find(book => book.isbn === Isbn);
  }
 
  
 /*
     for (let i=0;i<tp.length;i++)
         {
     
     if(this.books[i].title===name)
     {   return "The book you where looking for is here"  }
     
         }
 */

  /*       search(isbn){
let find=false //boo=this._books
//let len=boo.length;


for(let book in this._books) {   if(book.isbn===isbn){find=true;  return  book  }   }
    
if(!find) { console.log("Not found") }


/*
if (result) { console.log("Book found ") ; console.log("Book found ")  ; console.log(result);

}
else { console.log("Book isn't in the library") }
      
 
         }
*/

/*
remove(isbn) {
    this.books = this.books.filter(book => book.isbn !== isbn);
  }
*/
/*search(isbn){
   
   
    return this.books.find(book => book.isbn === isbn)
  

}*/


listBooks(){
console.log(this.books);

  }

   

}

let library=new Library();

library.adding(new Book("To Kill a Mockingbird", "Harper Lee", "9780061120084", 3));
library.adding(new Ebook("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565", 2, 1.5));
library.adding(new AudioBook("Moby Dick", "Herman Melville", "9781503280786", 4, 24));


/*
   library.adding(ebook);
   library.adding(audiobook);
*/
   library.removeBook('9780743273565');

console.log(library.removeBook("123456789"))

console.log(library.search("123456799"))
library.listBooks()