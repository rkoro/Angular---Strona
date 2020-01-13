import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { KomponentComponent } from './komponent/komponent.component';
import { KolkoIKrzyzykComponent } from './kolko-i-krzyzyk/kolko-i-krzyzyk.component';
import { BazaAPIComponent } from './baza-api/baza-api.component';

@NgModule({
  declarations: [
    AppComponent,
    KomponentComponent,
    KolkoIKrzyzykComponent,
    BazaAPIComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
