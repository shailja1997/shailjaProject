import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { retry } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor(private http: HttpClient) { }

  getToDO() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
  getuser() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');

  }
  getphotos() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }

  getcomments() {
    return this.http.get('https://jsonplaceholder.typicode.com/comments');
  }

  getpost() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  getalbum(){
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }

}



