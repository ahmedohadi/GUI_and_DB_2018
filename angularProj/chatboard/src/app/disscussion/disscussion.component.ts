import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel, NgForm, FormsModule, FormControl } from '@angular/forms';
import { PostService } from './post.service';
import { Profile } from '../domain/models/profile'
import { Post } from '../domain/models/post'


@Component({
  selector: 'app-disscussion',
  templateUrl: './disscussion.component.html',
  styleUrls: ['./disscussion.component.css']
})
export class DisscussionComponent implements OnInit {
@ViewChild('f') postForm: NgForm;
// @ViewChild('m') commentsForm: NgForm;
currentUser: Profile;
showCommentFields = false;

post;
postsArr: Post;

constructor(private postService: PostService) { 
  this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
}

ngOnInit() {
  this.postService.getPosts().subscribe(posts => {
    this.postsArr = posts
  });
}

storePosts(form: NgForm) {
  this.post = {
      username: this.currentUser.username,
      body: this.postForm.value.newPost,
      tag1: "test",
      tag2: "test",
      tag3: "test",
      tag4: "test",
      likes: 0
    };

    //console.log(form);
    this.postService.storePosts(this.post)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    this.postForm.reset();
  }


}
