import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorViewProfileComponent } from './doctor-view-profile.component';

describe('DoctorViewProfileComponent', () => {
  let component: DoctorViewProfileComponent;
  let fixture: ComponentFixture<DoctorViewProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorViewProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorViewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
