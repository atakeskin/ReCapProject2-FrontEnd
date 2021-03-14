/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CarDetailService } from './carDetail.service';

describe('Service: CarDetail', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarDetailService]
    });
  });

  it('should ...', inject([CarDetailService], (service: CarDetailService) => {
    expect(service).toBeTruthy();
  }));
});
