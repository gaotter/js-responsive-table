import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemTdComponent } from './sem-td.component';

describe('SemTdComponent', () => {
  let component: SemTdComponent;
  let fixture: ComponentFixture<SemTdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SemTdComponent]
    });
    fixture = TestBed.createComponent(SemTdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
