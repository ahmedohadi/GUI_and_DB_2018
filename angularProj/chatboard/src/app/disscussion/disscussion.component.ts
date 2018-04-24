import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel, NgForm, FormsModule, FormControl } from '@angular/forms';
import { PostService } from './post.service';


@Component({
  selector: 'app-disscussion',
  templateUrl: './disscussion.component.html',
  styleUrls: ['./disscussion.component.css']
})
export class DisscussionComponent implements OnInit {
@ViewChild('f') postForm: NgForm;
// @ViewChild('m') commentsForm: NgForm;

showCommentFields = false;

postsArr = [];
commentArr = [];

constructor(private postService: PostService) { }

ngOnInit() {}

storePosts(form: NgForm) {
  this.postsArr.push({
    userPosts: this.postForm.value.newPost,
  });
    // console.log(form);
    this.postService.storePosts(this.postsArr)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    this.postForm.reset();
  }


}
