import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionButtonsComponent } from './selection-buttons.component';

describe('SelectionButtonsComponent', () => {
  let component: SelectionButtonsComponent;
  let fixture: ComponentFixture<SelectionButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
