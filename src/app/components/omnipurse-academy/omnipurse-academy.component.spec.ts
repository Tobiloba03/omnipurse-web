import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmnipurseAcademyComponent } from './omnipurse-academy.component';

describe('OmnipurseAcademyComponent', () => {
  let component: OmnipurseAcademyComponent;
  let fixture: ComponentFixture<OmnipurseAcademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmnipurseAcademyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmnipurseAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
