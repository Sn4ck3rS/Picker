import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students_dummy = [
    "Raul Petzmer_1",
    "Just In Sequence_1",
    "Nristan Tolde_1",
    "Go Hannes Jaida_1"
  ];
  students = [
    {
      name: 'Raul Petzmer',
      class: 'FS172',
    },
    {
      name: 'Just In Sequence',
      class: 'FS172',
    },
    {
      name: 'Nristan Tolde',
      class: 'FS172',
    },
    {
      name: 'Go Hannes Jaida',
      class: 'FS173',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  grpGroesseAuswahl() {
    
  }

}
