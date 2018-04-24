import { Component, OnInit, Input } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Profile } from './../domain/models/profile';
import { AlertService } from '../domain/services/alert.service';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {

  @Input()
  public profile: Profile;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.profile = {};
  }

  update() {
    this.alertService.error('Please enter atleast one thing to update');
    console.log(this.profile);
    this.alertService.success('your profile has been updated');
    this.profile = {};
    // this.navigatebyUrl('/profile');
  }

}
