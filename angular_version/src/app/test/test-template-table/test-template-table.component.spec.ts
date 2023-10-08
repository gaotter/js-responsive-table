import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTemplateTableComponent } from './test-template-table.component';

describe('TestTemplateTableComponent', () => {
  let component: TestTemplateTableComponent;
  let fixture: ComponentFixture<TestTemplateTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestTemplateTableComponent]
    });
    fixture = TestBed.createComponent(TestTemplateTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
