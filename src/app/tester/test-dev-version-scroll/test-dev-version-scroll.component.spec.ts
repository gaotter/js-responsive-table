import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDevVersionScrollComponent } from './test-dev-version-scroll.component';

describe('TestDevVersionScrollComponent', () => {
  let component: TestDevVersionScrollComponent;
  let fixture: ComponentFixture<TestDevVersionScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDevVersionScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDevVersionScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
