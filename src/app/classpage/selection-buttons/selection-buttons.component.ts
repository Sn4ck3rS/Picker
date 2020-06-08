import { Component, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-selection-buttons',
  templateUrl: './selection-buttons.component.html',
  styleUrls: ['./selection-buttons.component.scss']
})
export class SelectionButtonsComponent implements OnInit {

  @Output('grpGroesse') grpGroesse = 1;
  @Output('grpAnzahl') grpAnzahl = 1;
  students = [
    {
      name: 'Vincent Albert',
      class: 'FS172',
    },
    {
      name: 'Justin Axt',
      class: 'FS172',
    },
    {
      name: 'Sebastian Bracht',
      class: 'FS172',
    },
    {
      name: 'Mona Bollhorst',
      class: 'FS172',
    },
    {
      name: 'Leon Bußmann',
      class: 'FS172',
    },
    {
      name: 'Felix Fischer',
      class: 'FS172',
    },
    {
      name: 'Johannes Gaida',
      class: 'FS172',
    },
    {
      name: 'Julius Gockeln',
      class: 'FS172',
    },
    {
      name: 'Lena Müller',
      class: 'FS172',
    },
    {
      name: 'Dominik Neumann',
      class: 'FS172',
    },
    {
      name: 'Tristan Nolde',
      class: 'FS172',
    },
    {
      name: 'Paul Rezmer',
      class: 'FS172',
    },
    {
      name: 'Max Ries',
      class: 'FS172',
    },
    {
      name: 'Vivienne Weik',
      class: 'FS172',
    }
  ];

  constructor() {  }

  ngOnInit(): void {
  }

  grpGroesseAuswahl(): void {
    // create helper array (making sure that every student is assigned only once)
    let students_help = [];
    this.students.forEach(element => {
      students_help.push(element);
    });

    // how many times the algorithm has to run in total to assign every student
    let numOfRuns = Math.floor(this.students.length / this.grpGroesse + 0.99);

    for (let i = 0; i < numOfRuns; i++) {
      // if there are still students not assigned: create new array (group) for them
      if (students_help.length != 0) {
        window['grp' + i] = new Array();
      } else {
        break;
      }

      // assign this.grpGroesse students to an array (a group)
      for (let j = 0; j < this.grpGroesse; j++) {
        let rnd = Math.floor((Math.random() * students_help.length));
        window['grp' + i].push(students_help[rnd]);
        // delete the chosen student from the helper array
        students_help.splice(rnd, 1);
      }

      // showing all the created arrays -debugging-
      console.log(window['grp' + i]);
    }
  }

  grpAnzahlAuswahl(): void {
    // create helper array (making sure that every student is assigned only once)
    let students_help = [];
    this.students.forEach(element => {
      students_help.push(element);
    });

    // calculating the group size
    let grpGroesse_anz = Math.floor(this.students.length / this.grpAnzahl + 0.99);

    for (let i = 0; i < this.grpAnzahl; i++) {
      // if there are still students not assigned: create new array (group) for them
      if (students_help.length != 0) {
        window['grp' + i] = new Array();
      } else {
        break;
      }

      // assign grpGroesse_anz students to an array (a group)
      for (let j = 0; j < grpGroesse_anz; j++) {
        let rnd = Math.floor((Math.random() * students_help.length));
        window['grp' + i].push(students_help[rnd]);
        // delete the choosen student from the helper array
        students_help.splice(rnd, 1);
      }

      // showing all the created arrays -debugging-
      console.log(window['grp' + i]);
    }
  }

  einzelAuswahl(): void {
    let rnd = Math.floor((Math.random() * this.students.length));
    let choosenStudent = this.students[rnd];
    console.log(choosenStudent);
  }

}
