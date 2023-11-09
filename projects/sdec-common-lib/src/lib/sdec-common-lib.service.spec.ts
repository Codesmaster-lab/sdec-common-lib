import { TestBed } from '@angular/core/testing';

import { SdecCommonLibService } from './sdec-common-lib.service';

describe('SdecCommonLibService', () => {
  let service: SdecCommonLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SdecCommonLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
