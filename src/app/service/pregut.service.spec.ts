import { TestBed } from '@angular/core/testing';

import { PregutService } from './pregut.service';

describe('PregutService', () => {
  let service: PregutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PregutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
