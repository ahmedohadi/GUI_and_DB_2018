import { VotingLocationRepostitory } from './domain/votingLocation-repository';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { FormsModule } from '@angular/forms';
import { PasswordChangeComponent } from './updateprofile/password-change/password-change.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { SearchComponent } from './search/search.component';
import { Routes, RouterModule } from '@angular/router';
//import { AuthService } from './domain/services';
import { AuthenticationService } from './domain/services/authentication.service';
import { AlertService } from './domain/services/alert.service';
import { UserService } from './domain/services/user.service';
import { ServerService } from './auth/server.service';
import { HttpModule } from '@angular/http';
import { HttpClient } from 'selenium-webdriver/http';
import { PostService } from './disscussion/post.service';
import { UpdateIssuesComponent } from './update-issues/update-issues.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DisscussionComponent } from './disscussion/disscussion.component';
import { HomeComponent } from './home/home.component';
import { VotingLocationsComponent } from './voting-locations/voting-locations.component';
import { SearchLocationPipe } from './domain/search-location.pipe';
import { LocationListComponent } from './voting-locations/location-list/location-list.component';
import { LocationDetailsComponent } from './voting-locations/location-details/location-details.component';
import { AuthGuard } from './domain/guards/auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './domain/helpers/jwt.interceptor';



const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard],
      children: [
      { path: '', redirectTo: 'chat', pathMatch: 'full' },
      { path: 'update', component: UpdateprofileComponent },
      { path: 'search', component: SearchComponent },
      { path: 'profile', component: ProfilepageComponent },
      { path: 'chat', component: DisscussionComponent },
      { path: 'locations', component: VotingLocationsComponent },
    ]
  },
  { path: '**', redirectTo: '' }
  ];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    UpdateprofileComponent,
    PasswordChangeComponent,
    ProfilepageComponent,
    SearchComponent,
    UpdateIssuesComponent,
    NavbarComponent,
    DisscussionComponent,
    HomeComponent,
    VotingLocationsComponent,
    SearchLocationPipe,
    LocationListComponent,
    //AlertComponent,
    LocationDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    HttpClientModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ServerService, 
    PostService, 
    VotingLocationRepostitory,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ], // AuthService passed as an array
  bootstrap: [AppComponent]
})
export class AppModule { }
