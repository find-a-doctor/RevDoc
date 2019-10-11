import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocorApptsComponent } from './docor-appts.component';

describe('DocorApptsComponent', () => {
  let component: DocorApptsComponent;
  let fixture: ComponentFixture<DocorApptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocorApptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocorApptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
