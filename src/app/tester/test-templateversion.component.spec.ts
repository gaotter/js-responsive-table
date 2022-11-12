import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestTemplateversionComponent } from './test-templateversion.component';

describe('TestTemplateversionComponent', () => {
  let component: TestTemplateversionComponent;
  let fixture: ComponentFixture<TestTemplateversionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTemplateversionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTemplateversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
