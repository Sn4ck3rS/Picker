import { Component, OnInit } from '@angular/core';
import { SelectionButtonsComponent } from '../selection-buttons/selection-buttons.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  selectionBtnscomp = new SelectionButtonsComponent();
  students = this.selectionBtnscomp.students;

  constructor() { }

  ngOnInit(): void {
  }
}
