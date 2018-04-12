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
// import { AuthService } from './auth/auth.service';
import { ServerService } from './auth/server.service';
import { HttpModule } from '@angular/http';
// import { HttpClient } from 'selenium-webdriver/http';

import { UpdateIssuesComponent } from './update-issues/update-issues.component';
import { NavbarComponent } from './navbar/navbar.component';


const appRoutes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent }

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
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
  ],
  providers: [ServerService], // AuthService passed as an array
  bootstrap: [AppComponent]
})
export class AppModule { }
