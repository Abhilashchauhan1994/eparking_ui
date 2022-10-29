import { TestBed } from '@angular/core/testing';

import { StaticsDataService } from './statics-data.service';

describe('StaticsDataService', () => {
  let service: StaticsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
