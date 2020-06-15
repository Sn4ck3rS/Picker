import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ClassesComponent } from './homepage/classes/classes.component';
import { DragAndDropComponent } from './homepage/drag-and-drop/drag-and-drop.component';
import { HeaderComponent } from './header/header.component';
import { DragndropDirective } from './homepage/dragndrop.directive';
import { HttpClientModule } from "@angular/common/http"
import { StudentsComponent } from './classpage/students/students.component';
import { SelectionButtonsComponent } from './classpage/selection-buttons/selection-buttons.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { ClasspageComponent } from './classpage/classpage/classpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { ShowResultComponent } from './classpage/show-result/show-result.component';
import {MatDialogModule} from '@angular/material/dialog';


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
    ClasspageComponent,
    ShowResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTabsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSnackBarModule,
    ClipboardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
