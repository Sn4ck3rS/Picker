import { Component, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-selection-buttons',
  templateUrl: './selection-buttons.component.html',
  styleUrls: ['./selection-buttons.component.scss']
})
export class SelectionButtonsComponent implements OnInit {

  @Output('grpGroesse') grpGroesse = 1;
  @Output('grpAnzahl') grpAnzahl = 1;
  students = [];
  students_whole = [];

  constructor() {  }

  ngOnInit(): void {
    this.dummyload();
  }

  loadClassIntoArray() {
    // hier wird ausgewählte Klasse in das students-Array geladen - könnte auch in anderer Datei stattfinden
  }

  dummyload() {
    this.students = [
      "Raul Petzmer",
      "Just In Sequence",
      "Nristan Tolde",
      "Go Hannes Jaida"
    ];
    this.students_whole = [
      {
        name: 'Peter Hannes',
        class: 'FS172',
      },
      {
        name: 'Friedrich Gerhard',
        class: 'FS173',
      }
    ];
    console.log(this.students);
  }

  grpGroesseAuswahl() {
    console.log("grpGroesseAuswahl: " + this.grpGroesse);
    // hier wird Methode aus students component aufgerufen
  }

  grpAnzahlAuswahl() {
    console.log("grpAnzahlAuswahl: " + this.grpAnzahl);
  }

  einzelAuswahl() {
    console.log("Einzelauswahl");
  }

}
