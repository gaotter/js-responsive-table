import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegTdComponent } from './seg-td.component';

describe('SemTdComponent', () => {
  let component: SegTdComponent;
  let fixture: ComponentFixture<SegTdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SegTdComponent]
    });
    fixture = TestBed.createComponent(SegTdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
