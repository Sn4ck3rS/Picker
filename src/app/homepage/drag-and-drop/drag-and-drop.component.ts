import { Component, OnInit, ViewChild } from '@angular/core';
import { Student } from '../../../assets/Classes/student';
import { HttpClient} from "@angular/common/http"

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent implements OnInit {

  constructor(private http: HttpClient) { }

  
  ngOnInit(): void {
    
  }

  public students: any[] = []; 
  fileToUpload: File = null; 
  fd: FormData;

  
  @ViewChild('csvReader') csvReader: any;  
  
  uploadListener($event: any): void {  
  
    let files = $event.srcElement.files; 
    this.fileToUpload = $event.target.files[0];

  
    if (this.isValidCSVFile(files[0])) {  
  
      let input = $event.target;  
      let reader = new FileReader();  
      reader.readAsText(input.files[0]);  

      console.log(this.fileToUpload)
  
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
      
      
      let currentRecord = (csvRecordsArray[i]).split(';');  
      
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

  onUpload(){
    this.fd = new FormData();
    this.fd.append(this.students[0], this.fileToUpload);
    this.http.post('../../../assets/CSV', this.fd).subscribe(
      res =>{
        console.log("Working")
      }
    );
  }

}
