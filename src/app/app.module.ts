import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ClassesComponent } from './homepage/classes/classes.component';
import { DragAndDropComponent } from './homepage/drag-and-drop/drag-and-drop.component';
import { HeaderComponent } from './header/header.component';
import { DragndropDirective } from './homepage/dragndrop.directive';
import { StudentsComponent } from './classpage/students/students.component';
import { SelectionButtonsComponent } from './classpage/selection-buttons/selection-buttons.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { ClasspageComponent } from './classpage/classpage/classpage.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassesComponent,
    DragAndDropComponent,
    HeaderComponent,
    DragndropDirective,
    StudentsComponent,
    SelectionButtonsComponent,
    HomepageComponent,
    ClasspageComponent
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
