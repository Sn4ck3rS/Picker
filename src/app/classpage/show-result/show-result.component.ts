import { Component, OnInit } from '@angular/core';
import { SendStudentsService } from 'src/app/send-students.service';
import { group } from '@angular/animations';

@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.scss']
})
export class ShowResultComponent implements OnInit {

  constructor(private getStudents: SendStudentsService) { }

  einzel: boolean;
  result: string;
  anzahl: number;
  isSize: boolean;
  groups: string[][];
  groupNames: string[] = []
  grpMemb: string[]=[];

  ngOnInit(): void {
    this.einzel = this.getStudents.einzelauswahl;
    this.result = this.getStudents.result;
    this.anzahl = this.getStudents.anzahl;
    this.isSize = this.getStudents.isSize;
    if (!this.einzel) {
      this.splitToGroups(this.result);
    }
  }

  splitToGroups(s: string) {
    let temp = s.split("\n");
    let tempGrp: string[] = [];
    let tempName: string[] = [];
    console.log(temp)
    temp.forEach(element => {
      let t = element.split(";");
      tempGrp.push(t[0]);
      tempName.push(t[1]);
    })
    let c: number;
    console.log(tempGrp.length)
    if (this.isSize) {
      c = tempGrp.length / this.anzahl
      for(let i = 0;i<this.anzahl;i++){
        this.grpMemb.push("")
      }
    }
    else {
      c = this.anzahl
      for(let i = 0; i<tempGrp.length/this.anzahl;i++){
        this.grpMemb.push("");
      }
    }
    for(let i = 1; i<=c;i++){
      this.groupNames.push("Gruppe " + i)
    }
    this.groups = []
    for (let i = 0; i < c; i++) {
      this.groups[i] = [];
      for (let j = 0; j < tempGrp.length; j++) {
        if (tempGrp[j] === "Gruppe " + (i + 1)) {
          this.groups[i][j] = tempName[j];
        }
      }
    }
  }





}
