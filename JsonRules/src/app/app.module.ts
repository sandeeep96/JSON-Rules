import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';

import { CustomServiceService } from './custom-service.service';
import { JsonRulerService } from './jsonRuler.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule, 
    HttpModule,
    FormsModule
  ],
  providers: [CustomServiceService,JsonRulerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
