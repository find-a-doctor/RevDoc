import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAvailabilityComponent } from './edit-availability.component';

describe('EditAvailabilityComponent', () => {
  let component: EditAvailabilityComponent;
  let fixture: ComponentFixture<EditAvailabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAvailabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
