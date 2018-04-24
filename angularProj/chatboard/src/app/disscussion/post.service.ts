import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

@Injectable()
export class PostService {
  constructor(private http: Http) {}

  storePosts(posts: any[]) {
    return this.http.post('https://chatposts-4a2e7.firebaseio.com/postData.json', posts);
  }

  addComment(comments: any[]) {
    return this.http.post('https://comments-ff819.firebaseio.com/commentsData.json', comments);
  }
}
