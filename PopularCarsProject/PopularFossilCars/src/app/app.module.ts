import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { CarShowcaseComponent } from './components/car-showcase/car-showcase.component';

@NgModule({
  declarations: [
    AppComponent,
    CarFormComponent,
    CarShowcaseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
