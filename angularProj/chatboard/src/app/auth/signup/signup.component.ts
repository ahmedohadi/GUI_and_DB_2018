import { ServerService } from './../server.service';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormsModule, NgForm, NgModel, FormControl } from '@angular/forms';
// import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  candidates = ['President', 'Senator', 'Congressman'];
  parties = ['Democrat', 'Republican', 'Independent'];
@ViewChild('f') signupForm: NgForm;

users;

 showCandidateList: Boolean;
 showPartyList: Boolean;

  constructor(private serverService: ServerService) { // private authService: AuthService  - passed to the construct
    this.showCandidateList = false;
    this.showPartyList = false;
  }
  addUser(form: NgForm) {
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
    console.log(form);
  }
  onSave() {
    this.serverService.storeUser(this.users)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }







  candidateShowHideList() {
    if (this.showCandidateList === false) {
      this.showCandidateList = true;
    } else if (this.showCandidateList === true) {
      this.showCandidateList = false;
    }
  }

  partyShowHideList() {
    if (this.showPartyList === false) {
      this.showPartyList = true;
    } else if (this.showPartyList === true) {
      this.showPartyList = false;
    }
  }
  ngOnInit() {
  }

  // onSignup(form: NgForm) {
  //   const username = form.value.username;
  //   const password = form.value.password;
  //   this.authService.signupUser(username, password);
  // }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }



  // alternavitly
  // onSubmit() {
  //   console.log(this.signupForm);
  // }

}
