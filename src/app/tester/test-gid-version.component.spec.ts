import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestGidVersionComponent } from './test-gid-version.component';

describe('TestGidVersionComponent', () => {
  let component: TestGidVersionComponent;
  let fixture: ComponentFixture<TestGidVersionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    declarations: [TestGidVersionComponent],
    teardown: { destroyAfterEach: false }
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
