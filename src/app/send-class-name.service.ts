import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendClassNameService {

  constructor() { }
  selectedClass: string;
}
