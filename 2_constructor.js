// Constructor

function Book(title, author, year) {
  this.title = title,
  this.author = author,
  this.year = year;

  this.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }

}


// Instatiate an Object
const book1 = new Book('book one', 'Jhon Doe', '2018');
const book2 = new Book('book two', 'Jane Doe', '2011');

//console.log(book2);
//console.log(book2.getSummary());