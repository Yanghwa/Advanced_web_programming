//dependencies
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';	//set http static codes like 501
import 'rxjs/add/operator/map';

@Injectable() 
export class BookService {
	constructor(private http: Http) {}

	//get
	getBooks() {
		return this.http.get('/api').map(response => response.json());
	}
}