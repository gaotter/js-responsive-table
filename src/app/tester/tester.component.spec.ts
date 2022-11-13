import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TesterComponent } from './tester.component';

describe('TesterComponent', () => {
  let component: TesterComponent;
  let fixture: ComponentFixture<TesterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    declarations: [TesterComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
