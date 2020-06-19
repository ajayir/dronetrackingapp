import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninscreenComponent } from './signinscreen/signinscreen.component';
import { HomeComponent } from './home/home.component';
import { RegisterdronesComponent } from './registerdrones/registerdrones.component';
import { LearningcenterComponent } from './learningcenter/learningcenter.component';
import { HelpComponent } from './help/help.component';
import { SignupscreenComponent } from './signupscreen/signupscreen.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ApiserviceService } from './apiservice.service';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { ViewdronesComponent } from './viewdrones/viewdrones.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninscreenComponent,
    HomeComponent,
    RegisterdronesComponent,
    LearningcenterComponent,
    HelpComponent,
    SignupscreenComponent,
    ViewdronesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiserviceService, AuthGuard, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
