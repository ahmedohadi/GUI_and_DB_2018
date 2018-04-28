import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../domain/models/profile';
import { SearchRepostitory } from '../domain/search-repository.service';
import {  NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  criteria = ['Zipcode', 'Issues', 'Candidate'];
  public profiles: Profile[];
 
  public issues = [
    { issue: 'Economy and Jobs' },
    { issue: 'Health Care'},
    { issue: 'Federal deficit and budget'},
    { issue: 'Immigration' },
    { issue: 'Environment and Global Warming' },
    { issue: 'Abortion' },
  ];

  @Input()
  public query: string;
  public type: string;

  constructor(
    public searchRepostitory: SearchRepostitory,
   
  ) { }

  ngOnInit() {
  }

  onSelectionChange(idx){
    this.type = idx;
    // this.type = this.type.toLowerCase().substring(3,);
  }

  submit() {

    console.log(`${this.query} ---- ${this.type}`);
    this.searchRepostitory.search(this.type,this.query).subscribe(data => {
      this.profiles = data;
    });
    this.query = '';
  }
}
