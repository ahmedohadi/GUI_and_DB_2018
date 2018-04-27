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
    // needed to specify all atributes because this.profile == undefined didnt work for this particular if statment
    if (!(
      this.profile.description ||
      this.profile.candidates ||
      this.profile.email ||
      this.profile.firstname ||
      this.profile.lastname ||
      this.profile.phone ||
      this.profile.zipcode ||
      this.profile.party
    )
    ) {
      this.alertService.clear();
      this.alertService.error('Please enter atleast one thing to update');
    } else {
    this.profileRepository.update('updateAccount/muaz', this.profile).subscribe(x => {
    this.alertService.clear();
    this.alertService.success('your profile has been updated');
    });

  }
    console.log(this.profile);
    this.profile = {};
    // this.navigatebyUrl('/home/profile');
  }

}
