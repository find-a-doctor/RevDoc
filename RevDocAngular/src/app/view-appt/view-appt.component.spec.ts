import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewApptComponent } from './view-appt.component';

describe('ViewApptComponent', () => {
  let component: ViewApptComponent;
  let fixture: ComponentFixture<ViewApptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewApptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewApptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
