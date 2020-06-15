import { Component, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SendStudentsService } from 'src/app/send-students.service';
import {MatDialog} from '@angular/material/dialog';
import { ShowResultComponent } from '../show-result/show-result.component';

@Component({
  selector: 'app-selection-buttons',
  templateUrl: './selection-buttons.component.html',
  styleUrls: ['./selection-buttons.component.scss']
})
export class SelectionButtonsComponent implements OnInit {

  @Output('grpGroesse') grpGroesse = 1;
  @Output('grpAnzahl') grpAnzahl = 1;


  constructor(private getStudents: SendStudentsService, public dialog: MatDialog) { }

  result: string;
  einzelauswahl = false

  ngOnInit(): void {
  }

  grpGroesseAuswahl(): void {
    // create helper array (making sure that every student is assigned only once)
    let students_help = [];
    this.result = "";
    this.einzelauswahl = false;
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

    for (let i = 1; i < numOfRuns+1; i++) {
      let temp = window['grp' + (i-1)].slice();
      temp.forEach(e=>{
        if(e!==undefined){
          this.result += "Gruppe " + i + ";" + 
          e + "\n";
        }
      })
      
      // console.log(window['grp' + i].slice());
    }
    console.log(this.result)
    this.getStudents.result = this.result;
    this.getStudents.einzelauswahl = this.einzelauswahl;
    console.log("grpGr: " + this.grpGroesse)
    this.getStudents.anzahl = this.grpGroesse;
    this.getStudents.isSize=true;
    this.openDialog();
  }

  grpAnzahlAuswahl(): void {
    // create helper array (making sure that every student is assigned only once)
    let students_help = [];
    this.result = "";
    this.einzelauswahl = false;
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

    for (let i = 1; i < this.grpAnzahl+1; i++) {
      let temp = window['grp' + (i-1)].slice();
      temp.forEach(e=>{
        if(e!==undefined){
          this.result += "Gruppe " + i + ";" + 
          e + "\n";
        }
      })
    }
    console.log(this.result)
    this.getStudents.result = this.result;
    this.getStudents.einzelauswahl = this.einzelauswahl;
    console.log("grpAnz: " + this.grpAnzahl)
    this.getStudents.anzahl = this.grpAnzahl;
    this.getStudents.isSize=false;
    this.openDialog();
  }

  einzelAuswahl(): void {
    this.result = "";
    this.einzelauswahl = true
    let rnd = Math.floor((Math.random() * this.getStudents.students.length));
    let chosenStudent = this.getStudents.students[rnd];
    console.log(chosenStudent);
    this.getStudents.result = chosenStudent;
    this.getStudents.einzelauswahl = this.einzelauswahl;
    this.openDialog();
  }

  openDialog() {
    const dialogRef = this.dialog.open(ShowResultComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
