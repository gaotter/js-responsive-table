import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegTableComponent } from './seg-table.component';

describe('SemTableComponent', () => {
  let component: SegTableComponent;
  let fixture: ComponentFixture<SegTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SegTableComponent]
    });
    fixture = TestBed.createComponent(SegTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
