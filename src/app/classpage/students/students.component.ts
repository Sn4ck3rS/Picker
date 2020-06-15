import { Component, OnInit } from '@angular/core';
import { SelectionButtonsComponent } from '../selection-buttons/selection-buttons.component';
import { HttpClient } from "@angular/common/http";
import { Student } from 'src/assets/Classes/student';
import { SendClassNameService } from 'src/app/send-class-name.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  animations: [
    trigger('studentFadeOut', [
      state('fade', style({
        
        // height: '0px',
        // width: '0px',
        // opacity: 1,
        backgroundColor: 'yellow'
        })),
      state('default', style({
        // width: '25%',
        // margin: 'auto',
        backgroundColor: 'green'
        
      })),
      transition('default => fade', [
        animate('1s')
      ])
      ]
    )
  ]
})
// width: 25%;
// margin: auto;
// text-align: center;
export class StudentsComponent implements OnInit {

  selectionBtnscomp = new SelectionButtonsComponent();
  students = this.selectionBtnscomp.students;

  studentArray: Student[] = new Array<Student>();
  studentNames: String[];
  className: string;
  studentTemp = new Map<string,boolean>();

  constructor(private http: HttpClient, private getClass: SendClassNameService) { }

  ngOnInit(): void {
    this.studentNames = new Array<String>();
    this.onClassChosen(this.getClass.selectedClass);
    
  }
  setMap(list: String[]){
    list.forEach(l=>{
      this.studentTemp.set(l.toString(),true)
    })
  }

  onClassChosen(chosenClass: string) {
    let temp;
    this.http.post('/api/classInfo', { cl: chosenClass }).subscribe(data => {

      temp = data;
      for (let i = 0; i < temp.length; i++) {
        let student = new Student();
        student.setStudentData(temp[i].class, temp[i].lastName, temp[i].firstName);


        this.studentArray.push(student)
        let s = {
          c: student.class,
          f: student.firstName,
          l: student.lastName,
          b: true
        }
        

      }
      this.studentArray.forEach(element => {
        this.studentNames.push(element.firstName + " " + element.lastName);
      })
    })
  }

  removeStudent(s: string) {
    let temp = new Array<String>();
    this.studentNames.forEach(student => {
      if (student !== s)
        temp.push(student)
        else{
          // temp.push(student);
          this.animationStudentFadeOut(s)
        }
        

    })
    this.studentNames = temp;
  }
  animationStudentFadeOut(s: string){
    this.studentTemp.set(s,false);
  }

}
