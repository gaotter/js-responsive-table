import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemTrComponent } from './sem-tr.component';

describe('SemTrComponent', () => {
  let component: SemTrComponent;
  let fixture: ComponentFixture<SemTrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SemTrComponent]
    });
    fixture = TestBed.createComponent(SemTrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
