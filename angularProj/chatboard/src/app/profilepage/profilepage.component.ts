import { Component, OnInit } from '@angular/core';
import { ProfileRepository } from '../domain/profile-repository.service';
import { Profile } from '../domain/models/profile';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})

export class ProfilePageComponent implements OnInit {

  testUser: any;
  userShow: Profile;
  issues: any[];

  constructor(
    private profileService: ProfileRepository,
    private activatedRoute: ActivatedRoute) {
    // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.profileService.getAccount(params.username).subscribe(user => {
        this.userShow = user;
        this.issues = this.userShow.issues;
        //console.log(this.issues);
      });
    });
  }

  public getProfile(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('userName');
    console.log(id);
    this.profileService.getAccount(id)
      .subscribe(profile => this.userShow = profile);
  }


}
