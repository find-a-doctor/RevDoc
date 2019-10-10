import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserApptsComponent } from './user-appts.component';

describe('UserApptsComponent', () => {
  let component: UserApptsComponent;
  let fixture: ComponentFixture<UserApptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserApptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserApptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
