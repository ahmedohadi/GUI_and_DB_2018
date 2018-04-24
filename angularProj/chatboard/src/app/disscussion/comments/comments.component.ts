import { NgForm, NgModel, FormsModule, FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PostService } from '../post.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @ViewChild('f') commentForm: NgForm;

  constructor(private postService: PostService) { }

  commentArr = [];

  ngOnInit() {
  }


  //   addComment(form: NgForm) {
  //   this.commentArr.push({
  //     userComments: this.commentForm.value.newComments,
  //   });

  //   this.postService.addComment(this.commentArr)
  //   .subscribe(
  //     (response) => console.log(response),
  //     (error) => console.log(error)
  //   );
  //   this.commentForm.reset();
  // }


  onEnter(form: NgForm) {
        this.commentArr.push({
          userComments: this.commentForm.value.newComments,
        });
        this.postService.addComment(this.commentArr)
        .subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
        );
        this.commentForm.reset();
    }
  }

