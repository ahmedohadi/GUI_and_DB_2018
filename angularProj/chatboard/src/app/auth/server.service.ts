// import { HttpClient } from 'selenium-webdriver/http';
import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}

  storeUser(users: any[]) {
    return this.http.post('https://backend-6ace2.firebaseio.com/usersData.json', users);
  }

  loginUsers(user: any[]) {
    return this.http.post('https://logindata-6f113.firebaseio.com/usersData.json', user);
  }
}

