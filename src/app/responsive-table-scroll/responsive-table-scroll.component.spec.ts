import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResponsiveTableScrollComponent } from './responsive-table-scroll.component';

describe('ResponsiveTableScrollComponent', () => {
  let component: ResponsiveTableScrollComponent;
  let fixture: ComponentFixture<ResponsiveTableScrollComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    declarations: [ResponsiveTableScrollComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveTableScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
