import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { SendClassNameService } from 'src/app/send-class-name.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private getClass: SendClassNameService) { }

  classes:string[]=[];

  ngOnInit(): void {
    this.onLoadClasses();
  }
  onLoadClasses() {
    this.http.get('/api/classes').subscribe(data => {
      this.classes = data.toString().split(',');
      
    })
  }
  onChangeSite(cl: string){
    this.getClass.selectedClass=cl;
    this.router.navigate(['/classes']);
  }

}
