import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeadcomponentComponent } from './components/headcomponent/headcomponent.component';
import { FooterComponent } from './components/footer/footer.component';
import { Modulo1Component } from './components/modulo1/modulo1.component';
import { Modulo2Component } from './components/modulo2/modulo2.component';
import { Modulo3Component } from './components/modulo3/modulo3.component';
import { Modulo4Component } from './components/modulo4/modulo4.component';
import { Modulo5Component } from './components/modulo5/modulo5.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeadcomponentComponent,
    FooterComponent,
    Modulo1Component,
    Modulo2Component,
    Modulo3Component,
    Modulo4Component,
    Modulo5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
