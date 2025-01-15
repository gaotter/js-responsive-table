import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemTableComponent } from './sem-table.component';

describe('SemTableComponent', () => {
  let component: SemTableComponent;
  let fixture: ComponentFixture<SemTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SemTableComponent]
    });
    fixture = TestBed.createComponent(SemTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
