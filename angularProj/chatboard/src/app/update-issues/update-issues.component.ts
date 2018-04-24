import { Component, OnInit } from '@angular/core';
import { AlertService } from '../domain/services/alert.service';
import { NgForm, NgModel } from '@angular/forms';
import { Profile } from './../domain/models/profile';

@Component({
  selector: 'app-update-issues',
  templateUrl: './update-issues.component.html',
  styleUrls: ['./update-issues.component.css']
})

export class UpdateIssuesComponent implements OnInit {

    title: String;
    issues: any;
    selectedAll: any;
    unselectedAll: any;
    constructor(private alertService: AlertService) {
      this.title = 'Select all/Deselect all checkbox - Angular 2';
      this.issues = [
        { issue: 'The Economy and Jobs', selected: false },
        { issue: 'Health Care', selected: false },
        { issue: 'Federal deficit and budget', selected: false },
        { issue: 'Immigration', selected: false },
        { issue: 'Environment and Global Warming', selected: false },
        { issue: 'Abortion', selected: false },
      ];
    }

    ngOnInit() {

    }
    selectAll() {
      for (let i = 0; i < this.issues.length; i++) {
        this.issues[i].selected = this.selectedAll;
      }
    }
    unselectAll() {
      for (let i = 0; i < this.issues.length; i++) {
        if (this.issues[i].selected === true) {
        this.issues[i].selected = false;
        this.selectedAll = false;
        }
      }
    }
    checkIfAllSelected() {
      this.selectedAll = this.issues.every(function(item: any) {
          return item.selected === true;
        });
    }

    checkIfAtLeastOnSelected() {
      // tslint:disable-next-line:triple-equals
      if (this.selectedAll == true) {
          return true;
        }

       for (let i = 0; i < this.issues.length; i++) {
          // tslint:disable-next-line:triple-equals
          if (this.issues[i].selected == true) {
            return true;
          }
        }
        return false;
    }

    update() {
      console.log(this.issues[5]);
      if (this.checkIfAtLeastOnSelected() === false) {
        this.alertService.error('Error please select atleast one issue');
      }
      this.alertService.success('your profile has been updated');
      this.unselectAll() ;
    }
  }

