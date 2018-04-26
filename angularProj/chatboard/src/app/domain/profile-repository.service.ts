import { catchError } from 'rxjs/operators';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profile } from './models/profile';
import { Repostitory } from './repository.service';

@Injectable()
export class ProfileRepository extends Repostitory<Profile> {

  protected endPoint = 'http://127.0.0.1:3000';

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

}


// this.activedRoute.params.subscribe((params: any) => {
//   this.ProfileRepository.getById(+params.username).subscribe(profile => {
//     this.profile = profile;
//
//   });
//
