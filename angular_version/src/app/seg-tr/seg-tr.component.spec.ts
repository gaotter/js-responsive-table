import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegTrComponent } from './seg-tr.component';

describe('SemTrComponent', () => {
  let component: SegTrComponent;
  let fixture: ComponentFixture<SegTrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SegTrComponent]
    });
    fixture = TestBed.createComponent(SegTrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
