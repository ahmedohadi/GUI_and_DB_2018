import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { VotingLocation } from './../domain/models/votingLocation';

@Component({
  selector: 'app-voting-locations',
  templateUrl: './voting-locations.component.html',
  styleUrls: ['./voting-locations.component.css'],
})
export class VotingLocationsComponent implements OnInit {

  public filter: string;
  public locations: object;
  public currentLocation: object;

  showLocation(item) {
    this.filter = item.name;
    item.highlight = !item.highlight;
    this.currentLocation = item;
  }

  constructor(private http: HttpClient) {
    this.filter = '';
   }

  ngOnInit(): void {
    this.http.get<Object>('../assets/data.json').subscribe( data => {
      this.locations = data;
    });
  }

}
