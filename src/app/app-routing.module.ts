import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninscreenComponent } from './signinscreen/signinscreen.component';
import { HomeComponent } from './home/home.component';
import { LearningcenterComponent } from './learningcenter/learningcenter.component';
import { RegisterdronesComponent } from './registerdrones/registerdrones.component';
import { HelpComponent } from './help/help.component';
import { SignupscreenComponent } from './signupscreen/signupscreen.component';
import { ViewdronesComponent } from './viewdrones/viewdrones.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/signinscreen', pathMatch:'full' },
  { path: 'signupscreen', component: SignupscreenComponent },
  { path: 'signinscreen', component: SigninscreenComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'learningcenter', component: LearningcenterComponent },
  { path: 'registerdrones', component: RegisterdronesComponent, canActivate: [AuthGuard] },
  { path: 'viewdrones', component: ViewdronesComponent, canActivate: [AuthGuard] },
  { path: 'help', component: HelpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
