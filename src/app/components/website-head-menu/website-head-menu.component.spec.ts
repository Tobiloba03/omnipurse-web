import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteHeadMenuComponent } from './website-head-menu.component';

describe('WebsiteHeadMenuComponent', () => {
  let component: WebsiteHeadMenuComponent;
  let fixture: ComponentFixture<WebsiteHeadMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteHeadMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteHeadMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
