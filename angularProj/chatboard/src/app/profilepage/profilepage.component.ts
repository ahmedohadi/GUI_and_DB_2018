import { Component, OnInit } from '@angular/core';

import { Profile } from '../domain/models/profile';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})

export class ProfilepageComponent implements OnInit {

  item: Profile = {
    username: "sith_lord",
    firstname: "The",
    lastname: "Senate",
    email: "galactic_empire@aol.rar",
    password: "have_you_heard_the_tragedy_of_darth_plagueis_the_wise",
    isVerified: true,
    zipcode: 66,
    candidates: "Emperor",
    party: "Empire",
  };

  constructor() { }

  ngOnInit() {
  }

}
