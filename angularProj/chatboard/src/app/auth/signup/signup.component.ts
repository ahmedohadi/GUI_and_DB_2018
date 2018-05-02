import { ServerService } from './../server.service';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormsModule, NgForm, NgModel, FormControl } from '@angular/forms';
import { AlertService } from '../../domain/services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  candidates = ['President', 'Senator', 'Congressman', 'Voter'];
  parties = ['Democrat', 'Republican', 'Independent'];
@ViewChild('f') signupForm: NgForm;

 users;
 loading = false;

 showCandidateList: Boolean;
 showPartyList: Boolean;

  constructor(
    private serverService: ServerService,
    public router: Router,
    private alertService: AlertService
  ) { 
    this.showCandidateList = false;
    this.showPartyList = false;
  }
  addUser(form: NgForm) {
    this.loading = true;
    this.users = {
      firstname: this.signupForm.value.personalData.firstname,
      lastname: this.signupForm.value.personalData.lastname,
      email: this.signupForm.value.personalData.email,
      username: this.signupForm.value.personalData.username,
      password: this.signupForm.value.personalData.password,
      zipcode: this.signupForm.value.personalData.firstname,
      candidates: this.signupForm.value.candidatesRadioList.candidate,
      parties: this.signupForm.value.partyRadioList.party
    };

    if (this.signupForm.value.personalData.password === this.signupForm.value.personalData.ConfirmPassword) {
    this.serverService.storeUser(this.users)
    .subscribe(
      (response) => {
        if (response == 600) {
          this.alertService.clear();
          this.alertService.error("Invalid username!");
          this.loading = false;
        }
        if (response == 200) {
          this.router.navigateByUrl('/login');
        }
      },
        (error) => {
                  this.alertService.clear();
                  this.alertService.error("Internal server error!");
                  this.loading = false;
        }
    );
    } else {
      this.alertService.clear();
                  this.alertService.error("Password does not match!");
                  this.loading = false;
    }
  }

  ngOnInit() {
  }

}
