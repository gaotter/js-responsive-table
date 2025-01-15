import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemTheadComponent } from './sem-thead.component';

describe('SemTheadComponent', () => {
  let component: SemTheadComponent;
  let fixture: ComponentFixture<SemTheadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SemTheadComponent]
    });
    fixture = TestBed.createComponent(SemTheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
