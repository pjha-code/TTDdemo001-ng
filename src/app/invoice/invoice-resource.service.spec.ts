import { TestBed } from '@angular/core/testing';

import { InvoiceResourceService } from './invoice-resource.service';

describe('InvoiceResourceService', () => {
  let service: InvoiceResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoiceResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
