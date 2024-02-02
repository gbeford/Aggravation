import { TestBed } from '@angular/core/testing';

import { EntryScoreService } from './entry-score.service';

describe('EntryScoreService', () => {
  let service: EntryScoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntryScoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
