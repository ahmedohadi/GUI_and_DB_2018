import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { FormsModule } from '@angular/forms';
import { PasswordChangeComponent } from './updateprofile/password-change/password-change.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { SearchComponent } from './search/search.component';
import { UpdateIssuesComponent } from './update-issues/update-issues.component';
import { NavbarComponent } from './navbar/navbar.component';

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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
