import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingWithStringComponent } from './working-with-string.component';

describe('WorkingWithStringComponent', () => {
  let component: WorkingWithStringComponent;
  let fixture: ComponentFixture<WorkingWithStringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingWithStringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingWithStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should return with name', () => {
    expect(component.greet('niaw')).toBe('Hello niaw');
  });
});
