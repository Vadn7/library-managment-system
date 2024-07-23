export default class Library {  

    constructor (book)
    {
 
 book=[]
 
 this._books=book    
    
 }
 
 adding(book) {
 
 this._books.push(book);
 
 /*
 const list=this.books.map(    function name(books) {
     
     return books.title
     
     })*/
 
 
 console.log(this._books)
 
 return "Book successfully added"
 
 }
 
 
 remove(isbn) {
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
 
 
 
 this._books=this._books.filter(function (n){ return n.isbn!==isbn  } )
 
 
     }
 
 search(isbn) {
 
 /*
     for (let i=0;i<tp.length;i++)
         {
     
     if(this.books[i].title===name)
     {   return "The book you where looking for is here"  }
     
         }
 */
 
 
 return this._books.find( n=> n._isbn===isbn  )
 
 }
   }
 