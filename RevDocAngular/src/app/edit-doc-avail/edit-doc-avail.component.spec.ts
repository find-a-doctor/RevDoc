import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDocAvailComponent } from './edit-doc-avail.component';

describe('EditDocAvailComponent', () => {
  let component: EditDocAvailComponent;
  let fixture: ComponentFixture<EditDocAvailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDocAvailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDocAvailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
