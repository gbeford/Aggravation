import { TestBed } from '@angular/core/testing';

import { SignalGameService } from './signal-game.service';

describe('SignalGameService', () => {
  let service: SignalGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
