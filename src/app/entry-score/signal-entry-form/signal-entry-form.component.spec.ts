import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalEntryFormComponent } from './signal-entry-form.component';

describe('SignalEntryFormComponent', () => {
  let component: SignalEntryFormComponent;
  let fixture: ComponentFixture<SignalEntryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalEntryFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
