import { TestBed } from '@angular/core/testing';

import { SendStudentsService } from './send-students.service';

describe('SendStudentsService', () => {
  let service: SendStudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendStudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
