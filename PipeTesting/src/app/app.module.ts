import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DecimalPipe } from '../pipes/decimal.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DecimalPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
