import { NgForm, NgModel, FormsModule, FormControl } from '@angular/forms';
import { ServerService } from './../server.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;

  user;

  constructor(private serverService: ServerService) {}

  userLogin(form: NgForm) {
    this.user = {
      username: this.loginForm.value.loginData.loginName,
      password: this.loginForm.value.loginData.loginPass
    };
    this.serverService.loginUsers(this.user)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    //console.log(form);
  }
  // onLogIn() {
  //   this.serverService.loginUsers(this.user)
  //   .subscribe(
  //     (response) => console.log(response),
  //     (error) => console.log(error)
  //   );
  // }

  ngOnInit() {
  }

}
