// import { HttpClient } from 'selenium-webdriver/http';
import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class ServerService {
  constructor(private http: HttpClient) {}

  protected httpOptions  = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
    })
  };

  //URL of docker address
  storeUser(users: any) {
    return this.http.post('http://127.0.0.1:3000/signup', users, this.httpOptions);
  }

  loginUsers(user: any[]) {
    return this.http.post('https://logindata-6f113.firebaseio.com/usersData.json', user);
  }
}

