import { Component, OnInit, Input } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Profile } from './../domain/models/profile';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {

  @Input()
  public profile: Profile;

  constructor() { }

  ngOnInit() {
    this.profile = {};
  }

  update() {
    console.log(this.profile);
    this.profile = {};
  }

}
