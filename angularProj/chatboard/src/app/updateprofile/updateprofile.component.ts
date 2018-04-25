import { Component, OnInit, Input } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Profile } from './../domain/models/profile';
import { AlertService } from '../domain/services/alert.service';
import { Router } from '@angular/router';
import { ProfileRepository } from '../domain/profile-repository.service';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {

  @Input()
  public profile: Profile;

  constructor(
    private alertService: AlertService,
    public router: Router,
    public profileRepository: ProfileRepository,
  ) { }

  ngOnInit() {
    this.profile = {};
  }

  update() {

    this.profileRepository.update('mcoviello1', this.profile).subscribe(x => {
    this.alertService.success('your profile has been updated');
    });

    this.alertService.error('Please enter atleast one thing to update');
    console.log(this.profile);
    this.profile = {};
    // this.navigatebyUrl('/profile');
  }

}
