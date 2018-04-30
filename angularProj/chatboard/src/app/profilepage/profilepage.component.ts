import { Component, OnInit } from '@angular/core';
import { ProfileRepository } from '../domain/profile-repository.service';
import { Profile } from '../domain/models/profile';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})

export class ProfilepageComponent implements OnInit {

  testUser: any;
  currentUser: Profile;

  constructor(private profileService: ProfileRepository) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  this.profileService.getAccount(this.currentUser.username).subscribe(user => {
    this.currentUser = user;
  });
  }


}
