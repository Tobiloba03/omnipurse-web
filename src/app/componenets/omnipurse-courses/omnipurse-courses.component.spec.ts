import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmnipurseCoursesComponent } from './omnipurse-courses.component';

describe('OmnipurseCoursesComponent', () => {
  let component: OmnipurseCoursesComponent;
  let fixture: ComponentFixture<OmnipurseCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmnipurseCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmnipurseCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
