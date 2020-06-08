import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninscreenComponent } from './signinscreen/signinscreen.component';
import { HomeComponent } from './home/home.component';
import { LearningcenterComponent } from './learningcenter/learningcenter.component';
import { RegisterdronesComponent } from './registerdrones/registerdrones.component';
import { HelpComponent } from './help/help.component';
import { SignupscreenComponent } from './signupscreen/signupscreen.component';

const routes: Routes = [
  { path: '', redirectTo: '/signinscreen', pathMatch:'full' },
  { path: 'signupscreen', component: SignupscreenComponent },
  { path: 'signinscreen', component: SigninscreenComponent },
  { path: 'home', component: HomeComponent },
  { path: 'learningcenter', component: LearningcenterComponent },
  { path: 'registerdrones', component: RegisterdronesComponent },
  { path: 'help', component: HelpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
