import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmApptComponent } from './confirm-appt.component';

describe('ConfirmApptComponent', () => {
  let component: ConfirmApptComponent;
  let fixture: ComponentFixture<ConfirmApptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmApptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmApptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
