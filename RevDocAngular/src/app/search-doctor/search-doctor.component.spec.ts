import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDoctorComponent } from './search-doctor.component';
import { FormsModule } from '@angular/forms';


describe('SearchDoctorComponent', () => {
  let component: SearchDoctorComponent;
  let fixture: ComponentFixture<SearchDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDoctorComponent ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should have add function')
});
