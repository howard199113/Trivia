import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ApiService } from './api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogregComponent } from './logreg/logreg.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { PlayComponent } from './play/play.component';


@NgModule({
  declarations: [
    AppComponent,
    LogregComponent,
    HomeComponent,
    AddComponent,
    PlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
