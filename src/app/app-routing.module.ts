import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { AthleteProfileComponent } from './user/athlete-profile/athlete-profile.component';
import { BodyMeasurementsComponent } from './user/body-measurements/body-measurements.component';
import { BodyweightComponent } from './user/bodyweight/bodyweight.component';
import { LoginComponent } from './user/login/login.component';
import { POMSComponent } from './user/poms/poms.component';
import { SessionRpeComponent } from './user/session-rpe/session-rpe.component';
import { SignupComponent } from './user/signup/signup.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'user', component: UserComponent, children: [
        { path: '', component: UserHomeComponent },
        { path: 'sRPE', component: SessionRpeComponent },
        { path: 'sRPE/edited', component: SessionRpeComponent},
        { path: 'POMS', component: POMSComponent },
        { path: 'POMS/submited', component: POMSComponent },
        { path: 'bodyMeasurements', component: BodyMeasurementsComponent },
        { path: 'bodyMeasurements/submited', component: BodyMeasurementsComponent},
        { path: 'bodyweight', component: BodyweightComponent },
        { path: 'bodyweight/:id', component: BodyweightComponent },
        { path: 'profile', component: AthleteProfileComponent }
    ]},
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
