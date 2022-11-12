import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestTextversionComponent } from './test-textversion.component';

describe('TestTextversionComponent', () => {
  let component: TestTextversionComponent;
  let fixture: ComponentFixture<TestTextversionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTextversionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTextversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
