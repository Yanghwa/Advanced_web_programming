import { Component } from '@angular/core';

//define a book class
export class Book {
	id: number;
	title: string;
	author: string;
}

//set up an array of books
const BOOKS: Book[] = [
	{
	  	id: 100,
	  	title: 'Bit Rot',
	  	author: 'Douglas Coupland'
  	},
  	{
	  	id: 101,
	  	title: 'Heores of the Frontier',
	  	author: 'Dave Eggers'
  	},
  	{
	  	id: 122,
	  	title: 'Gone Girl',
	  	author: 'Gillian Flynn'
  	},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'Angular book List';
  message = 'Our first Angular Books';
  books = BOOKS;
  //create a book instance
  /*book: Book = {
  	id: 100,
  	title: 'Bit Rot',
  	author: 'Douglas Coupland'
  };
  */
}
