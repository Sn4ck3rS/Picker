import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Student } from 'src/assets/Classes/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  // students_dummy = [
  //   "Raul Petzmer_1",
  //   "Just In Sequence_1",
  //   "Nristan Tolde_1",
  //   "Go Hannes Jaida_1"
  // ];
  studentArray: Student[] = new Array<Student>();
  studentNames: String[];
  // students = [
  //   {
  //     name: 'Raul Petzmer',
  //     class: 'FS172',
  //   },
  //   {
  //     name: 'Just In Sequence',
  //     class: 'FS172',
  //   },
  //   {
  //     name: 'Nristan Tolde',
  //     class: 'FS172',
  //   },
  //   {
  //     name: 'Go Hannes Jaida',
  //     class: 'FS173',
  //   }
  // ];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.studentNames = new Array<String>();
    this.onClassChosen("FS172");
  }

  grpGroesseAuswahl() {
    
  }

  onClassChosen(chosenClass: string){
    let temp;
    this.http.post('/api/classInfo', {cl: chosenClass} ).subscribe(data =>{
      // console.log("data")
      // console.log(data)
      temp = data;
      for (let i = 0; i < temp.length; i++) {
        let student = new Student();
        student.setStudentData(temp[i].class,temp[i].lastName,temp[i].firstName);
          
        
        this.studentArray.push(student)
        
      }
      this.studentArray.forEach(element =>{
        this.studentNames.push(element.firstName + " " + element.lastName);
      })
      // console.log("temp")
      // console.log(temp)
      // console.log(temp.length)
      // console.log(temp[0])
    } )
  }

}
