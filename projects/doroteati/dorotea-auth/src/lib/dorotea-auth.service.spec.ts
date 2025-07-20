import { TestBed } from '@angular/core/testing';

import { DoroteaAuthService } from './dorotea-auth.service';

describe('DoroteaAuthService', () => {
  let service: DoroteaAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoroteaAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
