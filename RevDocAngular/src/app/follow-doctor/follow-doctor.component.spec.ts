import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowDoctorComponent } from './follow-doctor.component';

describe('FollowDoctorComponent', () => {
  let component: FollowDoctorComponent;
  let fixture: ComponentFixture<FollowDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
