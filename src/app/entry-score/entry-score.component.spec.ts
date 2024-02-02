import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryScoreComponent } from './entry-score.component';

describe('EntryScoreComponent', () => {
  let component: EntryScoreComponent;
  let fixture: ComponentFixture<EntryScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntryScoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntryScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
