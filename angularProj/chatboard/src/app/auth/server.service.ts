// Code adapted from https://embed.plnkr.co/plunk/UvIxFe
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ServerService {
  constructor(private http: HttpClient) {}

  protected httpOptions  = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  // URL of docker address
  storeUser(users: any) {
    return this.http.post('http://127.0.0.1:3000/signup', users, this.httpOptions);
  }

  loginUsers(user: any) {
    return this.http.post('http://127.0.0.1:3000/authentication', user, this.httpOptions);
  }
}

