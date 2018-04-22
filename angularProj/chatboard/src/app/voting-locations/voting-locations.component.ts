import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { VotingLocation } from './../domain/models/votingLocation';
import { ActivatedRoute, Router } from '@angular/router';
import {VotingLocationRepostitory } from './../domain/votingLocation-repository.service';


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

  constructor(
    private http: HttpClient,
    public votingLocationRepostitory: VotingLocationRepostitory,
    public router: Router,
    ) {
    this.filter = '';
   }

  // ngOnInit(): void {
  //   this.http.get<Object>('../assets/data.json').subscribe( data => {
  //     this.locations = data;
  //   });
  // }

    ngOnInit() {

    this.votingLocationRepostitory.get().subscribe(locations => {
    this.locations = locations;
   });
 }
}
