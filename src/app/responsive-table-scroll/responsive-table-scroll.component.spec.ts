import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveTableScrollComponent } from './responsive-table-scroll.component';

describe('ResponsiveTableScrollComponent', () => {
  let component: ResponsiveTableScrollComponent;
  let fixture: ComponentFixture<ResponsiveTableScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiveTableScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveTableScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
