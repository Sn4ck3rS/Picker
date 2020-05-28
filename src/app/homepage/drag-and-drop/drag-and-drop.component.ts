import { Component, OnInit, ViewChild } from '@angular/core';
import { Student } from '../../../assets/Classes/student';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent implements OnInit {

  constructor() { }

  
  ngOnInit(): void {
    
  }

  public students: any[] = [];  
  @ViewChild('csvReader') csvReader: any;  
  
  uploadListener($event: any): void {  
  
    let files = $event.srcElement.files;  
  
    if (this.isValidCSVFile(files[0])) {  
  
      let input = $event.target;  
      let reader = new FileReader();  
      reader.readAsText(input.files[0]);  
  
      reader.onload = () => {  
        let csvData = reader.result;  
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);  
  
        let headersRow = this.getHeaderArray(csvRecordsArray);  
  
        this.students = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);  
      };  
  
      reader.onerror = function () {  
        console.log('Beim Lesen der Datei ist ein Fehler aufgetreten');  
      };  
  
    } else {  
      alert("Bitte wählen sie eine gültige .csv-Datei .");  
      this.fileReset();  
    }  
  }  
  
  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {  
    let csvArr = [];  
  
    for (let i = 0; i < csvRecordsArray.length; i++) { 
      console.log(csvRecordsArray[i]);
      
      let currentRecord = (csvRecordsArray[i]).split(';');  
      console.log(currentRecord);
      if (currentRecord.length == headerLength) {  
        let csvRecord: Student = new Student();  
        csvRecord.class = currentRecord[0];  
        csvRecord.firstName = currentRecord[1];  
        csvRecord.lastName = currentRecord[2];  
        csvArr.push(csvRecord);  
      }  
    }  
    return csvArr;  
  }  
  
  isValidCSVFile(file: any) {  
    return file.name.endsWith(".csv");  
  }  
  
  getHeaderArray(csvRecordsArr: any) {  
    let headers = (<string>csvRecordsArr[0]).split(';');  
    let headerArray = [];  
    for (let j = 0; j < headers.length; j++) {  
      headerArray.push(headers[j]);  
    }  
    return headerArray;  
  }  
  
  fileReset() {  
    this.csvReader.nativeElement.value = "";  
    this.students = [];  
  }  

}
