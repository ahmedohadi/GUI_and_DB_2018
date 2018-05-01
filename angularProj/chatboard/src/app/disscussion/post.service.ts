import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}

  protected httpOptions  = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  storePosts(posts: any) {
    return this.http.post('http://127.0.0.1:3000/addpost', posts, this.httpOptions);
  }

  addComment(comments: any) {
    return this.http.post('http://127.0.0.1:3000/comment/addcomment', comments, this.httpOptions);
  }

  getPosts() {
    return this.http.get('http://127.0.0.1:3000/allposts', this.httpOptions);
  }

  getComments(id: number) {
    return this.http.get('http://127.0.0.1:3000/getcomment/' + id, this.httpOptions);
  }

  getTimeDate(id: number) {
    return this.http.get('http://127.0.0.1:3000/allposts/' + id, this.httpOptions);
  }

  deletePosts(id: number) {
    return this.http.delete('http://127.0.0.1:3000/deletePost/' + id, this.httpOptions);
  }
}

