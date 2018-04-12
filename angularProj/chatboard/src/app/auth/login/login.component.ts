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

  user = [
    {
    username: '',
    password: ''
  }
];

  constructor(private serverService: ServerService) {}

  userLogin(form: NgForm) {
    this.user.push({
      username: this.loginForm.value.loginData.loginName,
      password: this.loginForm.value.loginData.loginPass
    });
    console.log(form);
  }
  onLogIn() {
    this.serverService.loginUsers(this.user)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  ngOnInit() {
  }

}
