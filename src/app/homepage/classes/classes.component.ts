import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  constructor(private http: HttpClient) { }

  classes:string[]=[];

  ngOnInit(): void {
    this.onLoadClasses();
  }
  onLoadClasses() {
    this.http.get('/api/classes').subscribe(data => {
      console.log("dis is ma data" + data);
      this.classes = data.toString().split(',');
    })
  }

}
