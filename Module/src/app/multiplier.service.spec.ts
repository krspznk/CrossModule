import { TestBed } from '@angular/core/testing';

import { MultiplierService } from './multiplier.service';

describe('MultiplierService', () => {
  let service: MultiplierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultiplierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should round area to 2 decimal places', () => {
    const num = 1.234567;
    const result = service.roundArea(num);
    expect(result).toEqual(1.23);
  });

  it('should round area to 2 decimal places with negative input', () => {
    const inputArea = -10.123456;
    const roundedArea = service.roundArea(inputArea);
    expect(roundedArea).toEqual(-10.12);
  });

  it('should round area to 2 decimal places with zero input', () => {
    const inputArea = 0;
    const roundedArea = service.roundArea(inputArea);
    expect(roundedArea).toEqual(0);
  });
});
