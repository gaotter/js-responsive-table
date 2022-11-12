import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResponsiveTableGridComponent } from './responsive-table-grid.component';

describe('ResponsiveTableGridComponent', () => {
  let component: ResponsiveTableGridComponent;
  let fixture: ComponentFixture<ResponsiveTableGridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiveTableGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveTableGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
