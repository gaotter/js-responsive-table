import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveTableJsComponent } from './responsive-table-js.component';

describe('ResponsiveTableJsComponent', () => {
  let component: ResponsiveTableJsComponent;
  let fixture: ComponentFixture<ResponsiveTableJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiveTableJsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsiveTableJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
