import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './core/loading-spinner/loading-spinner.component';
import { AuthInterceptor } from './services/authInterceptor.service';
import { AuthService } from './services/auth.service';
import { SessionRpeComponent } from './user/session-rpe/session-rpe.component';
import { SidebarComponent } from './user/sidebar/sidebar.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { POMSComponent } from './user/poms/poms.component';
import { BodyMeasurementsComponent } from './user/body-measurements/body-measurements.component';
import { AthleteProfileComponent } from './user/athlete-profile/athlete-profile.component';
import { BodyweightComponent } from './user/bodyweight/bodyweight.component';
import { IonicModule } from '@ionic/angular';
import { SessionRpeItemComponent } from './user/session-rpe/session-rpe-item/session-rpe-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    UserComponent,
    LoginComponent,
    SignupComponent,
    LoadingSpinnerComponent,
    SessionRpeComponent,
    SidebarComponent,
    UserHomeComponent,
    POMSComponent,
    BodyMeasurementsComponent,
    AthleteProfileComponent,
    BodyweightComponent,
    SessionRpeItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    IonicModule.forRoot()
  ],
  providers: [AuthService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
