import { Component, OnInit, Input } from '@angular/core';
import { VotingLocation } from '../../domain/models/votingLocation';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css'],
  // inputs: ['location']
})
export class LocationDetailsComponent implements OnInit {

@Input()
public location: VotingLocation;

  constructor() { }

  ngOnInit() {
  }

}
