import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingLocationsComponent } from './voting-locations.component';

describe('VotingLocationsComponent', () => {
  let component: VotingLocationsComponent;
  let fixture: ComponentFixture<VotingLocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotingLocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
