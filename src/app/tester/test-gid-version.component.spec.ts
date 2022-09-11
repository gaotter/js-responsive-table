import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGidVersionComponent } from './test-gid-version.component';

describe('TestGidVersionComponent', () => {
  let component: TestGidVersionComponent;
  let fixture: ComponentFixture<TestGidVersionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestGidVersionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGidVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
