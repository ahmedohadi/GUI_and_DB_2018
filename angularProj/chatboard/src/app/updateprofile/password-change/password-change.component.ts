import { Component, OnInit, Input } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Profile } from './../../domain/models/profile';
import { AlertService } from '../../domain/services/alert.service';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {

  @Input()
  public profile: Profile;

  public oldPassword: string;
  public firstPassword: string;
  public secondPassword: string;

  constructor(private alertService: AlertService) {
    this.profile = {};
  }

  ngOnInit() {
  }

  update() {
    if (this.firstPassword !== this.secondPassword) {
      this.alertService.error('Error passwords did not match');
      console.log(this.firstPassword + this.oldPassword + this.secondPassword);
    }

    this.firstPassword = '';
    this.oldPassword = '';
    this.secondPassword = '';
  }

}
