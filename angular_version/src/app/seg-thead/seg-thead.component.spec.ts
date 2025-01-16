import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SegTheadComponent } from './seg-thead.component';


describe('SemTheadComponent', () => {
  let component: SegTheadComponent;
  let fixture: ComponentFixture<SegTheadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SegTheadComponent]
    });
    fixture = TestBed.createComponent(SegTheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
