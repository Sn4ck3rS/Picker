import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendStudentsService {

  constructor() { }

  students = [];
  result: string;
  einzelauswahl:boolean;
  anzahl: number;
  isSize: boolean;
}
