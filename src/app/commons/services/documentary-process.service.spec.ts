import { TestBed } from '@angular/core/testing';

import { DocumentaryProcessService } from './documentary-process.service';

describe('DocumentaryProcessService', () => {
  let service: DocumentaryProcessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentaryProcessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
