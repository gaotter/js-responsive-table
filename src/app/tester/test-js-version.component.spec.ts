import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestJsVersionComponent } from './test-js-version.component';

describe('TestJsVersionComponent', () => {
  let component: TestJsVersionComponent;
  let fixture: ComponentFixture<TestJsVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestJsVersionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestJsVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
