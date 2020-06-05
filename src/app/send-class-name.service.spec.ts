import { TestBed } from '@angular/core/testing';

import { SendClassNameService } from './send-class-name.service';

describe('SendClassNameService', () => {
  let service: SendClassNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendClassNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
