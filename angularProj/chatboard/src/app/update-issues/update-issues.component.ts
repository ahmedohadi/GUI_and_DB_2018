import { Component, OnInit, Input } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Profile } from './../domain/models/profile';

@Component({
  selector: 'app-update-issues',
  templateUrl: './update-issues.component.html',
  styleUrls: ['./update-issues.component.css']
})
export class UpdateIssuesComponent implements OnInit {
  @Input()
  public profile: Profile;

  public issues: string [];

  constructor() {
    this.issues = [];
   }

  ngOnInit() {

  }

  update() {
    console.log(this.issues);
    this.issues = [];
  }
}
