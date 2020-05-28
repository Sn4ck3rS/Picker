import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ClassesComponent } from './homepage/classes/classes.component';
import { DragAndDropComponent } from './homepage/drag-and-drop/drag-and-drop.component';
import { DragndropDirective } from './homepage/dragndrop.directive';
import {HttpClientModule} from "@angular/common/http"

@NgModule({
  declarations: [
    AppComponent,
    ClassesComponent,
    DragAndDropComponent,
    DragndropDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
