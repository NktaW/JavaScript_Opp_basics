// Constructor

function Book(title, author, year) {
    this.title = title,
    this.author = author,
    this.year = year;
  }

  // Prototype
  // getSummary function is stored in the prototype

  Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
  

  // getAge Prototype

  Book.prototype.getAge = function(){
      const years = new Date().getFullYear() - this.year;
      return `${this.title} is ${years} years old`;
  };


  // Revise / Change year "data manipulation"

  Book.prototype.revise = function(newYear){
      this.year = newYear;
      this.revised = true;
  }
  
  // Instatiate an Object
  const book1 = new Book('book one', 'Jhon Doe', '2018');
  const book2 = new Book('book two', 'Jane Doe', '2011');
  
  //console.log(book2);
  //console.log(book2.getSummary());
  //console.log(book1.getAge());

  console.log(book2);
  book2.revise('2020');
  console.log(book2);