import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Student } from 'src/assets/Classes/student';
import { SendClassNameService } from 'src/app/send-class-name.service';
import { SendStudentsService } from 'src/app/send-students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  
})
// width: 25%;
// margin: auto;
// text-align: center;
export class StudentsComponent implements OnInit {

  studentArray: Student[] = new Array<Student>();
  studentNames: String[];
  className: string;
  studentTemp = new Map<string,boolean>();

  constructor(private http: HttpClient, private getClass: SendClassNameService, private getStudents: SendStudentsService) { }

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
        let s = {
          c: student.class,
          f: student.firstName,
          l: student.lastName,
          b: true
        }
        

      }
      this.studentArray.forEach(element => {
        this.studentNames.push(element.firstName + " " + element.lastName);
        this.getStudents.students.push(element.firstName + " " + element.lastName);
      });
    })
  }

  removeStudent(s: string) {
    let temp = new Array<String>();
    let count = 0;
    this.studentNames.forEach(student => {
      if (student == s) {
        this.getStudents.students.splice(count, 1);
      }
      else if (student !== s) {
        temp.push(student);
        count++;
      }
        
    });
    this.studentNames = temp;
  }
  

}
