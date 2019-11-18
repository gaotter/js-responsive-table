import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveTableTemplateComponent } from './responsive-table-template.component';

describe('ResponsiveTableTemplateComponent', () => {
  let component: ResponsiveTableTemplateComponent;
  let fixture: ComponentFixture<ResponsiveTableTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiveTableTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveTableTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
