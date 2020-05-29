import { Component, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-selection-buttons',
  templateUrl: './selection-buttons.component.html',
  styleUrls: ['./selection-buttons.component.scss']
})
export class SelectionButtonsComponent implements OnInit {

  grpGroesse: 1;
  grpAnzahl: 1;
  @Output('einzel') einzel = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
