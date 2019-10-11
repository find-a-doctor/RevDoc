import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleApptComponent } from './schedule-appt.component';

describe('ScheduleApptComponent', () => {
  let component: ScheduleApptComponent;
  let fixture: ComponentFixture<ScheduleApptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleApptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleApptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
