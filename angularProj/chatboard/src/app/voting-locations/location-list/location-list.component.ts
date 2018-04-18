import { Component, OnInit, Input } from '@angular/core';
import { VotingLocation } from '../../domain/models/votingLocation';


@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css'],
  // inputs: ['location']
})
export class LocationListComponent implements OnInit {
  @Input()
  public location: VotingLocation;


  constructor() { }

  ngOnInit() {
  }

}
