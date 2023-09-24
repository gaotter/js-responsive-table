import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestDevVersionScrollComponent } from './test-dev-version-scroll.component';

describe('TestDevVersionScrollComponent', () => {
  let component: TestDevVersionScrollComponent;
  let fixture: ComponentFixture<TestDevVersionScrollComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    declarations: [TestDevVersionScrollComponent],
    teardown: { destroyAfterEach: false }
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
