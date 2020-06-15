import { Component, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SendStudentsService } from 'src/app/send-students.service';

@Component({
  selector: 'app-selection-buttons',
  templateUrl: './selection-buttons.component.html',
  styleUrls: ['./selection-buttons.component.scss']
})
export class SelectionButtonsComponent implements OnInit {

  @Output('grpGroesse') grpGroesse = 1;
  @Output('grpAnzahl') grpAnzahl = 1;
  // students = [
  //   {
  //     name: 'Vincent Albert',
  //     class: 'FS172',
  //   },
  //   {
  //     name: 'Justin Axt',
  //     class: 'FS172',
  //   },
  //   {
  //     name: 'Sebastian Bracht',
  //     class: 'FS172',
  //   },
  //   {
  //     name: 'Mona Bollhorst',
  //     class: 'FS172',
  //   },
  //   {
  //     name: 'Leon Bußmann',
  //     class: 'FS172',
  //   },
  //   {
  //     name: 'Felix Fischer',
  //     class: 'FS172',
  //   },
  //   {
  //     name: 'Johannes Gaida',
  //     class: 'FS172',
  //   },
  //   {
  //     name: 'Julius Gockeln',
  //     class: 'FS172',
  //   },
  //   {
  //     name: 'Lena Müller',
  //     class: 'FS172',
  //   },
  //   {
  //     name: 'Dominik Neumann',
  //     class: 'FS172',
  //   },
  //   {
  //     name: 'Tristan Nolde',
  //     class: 'FS172',
  //   },
  //   {
  //     name: 'Paul Rezmer',
  //     class: 'FS172',
  //   },
  //   {
  //     name: 'Max Ries',
  //     class: 'FS172',
  //   },
  //   {
  //     name: 'Vivienne Weik',
  //     class: 'FS172',
  //   }
  // ];

  constructor(private getStudents: SendStudentsService) { }

  ngOnInit(): void {
  }

  grpGroesseAuswahl(): void {
    // create helper array (making sure that every student is assigned only once)
    let students_help = [];
    this.getStudents.students.forEach(element => {
      students_help.push(element);
    });
    let undefinedVariables = 0;
    let indexOfUndefined = 0;

    // how many times the algorithm has to run in total to assign every student
    let numOfRuns = Math.floor(this.getStudents.students.length / this.grpGroesse + 0.99);

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

      // go through the created arrays and look for undefined values
      for (let k = 0; k < window['grp' + i].length; k++) {
        if (window['grp' + i][k] == undefined) {
          indexOfUndefined = k;
          undefinedVariables++;
        }
      }

      if (undefinedVariables / numOfRuns >= 0.4) {
        let lastArr = window['grp' + (i - 1)];
        window['grp' + i].splice(indexOfUndefined - 1, undefinedVariables);
        window['grp' + i].push(lastArr[lastArr.length - 1]);
        lastArr.splice(lastArr.length - 1, 1);
      }

    }

    for (let i = 0; i < numOfRuns; i++) {
      // showing all the created arrays -debugging-
      console.log(window['grp' + i].slice());
    }
  }

  grpAnzahlAuswahl(): void {
    // create helper array (making sure that every student is assigned only once)
    let students_help = [];
    this.getStudents.students.forEach(element => {
      students_help.push(element);
    });
    let undefinedVariables = 0;
    let indexOfUndefined = 0;

    // calculating the group size
    let grpGroesse_anz = Math.floor(this.getStudents.students.length / this.grpAnzahl + 0.99);

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

      // go through the created arrays and look for undefined values
      for (let k = 0; k < window['grp' + i].length; k++) {
        if (window['grp' + i][k] == undefined) {
          indexOfUndefined = k;
          undefinedVariables++;
        }
      }

      if (undefinedVariables / grpGroesse_anz >= 0.4) {
        let lastArr = window['grp' + (i - 1)];
        window['grp' + i].splice(indexOfUndefined - 1, undefinedVariables);
        window['grp' + i].push(lastArr[lastArr.length - 1]);
        lastArr.splice(lastArr.length - 1, 1);
      }
      
    }

    for (let i = 0; i < this.grpAnzahl; i++) {
      // showing all the created arrays -debugging-
      console.log(window['grp' + i].slice());
    }
  }

  einzelAuswahl(): void {
    let rnd = Math.floor((Math.random() * this.getStudents.students.length));
    let choosenStudent = this.getStudents.students[rnd];
    console.log(choosenStudent);
  }

}
