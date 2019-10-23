import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorApptsComponent } from './doctor-appts.component';

describe('DoctorApptsComponent', () => {
  let component: DoctorApptsComponent;
  let fixture: ComponentFixture<DoctorApptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorApptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorApptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
