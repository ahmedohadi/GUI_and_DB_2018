import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, NgModel, FormControl } from '@angular/forms';
import { Profile } from '../domain/models/profile';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser: Profile;
  constructor(private router: Router
  	) { }

  ngOnInit() {
  	this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  link(username){
    this.router.navigateByUrl('home/profile/' + username);
  }
}
