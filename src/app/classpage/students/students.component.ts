import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Student } from 'src/assets/Classes/student';
import { SendClassNameService } from 'src/app/send-class-name.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  studentArray: Student[] = new Array<Student>();
  studentNames: String[];
  className: string;

  constructor(private http: HttpClient, private getClass: SendClassNameService) { }

  ngOnInit(): void {
    this.studentNames = new Array<String>();
    // this.onSiteLoad();
    // console.log("classname")
    // console.log(this.className)
    this.onClassChosen(this.getClass.selectedClass);
  }

  grpGroesseAuswahl() {

  }
  onSiteLoad(){
    
    this.http.get('/api/getChosenClass').subscribe(data => {
      console.log("IM ACTUALLY DOIN SOMETHING");
      console.log(data)
      this.className = data.toString();
    })
    
  }

  onClassChosen(chosenClass: string) {
    let temp;
    this.http.post('/api/classInfo', { cl: chosenClass }).subscribe(data => {
      // console.log("data")
      // console.log(data)
      temp = data;
      for (let i = 0; i < temp.length; i++) {
        let student = new Student();
        student.setStudentData(temp[i].class, temp[i].lastName, temp[i].firstName);


        this.studentArray.push(student)

      }
      this.studentArray.forEach(element => {
        this.studentNames.push(element.firstName + " " + element.lastName);
      })
      // console.log("temp")
      // console.log(temp)
      // console.log(temp.length)
      // console.log(temp[0])
    })
  }

}
