import { TestBed } from '@angular/core/testing';

import { TeamMemebersService } from './team-memebers.service';

describe('TeamMemebersService', () => {
  let service: TeamMemebersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamMemebersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
