
//Basic string "primitive object"
//const Hi = 'Hello World';
//console.log(Hi.toUpperCase());
//console.log(typeof Hi);

//Basic Object 
//const Hi2 = new String('Hello Wold');
//onsole.log(typeof Hi2);
///////////////////////////////


//Object literal
const book1 = {
	title: 'book one',
	author: 'Jhon Doe',
	year: '2018',
	getSummary: function(){
		return `${this.title} was written by ${this.author} in ${this.year}`;

	}
};

//console.log(Object.values(book1));
//console.log(Object.keys(book1));
//console.log(book1.getSummary());


//Object2 literal
const book2 = {
	title: 'book two',
	author: 'Jane Doe',
	year: '2011',
	getSummary: function(){
		return `${this.title} was written by ${this.author} in ${this.year}`;

	}
};

//console.log(Object.values(book2));
//console.log(Object.keys(book1));
//console.log(book1.getSummary());
