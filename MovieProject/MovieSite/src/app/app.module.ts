import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { FooterComponent } from './components/common/footer/footer.component';
import { NavComponent } from './components/common/nav/nav.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import {RouterLink, RouterOutlet} from "@angular/router";
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import {AppRoutingModule} from "./app-routing.module";
import { LoginComponent } from './components/login/login.component';
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {ReactiveFormsModule} from "@angular/forms";
import { ReleaseRelevantPipe } from './pipes/release-relevant.pipe';
import { IfModDirective } from './directives/if-mod.directive';
import { IfAdminDirective } from './directives/if-admin.directive';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    FooterComponent,
    NavComponent,
    MovieDetailsComponent,
    LoginComponent,
    ReleaseRelevantPipe,
    IfModDirective,
    IfAdminDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    RouterLink,
    RouterOutlet,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
