import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG ,HammerModule } from '@angular/platform-browser';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ToastrModule } from 'ngx-toastr';
import { ErrorInterceptorService } from './shared/interceptor/global-error-handler/error-handler';
// import * as Hammer from 'hammerjs/hammer';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    IonicModule.forRoot(),
    HammerModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 3000,
      progressBar: true,
      positionClass: 'toast-top-center'
    }),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerGestureConfig
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
