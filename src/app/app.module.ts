import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DataUploadComponent } from './data-upload/data-upload.component';
import { ClassesComponent } from './homepage/classes/classes.component';
import { DragAndDropComponent } from './homepage/drag-and-drop/drag-and-drop.component';
import { HeaderComponent } from './homepage/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    DataUploadComponent,
    ClassesComponent,
    DragAndDropComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
