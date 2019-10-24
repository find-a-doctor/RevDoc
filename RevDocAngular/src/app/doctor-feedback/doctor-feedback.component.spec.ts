import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorFeedbackComponent } from './doctor-feedback.component';

describe('DoctorFeedbackComponent', () => {
  let component: DoctorFeedbackComponent;
  let fixture: ComponentFixture<DoctorFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
