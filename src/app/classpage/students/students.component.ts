import { Component, OnInit } from '@angular/core';
import { SelectionButtonsComponent } from '../selection-buttons/selection-buttons.component';
import { HttpClient } from "@angular/common/http";
import { Student } from 'src/assets/Classes/student';
import { SendClassNameService } from 'src/app/send-class-name.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  selectionBtnscomp = new SelectionButtonsComponent();
  students = this.selectionBtnscomp.students;

  studentArray: Student[] = new Array<Student>();
  studentNames: String[];
  className: string;

  constructor(private http: HttpClient, private getClass: SendClassNameService) { }

  ngOnInit(): void {
    this.studentNames = new Array<String>();
    this.onClassChosen(this.getClass.selectedClass);
  }

  onClassChosen(chosenClass: string) {
    let temp;
    this.http.post('/api/classInfo', { cl: chosenClass }).subscribe(data => {

      temp = data;
      for (let i = 0; i < temp.length; i++) {
        let student = new Student();
        student.setStudentData(temp[i].class, temp[i].lastName, temp[i].firstName);


        this.studentArray.push(student)

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

    })
    this.studentNames = temp;
  }

}
